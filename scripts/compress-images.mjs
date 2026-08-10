/**
 * Recompresses oversized images under public/ in place.
 *
 * Two rules, both conservative:
 *   - Width is capped at MAX_WIDTH; height is never constrained. Several
 *     backgrounds here are deliberately very tall (1440x12455), and capping the
 *     longest side would destroy them.
 *   - Format and filename never change, so no reference anywhere needs editing.
 *
 * A file is only overwritten when the result is meaningfully smaller, so
 * re-running is safe and already-optimal images are left alone.
 *
 *   node scripts/compress-images.mjs          # dry run, reports savings
 *   node scripts/compress-images.mjs --apply  # writes
 */
import sharp from "sharp";
import { readdir, readFile, stat, writeFile } from "node:fs/promises";
import path from "node:path";

const ROOT = "public";
const MIN_BYTES = 150 * 1024;
const MAX_WIDTH = 1920;
const WEBP_QUALITY = 80;
/** Skip a rewrite that saves less than this — not worth the quality risk. */
const MIN_SAVING_RATIO = 0.1;

const APPLY = process.argv.includes("--apply");

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(full);
    else yield full;
  }
}

async function encode(input, file, meta) {
  const ext = path.extname(file).toLowerCase();
  // Decode from a Buffer, never a path: on Windows sharp keeps the source file
  // open, and writing back to the same path then fails with an opaque
  // "UNKNOWN: unknown error, open".
  let pipeline = sharp(input, { limitInputPixels: false });

  if (meta.width > MAX_WIDTH) {
    pipeline = pipeline.resize({ width: MAX_WIDTH, withoutEnlargement: true });
  }

  if (ext === ".webp") return pipeline.webp({ quality: WEBP_QUALITY, effort: 5 }).toBuffer();
  if (ext === ".png") return pipeline.png({ compressionLevel: 9, palette: true }).toBuffer();
  return pipeline.jpeg({ quality: 82, mozjpeg: true }).toBuffer();
}

const results = [];
for await (const file of walk(ROOT)) {
  const ext = path.extname(file).toLowerCase();
  if (![".webp", ".png", ".jpg", ".jpeg"].includes(ext)) continue;

  const { size } = await stat(file);
  if (size < MIN_BYTES) continue;

  try {
    const input = await readFile(file);
    const meta = await sharp(input, { limitInputPixels: false }).metadata();
    const out = await encode(input, file, meta);
    const saved = size - out.length;

    if (saved <= 0 || saved / size < MIN_SAVING_RATIO) continue;

    if (APPLY) await writeFile(file, out);
    results.push({ file, before: size, after: out.length, saved, width: meta.width });
  } catch (error) {
    console.error(`skip ${file}: ${error.message}`);
  }
}

results.sort((a, b) => b.saved - a.saved);
const totalBefore = results.reduce((n, r) => n + r.before, 0);
const totalSaved = results.reduce((n, r) => n + r.saved, 0);

for (const r of results.slice(0, 15)) {
  console.log(
    `${(r.before / 1024).toFixed(0).padStart(6)} KiB -> ${(r.after / 1024).toFixed(0).padStart(6)} KiB  ${r.file}`
  );
}

console.log(
  `\n${APPLY ? "REWROTE" : "WOULD REWRITE"} ${results.length} files: ` +
    `${(totalBefore / 1024 / 1024).toFixed(1)} MB -> ${((totalBefore - totalSaved) / 1024 / 1024).toFixed(1)} MB ` +
    `(saves ${(totalSaved / 1024 / 1024).toFixed(1)} MB, ${((totalSaved / totalBefore) * 100).toFixed(0)}%)`
);

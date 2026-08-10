/**
 * Reports oversized images under public/ without touching anything.
 *
 * Dimensions matter as much as bytes: a 4000px-wide background painted into a
 * 1920px viewport wastes most of its pixels no matter how well it compresses.
 */
import sharp from "sharp";
import { readdir, stat } from "node:fs/promises";
import path from "node:path";

const ROOT = "public";
const MIN_BYTES = 150 * 1024;
const RASTER = new Set([".webp", ".png", ".jpg", ".jpeg"]);

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(full);
    else yield full;
  }
}

const rows = [];
for await (const file of walk(ROOT)) {
  if (!RASTER.has(path.extname(file).toLowerCase())) continue;
  const { size } = await stat(file);
  if (size < MIN_BYTES) continue;
  try {
    const { width, height, format } = await sharp(file).metadata();
    rows.push({ file, size, width, height, format });
  } catch {
    rows.push({ file, size, width: 0, height: 0, format: "?" });
  }
}

rows.sort((a, b) => b.size - a.size);

let total = 0;
console.log("bytes".padStart(10), "dimensions".padEnd(13), "file");
for (const r of rows) {
  total += r.size;
  console.log(
    String(r.size).padStart(10),
    `${r.width}x${r.height}`.padEnd(13),
    r.file
  );
}
console.log(`\n${rows.length} files over ${MIN_BYTES / 1024} KiB, ${(total / 1024 / 1024).toFixed(1)} MB total`);

"use client";

import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

/**
 * Holds a section's render back until it is close to the viewport.
 *
 * The homepage sections are already `ssr: false`, so none of them exist in the
 * server HTML — but their chunks still loaded and mounted immediately, and each
 * one mounts a large number of framer-motion components. That mounting, not the
 * download, is what the audit attributes to framer-motion.
 *
 * Deferring costs nothing in SEO (the markup was never in the HTML to begin
 * with) and nothing visually: `rootMargin` starts the render well before the
 * section can be seen, and `minHeight` reserves the space so nothing shifts —
 * CLS is currently 0 and must stay there.
 *
 * `triggerOnce` matters: without it a section would unmount when scrolled past
 * and lose any state it holds.
 */
export default function DeferUntilNear({
  children,
  /** Reserved height before the real section renders. */
  minHeight = 400,
  /** How far ahead of the viewport to start rendering. */
  rootMargin = "600px 0px",
}) {
  const { ref, inView } = useInView({ triggerOnce: true, rootMargin });

  /**
   * Safety net. If the observer never fires — an unsupported browser, or any
   * environment where the document is not being rendered — these sections would
   * stay permanently blank, which is a far worse failure than mounting them a
   * little early. After a few seconds everything renders regardless. It lands
   * well after load, so the main-thread saving during page load is unaffected.
   */
  const [fallback, setFallback] = useState(false);
  useEffect(() => {
    if (inView) return;
    const timer = setTimeout(() => setFallback(true), 3000);
    return () => clearTimeout(timer);
  }, [inView]);

  const show = inView || fallback;

  // Once the section is rendered the wrapper switches to `display: contents`,
  // which removes it from the layout entirely — the section becomes a direct
  // child of the parent flex container again, exactly as before. Without this
  // the wrapper itself would be the flex item and could change alignment or
  // width. The observer has already fired by then (triggerOnce), so losing the
  // element's box does not matter.
  return (
    <div
      ref={ref}
      className={show ? undefined : "w-full"}
      style={show ? { display: "contents" } : { minHeight }}
    >
      {show ? children : null}
    </div>
  );
}

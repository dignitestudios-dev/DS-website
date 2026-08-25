"use client";

import { LazyMotion, domMax } from "framer-motion";

/**
 * Makes framer-motion's `m` components usable anywhere in the app.
 *
 * `m` is the same API as `motion` but ships without the feature set built in;
 * the features are loaded once, asynchronously, by this provider. Components
 * therefore only need their import line changed — `m as motion` — and their
 * markup stays exactly as it was.
 *
 * This lives in the ROOT layout rather than GlobalLayout on purpose: 16 routes
 * (the /lp landing pages and several service pages) never render GlobalLayout,
 * and an `m` component outside a LazyMotion boundary renders nothing at all.
 *
 * `domMax` rather than `domAnimation` because CaseStudiesCaraousel uses `drag`,
 * which domAnimation omits — picking the smaller bundle would silently disable
 * dragging.
 */
export default function MotionProvider({ children }) {
  return <LazyMotion features={domMax}>{children}</LazyMotion>;
}

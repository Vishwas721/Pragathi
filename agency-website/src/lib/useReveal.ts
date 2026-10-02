"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Starting pose for each `data-reveal` variant.
const variants: Record<string, gsap.TweenVars> = {
  up: { y: 40, opacity: 0 },
  left: { x: -50, opacity: 0 },
  right: { x: 50, opacity: 0 },
  scale: { scale: 0.85, opacity: 0 },
  flip: { rotateX: -35, y: 30, opacity: 0, transformPerspective: 800, transformOrigin: "50% 0%" },
};

/**
 * Animates every `[data-reveal]` element inside the returned ref as it enters
 * the viewport, and plays it back out when scrolled back above it. Set
 * `data-reveal="left|right|scale|flip"` to change the motion (default "up").
 * Content stays fully visible if JS or motion is disabled.
 */
export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    if (!ref.current) return;
    const root = ref.current;
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const els = gsap.utils.toArray<HTMLElement>("[data-reveal]", root);
      els.forEach((el) => gsap.set(el, variants[el.dataset.reveal || "up"] ?? variants.up));

      ScrollTrigger.batch(els, {
        start: "top 88%",
        onEnter: (batch) =>
          gsap.to(batch, {
            x: 0, y: 0, scale: 1, rotateX: 0, opacity: 1,
            duration: 0.9, stagger: 0.12, ease: "power3.out", overwrite: true,
          }),
        onLeaveBack: (batch) =>
          batch.forEach((el, i) =>
            gsap.to(el, {
              ...(variants[(el as HTMLElement).dataset.reveal || "up"] ?? variants.up),
              duration: 0.5, delay: i * 0.05, ease: "power2.in", overwrite: true,
            })
          ),
      });
    });

    return () => mm.revert();
  }, []);

  return ref;
}

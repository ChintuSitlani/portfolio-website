import type { Variants, Transition } from "framer-motion";

export const transition: Transition = {
  duration: 0.8,
  ease: "easeOut",
};

export const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

export const fadeSlideUp: Variants = {
  hidden: { opacity: 0, y: 40, transition },
  show: { opacity: 1, y: 0, transition },
};

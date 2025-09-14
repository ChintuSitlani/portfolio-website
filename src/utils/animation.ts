import type { Variants, Transition } from "framer-motion";

export const transition: Transition = {
  duration: 1.2,
  ease: "easeOut",
};

export const containerVariants: Variants = {
  show: {
    transition: {
      staggerChildren: 0.4,
      when: "beforeChildren",
    },
  },
  hidden: {
    transition: {
      staggerChildren: 0.3,
      staggerDirection: -1,
    },
  },
};

export const fadeSlideUp: Variants = {
  hidden: { opacity: 0, y: 40, transition },
  show: { opacity: 1, y: 0, transition },
};

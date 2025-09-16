import { useInView } from "react-intersection-observer";

export function useInViewFade(threshold = 0.3) {
    const [ref, inView] = useInView({
        triggerOnce: false, // animate every time it comes into view
        threshold,
    });

    return { ref, inView };
}

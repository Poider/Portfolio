import { useState, useEffect } from "react";
export function useFadeInOnceLoaded(delay = 10) {
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        const timer = setTimeout(() => setVisible(true), delay);
        return () => clearTimeout(timer);
    }, [delay]);
    return visible ? "fadeInBeforeLoaded fadeInOnceLoaded" : " fadeInBeforeLoaded";
}
// Usage in a component
// when you put this in a component, give returned var as class to the div
//10ms then fade in (so it first render at 0) then this is applied

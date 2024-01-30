import { useState, useEffect } from "react";

const useScrollHide = (threshold = 20) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(
        currentScrollY <= lastScrollY + threshold || currentScrollY <= threshold
      );

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [threshold]);

  return { isVisible, setIsVisible };
};

export default useScrollHide;

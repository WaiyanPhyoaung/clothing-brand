import { useState, useEffect } from "react";

const useScrollHide = ({ threshold = 20, topThreshold = 50 }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY <= topThreshold) {
        // Check if the scroll is at the top of the page
        setIsVisible(true);
      } else if (
        currentScrollY > lastScrollY &&
        currentScrollY - lastScrollY > threshold
      ) {
        // Scrolling down more than the threshold
        setIsVisible(false);
      } else if (lastScrollY - currentScrollY > threshold) {
        // Scrolling up more than the threshold
        setIsVisible(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [threshold, topThreshold]);

  return { isVisible, setIsVisible };
};

export default useScrollHide;

import React, { useState, useEffect, useCallback } from 'react';

interface ScrollButtonProps {
  scrollContainerRef: React.RefObject<HTMLDivElement>;
}

const ScrollButton: React.FC<ScrollButtonProps> = ({ scrollContainerRef }) => {
  const [isAtBottom, setIsAtBottom] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const checkScrollPosition = useCallback(() => {
    const container = scrollContainerRef.current;
    if (container) {
      // Show button only if there is something to scroll
      const hasScroll = container.scrollHeight > container.clientHeight;
      setIsVisible(hasScroll);

      // Check if at the bottom (with a 5px tolerance)
      const atBottom = container.scrollHeight - container.scrollTop <= container.clientHeight + 5;
      setIsAtBottom(atBottom);
    } else {
      setIsVisible(false);
    }
  }, [scrollContainerRef]);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      // Initial check
      checkScrollPosition();
      
      // Add event listeners
      container.addEventListener('scroll', checkScrollPosition);
      window.addEventListener('resize', checkScrollPosition);
      
      // Observe content changes to re-evaluate scroll position
      const observer = new MutationObserver(checkScrollPosition);
      observer.observe(container, { childList: true, subtree: true, characterData: true });

      return () => {
        container.removeEventListener('scroll', checkScrollPosition);
        window.removeEventListener('resize', checkScrollPosition);
        observer.disconnect();
      };
    }
  }, [scrollContainerRef, checkScrollPosition]);

  const handleClick = () => {
    const container = scrollContainerRef.current;
    if (container) {
      if (isAtBottom) {
        // Scroll to top
        container.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      } else {
        // Scroll down by 80% of the container's height
        container.scrollBy({
          top: container.clientHeight * 0.8,
          behavior: 'smooth',
        });
      }
    }
  };
  
  if (!isVisible) {
    return null;
  }

  return (
    <button
      onClick={handleClick}
      className="absolute bottom-24 right-6 z-20 w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-blue-700 transition-all duration-300 ease-in-out transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      aria-label={isAtBottom ? "Scroll to top" : "Scroll down"}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8 transition-transform duration-300"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={3}
        style={{ transform: isAtBottom ? 'rotate(180deg)' : 'rotate(0deg)' }}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14m0 0l-4-4m4 4l4-4" />
      </svg>
    </button>
  );
};

export default ScrollButton;

import React, { useState, useRef, useEffect } from 'react';

function ScrollToTopButton() {
  const [isAtTop, setIsAtTop] = useState(true);
  const refContainer = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY === 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    refContainer.current.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div ref={refContainer}>
      {/* 다른 내용 */}
      <button onClick={scrollToTop} disabled={isAtTop}>
        {isAtTop ? '맨 위' : '위로'}
      </button>
    </div>
  );
}

export default ScrollToTopButton;
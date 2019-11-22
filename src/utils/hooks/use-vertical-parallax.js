import { useEffect } from 'react';

function getScrollTop() {
  return window.pageYOffset || document.documentElement.scrollTop;
}

const defaultGetNewTopPosition = scrolled => 0 - scrolled * 0.5 + 'px';

function useVerticalParallax(
  getNodeToAnimate,
  getNewTopPosition = defaultGetNewTopPosition,
) {
  const changeTopPosition = () => {
    const scrollTop = getScrollTop();

    if (scrollTop > 630) {
      getNodeToAnimate().classList.add('changed');
    } else {
      getNodeToAnimate().classList.remove('changed');
    }

  };

  useEffect(() => {
    window.addEventListener('scroll', changeTopPosition);

    return () => {
      window.removeEventListener('scroll', changeTopPosition);
    };
  }, []);
}

export { useVerticalParallax };

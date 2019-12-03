import { useEffect } from 'react';

function getScrollTop() {
  return window.pageYOffset || document.documentElement.scrollTop;
}

function getHeightFirstBlockOnLandingPage() {
  const firstBlock = document.getElementById('first-block-on-landing-page');

  if (firstBlock) {
    return firstBlock.getBoundingClientRect().height;
  }

  return 0;
}

const defaultGetNewTopPosition = scrolled => 0 - scrolled * 0.5 + 'px';

function useVerticalParallax(
  getNodeToAnimate,
  getNewTopPosition = defaultGetNewTopPosition,
) {
  const changeTopPosition = () => {
    const scrollTop = getScrollTop();
    const heightOfFirstBlock = getHeightFirstBlockOnLandingPage();
    const heightOfHeader = getNodeToAnimate().getBoundingClientRect().height;

    if (scrollTop > (heightOfFirstBlock - heightOfHeader)) {
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
  }, [changeTopPosition]);
}

export { useVerticalParallax };

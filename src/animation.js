export const slideAnimation = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
};
export const sliderDotAnimation = {
  initial: { scale: 1, backgroundColor: 'rgb(255,255,255)' },
  animate: {
    scale: 1.5,
    backgroundColor: 'rgb(255, 69, 0)',
  },
  whileHover: {
    scale: 1.5,
  },
};
export const blackFilterAnimation = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: {
    opacity: 0,
  },
};
export const navAnimation = {
  initial: {
    opacity: 0,
    y: '-100vh',
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};
export const sliderContainerAnimation = {
  initial: {
    opacity: 0,
    x: '-100vw',
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
    },
  },
};
export const gameCardAnimation = {
  initial: {
    opacity: 0,
    scale: 0,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
    },
  },
};

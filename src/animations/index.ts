import { AnimationProps, Variants, AnimationControls, TargetAndTransition, VariantLabels } from 'framer-motion'

interface AnimationPropsWithInitial extends AnimationProps {
  initial?: AnimationControls | TargetAndTransition | VariantLabels | boolean
}

export type CustomAnimationProps = AnimationPropsWithInitial & Variants

export const scaleIn: CustomAnimationProps = {
  initial: {
    height: 0,
    overflowY: 'hidden',
  },
  animate: {
    height: 'auto',
    transitionEnd: {
      overflowY: 'auto',
    },
    transition: {
      duration: 0.4,
      ease: 'easeOut',
    },
  },
  exit: {
    height: 0,
    overflowY: 'hidden',
  },
}

export const slideIn: CustomAnimationProps = {
  initial: {
    y: -200,
  },
  animate: {
    y: 0,
    transition: {
      duration: 0.4,
      ease: 'easeInOut',
    },
  },
  exit: {
    y: -200,
    transition: {
      ease: 'easeIn',
    },
  },
}

export const slideFadeIn: CustomAnimationProps = {
  initial: {
    opacity: 0,
    y: -10,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
    },
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: {
      duration: 0.4,
    },
  },
}

export const modalSlideFadeIn: CustomAnimationProps = {
  initial: {
    opacity: 0,
    y: -50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
    },
  },
  exit: {
    opacity: 0,
    y: -50,
    transition: {
      duration: 0.4,
    },
  },
}

export const infiniteLoading: CustomAnimationProps = {
  animate: {
    rotate: 360,
    transition: {
      duration: 1,
      ease: 'linear',
      loop: Infinity,
    },
  },
}

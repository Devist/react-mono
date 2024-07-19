import type { SystemStyleFunction, SystemStyleObject } from '@chakra-ui/theme-tools';
import { cssVar } from '@chakra-ui/theme-tools';

const $size = cssVar('close-button-size');

const baseStyle: SystemStyleFunction = () => {
  return {
    w: [$size.reference],
    h: [$size.reference],
    borderRadius: 'md',
    transitionProperty: 'common',
    transitionDuration: 'normal',
    _disabled: {
      opacity: 0.4,
      cursor: 'not-allowed',
      boxShadow: 'none',
    },
    _hover: { bg: 'transparent' },
    _active: { bg: 'transparent' },
    _focus: {
      boxShadow: 'none',
    },
    _focusVisible: {
      outline: '1px dashed rgba(0,0,0,.5)',
      outlineOffset: '-1px',
    },
  };
};

const sizes: Record<string, SystemStyleObject> = {
  lg: {
    [$size.variable]: '40px',
    fontSize: '16px',
  },
  md: {
    [$size.variable]: '32px',
    fontSize: '12px',
  },
  sm: {
    [$size.variable]: '24px',
    fontSize: '10px',
  },
};

const defaultProps = {
  size: 'md',
};

export default {
  baseStyle,
  sizes,
  defaultProps,
};

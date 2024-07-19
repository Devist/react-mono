import type { SystemStyleObject } from '@chakra-ui/theme-tools';

const baseStyle: SystemStyleObject = {
  transitionProperty: 'common',
  transitionDuration: 'fast',
  transitionTimingFunction: 'ease-out',
  cursor: 'pointer',
  textDecoration: 'none',
  outline: '',
  color: 'inherit',
  _hover: {
    textDecoration: 'underline',
  },
  _focus: {
    boxShadow: '',
  },
  _focusVisible: {
    outline: '1px dashed rgba(0,0,0,.5)',
    outlineOffset: '-1px',
  },
};

export default {
  baseStyle,
};

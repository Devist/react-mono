// https://github.com/chakra-ui/chakra-ui/blob/main/packages/theme/src/components/progress.ts

const baseStyle = {
  filledTrack: {
    bg: 'black',
  },
  track: {
    bg: 'none',
  },
};

const sizes = {
  xs: {
    track: { h: '3px' },
  },
  sm: {
    track: { h: '0.5rem' },
  },
  md: {
    track: { h: '0.75rem' },
  },
  lg: {
    track: { h: '1rem' },
  },
};

const defaultProps = {
  size: 'xs',
  colorScheme: 'black',
};

export default {
  baseStyle,
  sizes,
  defaultProps,
};

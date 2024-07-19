import { mode, transparentize } from '@chakra-ui/theme-tools';

const parts = ['control', 'label', 'description', 'icon'];

function baseStyleControl(props: Record<string, any>) {
  const { colorScheme: c, theme, borderRadius } = props;
  const dark = transparentize(c, 0.8)(theme);

  return {
    w: '100%',
    transition: 'box-shadow 250ms',
    border: '1px solid',
    borderRadius: borderRadius ? borderRadius : '4px',
    borderColor: mode('gray400', 'gray700')(props),
    bg: 'white',
    color: 'white',

    _checked: {
      bg: mode(c, dark)(props),
      borderColor: mode(c, dark)(props),
      color: 'white',

      _disabled: {
        borderColor: mode('gray300', 'transparent')(props),
        bg: mode('gray100', 'whiteAlpha.300')(props),
        color: mode('gray300', 'whiteAlpha.500')(props),
      },
    },

    _disabled: {
      bg: mode('gray100', 'whiteAlpha.100')(props),
      borderColor: mode('gray300', 'transparent')(props),
    },

    _focus: {
      boxShadow: 'none',
    },

    _invalid: {
      borderColor: mode('gray300', 'gray300')(props),
    },
  };
}

const baseStyleLabel = {
  userSelect: 'none',
  _disabled: { opacity: 0.4 },
};

const baseStyleIcon = {
  fontSize: '0.625rem',
};

const baseStyle = (props: Record<string, any>) => ({
  control: baseStyleControl(props),
  label: baseStyleLabel,
  icon: baseStyleIcon,
});

const sizes = {
  sm: {
    control: { h: 4, w: 4 },
    label: { fontSize: 'sm' },
    icon: { fontSize: '0.5rem' },
  },
  md: {
    control: { w: 5, h: 5 },
    label: { fontSize: 'md' },
    icon: { fontSize: '0.625rem' },
  },
  lg: {
    control: { w: 6, h: 6 },
    label: { fontSize: 'lg' },
    icon: { fontSize: '0.9rem' },
  },
};

const defaultProps = {
  size: 'md',
  colorScheme: 'primary',
};

export default {
  parts,
  baseStyle,
  sizes,
  defaultProps,
};

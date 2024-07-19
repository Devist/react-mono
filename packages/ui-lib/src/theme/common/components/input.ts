import { getColor, mode } from '@chakra-ui/theme-tools';

const parts = ['field', 'addon'];

const baseStyle = {
  field: {
    width: '100%',
    outline: 0,
    position: 'relative',
    appearance: 'none',
    transition: 'all 0.2s',
    _focus: {
      boxShadow: 'none !important',
    },
  },
};

const size = {
  lg: {
    fontSize: 'lg',
    pl: 4,
    pr: 4,
    h: 12,
    borderRadius: 0,
  },

  md: {
    fontSize: 'md',
    pl: 4,
    pr: 4,
    h: 10,
    borderRadius: 0,
  },

  sm: {
    fontSize: 'sm',
    pl: 3,
    pr: 3,
    h: 8,
    borderRadius: 0,
  },
};

const sizes = {
  lg: {
    field: size.lg,
    addon: size.lg,
  },
  md: {
    field: size.md,
    addon: size.md,
  },
  sm: {
    field: size.sm,
    addon: size.sm,
  },
};

function getDefaults(props: Record<string, any>) {
  const { focusBorderColor: fc, errorBorderColor: ec } = props;
  return {
    focusBorderColor: fc || mode('gray900', 'transparent')(props),
    errorBorderColor: ec || 'primary',
  };
}

function variantOutline(props: Record<string, any>) {
  const { theme } = props;
  const { focusBorderColor: fc, errorBorderColor: ec } = getDefaults(props);

  return {
    field: {
      border: '1px solid',
      borderColor: 'gray300',
      bg: 'inherit',
      _hover: {
        borderColor: mode('gray900', 'whiteAlpha.400')(props),
      },
      _readOnly: {
        boxShadow: 'none !important',
        userSelect: 'all',
      },
      _disabled: {
        opacity: 0.6,
        cursor: 'not-allowed',
      },
      _focus: {
        zIndex: 1,
        borderColor: getColor(theme, fc),
        boxShadow: 'none !important',
      },
      _invalid: {
        borderColor: getColor(theme, ec),
        boxShadow: 'none !important',
      },
    },
    addon: {
      border: '1px solid',
      borderColor: mode('inherit', 'whiteAlpha.50')(props),
      bg: null,
    },
  };
}

function variantFilled(props: Record<string, any>) {
  const { theme } = props;
  const { errorBorderColor: ec } = getDefaults(props);

  return {
    field: {
      border: '1px solid',
      borderColor: 'transparent',
      bg: mode(`gray150`, 'whiteAlpha.50')(props),
      _hover: {
        bg: mode(`gray150`, 'whiteAlpha.50')(props),
      },
      _readOnly: {
        boxShadow: 'none !important',
        userSelect: 'all',
      },
      _disabled: {
        opacity: 0.6,
        cursor: 'not-allowed',
      },
      _focus: {
        bg: mode(`gray150`, 'whiteAlpha.50')(props),
        borderColor: mode(`gray150`, 'whiteAlpha.50')(props),
      },
      _invalid: {
        borderColor: getColor(theme, ec),
      },
    },
    addon: {
      border: '1px solid',
      borderColor: 'transparent',
      bg: mode(`gray150`, 'whiteAlpha.50')(props),
    },
  };
}

const variantUnstyled = {
  field: {
    bg: 'transparent',
    pl: 0,
    pr: 0,
    height: 'auto',
  },
  addon: {
    bg: 'transparent',
    pl: 0,
    pr: 0,
    height: 'auto',
  },
};

const variants = {
  outline: variantOutline,
  filled: variantFilled,
  unstyled: variantUnstyled,
};

const defaultProps = {
  size: 'md',
  variant: 'outline',
};

export default {
  parts,
  baseStyle,
  sizes,
  variants,
  defaultProps,
};

type Dict = Record<string, any>;

const baseStyle = {
  lineHeight: '1.2',
  fontWeight: 'normal',
  borderRadius: 0,
  outline: '1px dashed transparent',
  outlineOffset: '-1px',
  _focus: {
    boxShadow: 'none',
  },
  _focusVisible: {
    outline: '1px dashed rgba(0,0,0,.5)',
  },
  _disabled: {
    opacity: 0.4,
    cursor: 'not-allowed',
    boxShadow: 'none',
  },
};

function variantOutline(props: Dict) {
  const { colorScheme: c } = props;
  let borderColor = 'currentColor';
  let color = c;

  if (c === 'primary3') {
    borderColor = 'primary';
    color = 'primary';
  }

  if (c === 'tertiary1') {
    borderColor = 'gray900';
    color = 'gray900';
  }

  if (c === 'tertiary2') {
    borderColor = 'gray700';
    color = 'gray500';
  }

  if (c === 'tertiary3') {
    borderColor = 'gray300';
    color = 'gray900';
  }

  if (c === 'tertiary4') {
    borderColor = 'gray300';
    color = 'gray500';
  }

  return {
    border: '1px solid',
    borderColor,
    color,
  };
}

function variantSolid(props: Dict) {
  const { colorScheme: c } = props;
  let color = 'white';
  let bg = c;

  if (c === 'primary1') {
    bg = 'primary';
  }

  if (c === 'primary2') {
    bg = 'gray900';
  }

  if (c === 'secondary1') {
    bg = 'gray700';
  }

  if (c === 'secondary2') {
    bg = 'gray400';
  }

  if (c === 'secondary3') {
    bg = 'gray350';
    color = 'gray800';
  }

  if (c === 'secondary4') {
    bg = 'gray300';
    color = 'gray700';
  }

  return {
    color,
    bg,
    _hover: { bg },
    _active: { bg },
    _disabled: { bg },
  };
}

const variantUnstyled = {
  bg: 'none',
  color: 'inherit',
  display: 'inline',
  lineHeight: 'inherit',
  m: 0,
  p: 0,
};

const variants = {
  outline: variantOutline,
  solid: variantSolid,
  unstyled: variantUnstyled,
};

const sizes = {
  xl: {
    h: '60px',
    minW: 14,
    fontSize: 'xl',
    px: 8,
  },
  lg: {
    h: '52px',
    minW: 12,
    fontSize: 'lg',
    px: 6,
  },
  md: {
    h: '44px',
    minW: 10,
    fontSize: 'md',
    px: 4,
  },
  sm: {
    h: '32px',
    minW: 8,
    fontSize: 'sm',
    px: 3,
  },
  xs: {
    h: '24px',
    minW: 6,
    fontSize: 'xs',
    px: 2,
  },
};

const defaultProps = {
  variant: 'solid',
  size: 'md',
  colorScheme: 'primary1',
};

export default {
  baseStyle,
  variants,
  sizes,
  defaultProps,
};

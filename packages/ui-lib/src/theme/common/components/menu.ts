import { mode } from '@chakra-ui/theme-tools';

const parts = ['item', 'command', 'list', 'button', 'groupTitle'];

function baseStyleList(props: Record<string, any>) {
  return {
    bg: mode(`#fff`, `gray800`)(props),
    boxShadow: mode(`sm`, `dark-lg`)(props),
    color: 'inherit',
    minW: '4xs',
    py: '2',
    zIndex: 1,
    borderRadius: 'md',
    borderWidth: '1px',
  };
}

function baseStyleItem() {
  return {
    py: '0.4rem',
    px: '0.8rem',
    fontSize: 'sm',
    transition: 'background 50ms ease-in 0s',
    _focus: null,
    _disabled: {
      opacity: 0.4,
      cursor: 'not-allowed',
    },
  };
}

const baseStyleGroupTitle = {
  mx: 4,
  my: 2,
  fontWeight: 'semibold',
  fontSize: 'xs',
};

const baseStyleCommand = {
  opacity: 0.6,
};

const baseStyle = function (props: Record<string, any>) {
  return {
    list: baseStyleList(props),
    item: baseStyleItem(),
    groupTitle: baseStyleGroupTitle,
    command: baseStyleCommand,
  };
};

export default {
  parts,
  baseStyle,
};

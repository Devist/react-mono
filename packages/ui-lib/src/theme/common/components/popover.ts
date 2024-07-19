import { mode } from '@chakra-ui/theme-tools';

const parts = ['content', 'header', 'body', 'footer'];

function baseStyleContent(props: Record<string, any>) {
  const bg = mode('white', 'gray900')(props);
  const borderColor = mode('#ccc', '#777')(props);

  return {
    bg: bg,
    '--popper-arrow-bg': bg,
    '--popper-arrow-shadow-color': borderColor,
    border: '1px solid',
    borderColor: borderColor,
    borderRadius: 'xl',
    boxShadow: 'lg',
    w: '100%',
    maxW: 'xs',
    zIndex: '1',
    _focus: {
      outline: 0,
      boxShadow: 'none',
    },
  };
}

const baseStyleHeader = {
  px: 4,
  pt: 4,
  pb: 2,
  borderBottomWidth: 0,
  fontWeight: 'bold',
};

const baseStyleBody = {
  px: 4,
  py: 2,
};

const baseStyleFooter = {
  px: 4,
  pt: 2,
  pb: 4,
  borderTopWidth: 0,
};

const baseStyle = function (props: Record<string, any>) {
  return {
    content: baseStyleContent(props),
    header: baseStyleHeader,
    body: baseStyleBody,
    footer: baseStyleFooter,
  };
};

export default {
  parts,
  baseStyle,
};

import { mode } from '@chakra-ui/theme-tools';

const parts = ['overlay', 'dialogContainer', 'dialog', 'header', 'closeButton', 'body', 'footer'];

const baseStyleOverlay = {
  bg: 'black_alpha80',
  zIndex: 'modal',
};

type Dict = Record<string, any>;

function baseStyleDialogContainer(props: Dict) {
  const { isCentered, scrollBehavior, size } = props;

  return {
    display: 'flex',
    zIndex: 'modal',
    justifyContent: 'center',
    alignItems: isCentered ? 'center' : 'flex-start',
    overflow: scrollBehavior === 'inside' ? 'hidden' : 'auto',
    '@supports(height: -webkit-fill-available)': {},
    maxHeight: size !== 'full' ? '100%' : undefined,
  };
}

export const BASE_MODAL_MARGIN_TOP = '6.25rem';

function baseStyleDialog(props: Dict) {
  const { scrollBehavior } = props;

  return {
    borderRadius: 'xl',
    bg: mode('white', 'gray700')(props),
    color: 'inherit',
    mt: BASE_MODAL_MARGIN_TOP,
    mb: '1.75rem',
    zIndex: 'modal',
    maxH: scrollBehavior === 'inside' ? `calc(100% -${BASE_MODAL_MARGIN_TOP})` : undefined,
  };
}

const baseStyleHeader = {
  px: 6,
  py: 3,
  fontSize: 'xl',
  fontWeight: 'semibold',
};

const baseStyleCloseButton = {
  position: 'absolute',
  top: 2,
  insetEnd: 3,
};

function baseStyleBody(props: Dict) {
  const { scrollBehavior } = props;
  return {
    px: 6,
    py: 2,
    flex: 1,
    overflow: scrollBehavior === 'inside' ? 'auto' : undefined,
  };
}

const baseStyleFooter = {
  px: 0,
  py: 0,
  justifyContent: 'start',
  borderBottomLeftRadius: 'xl',
  borderBottomRightRadius: 'xl',
  overflow: 'hidden',
};

const baseStyle = (props: Dict) => ({
  overlay: baseStyleOverlay,
  dialogContainer: baseStyleDialogContainer(props),
  dialog: baseStyleDialog(props),
  header: baseStyleHeader,
  closeButton: baseStyleCloseButton,
  body: baseStyleBody(props),
  footer: baseStyleFooter,
});

/**
 * Since the `maxWidth` prop references theme.sizes internally,
 * we can leverage that to size our modals.
 */
function getSize(value: string) {
  if (value === 'full') {
    return {
      dialog: {
        maxW: '100vw',
        minH: 'calc(100vh - 3.75rem)',
        // FIXED: 긴급으로 인하여 버전업하면서 제거된 내용 적용
        // @see https://github.com/chakra-ui/chakra-ui/commit/0cae42007308e94ef9a9fdbae3de259871ca33be#diff-120f56c90a4fdd0f7e778a14ed52a75dc72fe085cae706d1d422ac31029060e3L91
        '@supports(min-height: -webkit-fill-available)': {
          minH: '-webkit-fill-available',
        },
      },
    };
  }
  return { dialog: { maxW: value } };
}

const sizes = {
  xs: getSize('xs'),
  sm: getSize('sm'),
  md: getSize('md'),
  lg: getSize('lg'),
  xl: getSize('xl'),
  '2xl': getSize('2xl'),
  '3xl': getSize('3xl'),
  '4xl': getSize('4xl'),
  '5xl': getSize('5xl'),
  '6xl': getSize('6xl'),
  full: getSize('full'),
};

const defaultProps = {
  size: 'md',
};

export default {
  parts,
  baseStyle,
  sizes,
  defaultProps,
};

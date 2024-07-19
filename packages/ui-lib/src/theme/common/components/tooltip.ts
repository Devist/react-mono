import { mode, cssVar } from '@chakra-ui/theme-tools';

const $bg = cssVar('tooltip-bg');
const $arrowBg = cssVar('popper-arrow-bg');

function baseStyle(props: Record<string, any>) {
  const bg = mode('gray700', 'gray300')(props);

  return {
    [$bg.variable]: `colors.${bg}`,
    px: '8px',
    py: '2px',
    bg: [$bg.reference],
    [$arrowBg.variable]: [$bg.reference],
    color: mode('white', 'gray900')(props),
    borderRadius: 'sm',
    fontWeight: 'medium',
    pointerEvents: 'none',
    fontSize: 'sm',
    boxShadow: 'md',
    maxW: '320px',
  };
}

export default {
  baseStyle,
};

import { cssVar, defineStyle, defineStyleConfig } from '@chakra-ui/styled-system';
import { useToken } from '@chakra-ui/system';

const $iconBoxSize = cssVar('button-icon-box-size');

const baseStyle = defineStyle({
  display: 'inline-flex',
  alignItems: 'center',
  position: 'relative',
  px: 1.5,
  verticalAlign: 'middle',
  fontWeight: 'medium',
  '& svg': {
    boxSize: $iconBoxSize.reference,
  },
});

type Variant = 'solid' | 'outline';

const colorSchemeMap: Record<Variant, any> = {
  solid: {
    primary_01: { bg: 'primary', color: 'white' },
    primary_02: { bg: 'primary_light', color: 'primary_dark' },
    primary_03: { bg: 'gray150', color: 'primary_dark' },
    gray_01: { bg: 'gray900', color: 'white' },
    gray_02: { bg: 'gray150', color: 'gray900' },
    gray_03: { bg: 'gray150', color: 'gray700' },
    gray_04: { bg: 'gray150', color: 'gray500' },
    white_01: { bg: 'white', color: 'gray700' },
    black_opacity_01: { bg: 'black_alpha45', color: 'white' },
    white_opacity_01: { bg: 'white_alpha60', color: 'gray900' },
    biz_01: { bg: 'service.biz', color: 'white' },
    farmersmarket_01: { bg: 'gray150', color: 'service.farmersmarket' },
    freshgreen_01: { bg: 'gray150', color: 'service.freshgreen_primary' },
  },
  outline: {
    primary_01: { borderColor: 'primary', color: 'primary' },
    gray_01: { borderColor: 'gray900', color: 'gray900' },
    gray_02: { borderColor: 'gray300', color: 'gray900' },
    gray_03: { borderColor: 'gray300', color: 'gray700' },
    white_01: { borderColor: 'white', color: 'white' },
  },
};

type Shape = 'rectangle' | 'round' | 'oval';

const shapeMap: Record<Shape, any> = {
  rectangle: { borderRadius: 'none' },
  round: { borderRadius: 'md' },
  oval: { borderRadius: 'full' },
};

const variantSolid = defineStyle((props) => {
  const { colorScheme: c, shape: s } = props;

  const { bg = 'none', color = 'inherit' } = colorSchemeMap.solid[c] ?? {};
  const { borderRadius = 'none' } = shapeMap[s] ?? {};

  return {
    // colorScheme
    bg,
    color,

    // shape
    borderRadius,
  };
});

const variantOutline = defineStyle((props) => {
  const { colorScheme: c, shape: s } = props;

  const { borderColor = 'transparent', color = 'inherit' } = colorSchemeMap.outline[c] ?? {};
  const { borderRadius = 'none' } = shapeMap[s] ?? {};

  const boxShadowColor = useToken('colors', borderColor);

  return {
    // colorScheme
    ...(boxShadowColor && { boxShadow: `inset 0 0 0 1px ${boxShadowColor}` }),
    color,

    // shape
    borderRadius,
  };
});

const variantCustom = defineStyle((props) => {
  const {
    shape: s,
    textColor,
    color,
    bg,
    background,
    bgColor,
    backgroundColor,
    borderColor,
  } = props;

  const { borderRadius = 'none' } = shapeMap[s] ?? {};

  const boxShadowColor = useToken('colors', borderColor);

  return {
    // colorScheme
    bg,
    background,
    bgColor,
    backgroundColor,
    ...(boxShadowColor && { boxShadow: `inset 0 0 0 1px ${boxShadowColor}` }),
    textColor,
    color,

    // shape
    borderRadius,
  };
});

const variants = {
  solid: variantSolid,
  outline: variantOutline,
  custom: variantCustom,
};

const sizes = {
  '3xs': defineStyle({
    height: '16px',
    fontSize: '2xs',
    [$iconBoxSize.variable]: 'sizes.3',
  }),
  '2xs': defineStyle({
    height: '20px',
    fontSize: '2xs',
    [$iconBoxSize.variable]: 'sizes.3',
  }),
  xs: defineStyle({
    height: '24px',
    fontSize: 'xs',
    [$iconBoxSize.variable]: 'sizes.4',
  }),
};

export const LabelTheme = defineStyleConfig({
  baseStyle,
  variants,
  sizes,
  defaultProps: {
    variant: 'solid',
    size: 'xs',
    colorScheme: 'primary_01',
  },
});

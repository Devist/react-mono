import { cssVar, defineStyle, defineStyleConfig } from '@chakra-ui/styled-system';
import { useToken } from '@chakra-ui/system';
import { DS_THEME_EMART, DS_THEME_SSG } from '../../selector';

const $borderRadius = cssVar('button-border-radius');
const $iconBoxSize = cssVar('button-icon-box-size');

const baseStyle = defineStyle({
  display: 'inline-flex',
  appearance: 'none',
  alignItems: 'center',
  justifyContent: 'center',
  userSelect: 'none',
  position: 'relative',
  px: 3,
  verticalAlign: 'middle',
  lineHeight: 'shorter',
  fontWeight: 'medium',
  '& svg': {
    boxSize: $iconBoxSize.reference,
  },
  _disabled: {
    cursor: 'not-allowed',
  },
});

type Variant = 'solid' | 'outline';

const colorSchemeMap: Record<Variant, any> = {
  solid: {
    primary_01: { bg: 'primary', color: 'white' },
    primary_02: { bg: 'primary_light', color: 'primary_dark' },
    gray_01: { bg: 'gray900', color: 'white' },
    gray_02: { bg: 'gray800', color: 'white' },
    gray_03: { bg: 'gray300', color: 'gray900' },
    gray_04: { bg: 'gray200', color: 'gray900' },
    gray_05: { bg: 'gray150', color: 'gray900' },
    gray_06: { bg: 'gray150', color: 'gray700' },
    white_01: { bg: 'white', color: 'gray900' },
    ssg_food_01: { bg: 'service.ssg_food', color: 'gray900' },
    universe_01: { bg: 'service.universe_primary_01', color: 'white' },
    universe_02: { bg: 'service.universe_primary_02', color: 'white' },
    universe_03: { bg: 'service.universe_secondary_01', color: 'white' },
  },
  outline: {
    primary_01: { borderColor: 'primary', color: 'primary' },
    primary_02: { borderColor: 'gray300', color: 'primary' },
    gray_01: { borderColor: 'gray900', color: 'gray900' },
    gray_02: { borderColor: 'gray350', color: 'gray900' },
    gray_03: { borderColor: 'gray300', color: 'gray900' },
    gray_04: { borderColor: 'gray300', color: 'gray700' },
    white_01: { borderColor: 'white', color: 'white' },
  },
};

type Shape = 'rectangle' | 'round' | 'oval';

const shapeMap: Record<Shape, any> = {
  rectangle: { borderRadius: 'none' },
  round: { borderRadius: $borderRadius.reference },
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

    // state
    _disabled: { bg: 'gray350', color: 'gray400' },
  };
});

const variantOutline = defineStyle((props) => {
  const { colorScheme: c, shape: s } = props;

  const { borderColor = 'transparent', color = 'inherit' } = colorSchemeMap.outline[c] ?? {};
  const { borderRadius = 'none' } = shapeMap[s] ?? {};

  const [boxShadowColor, gray350] = useToken('colors', [borderColor, 'gray350']);

  return {
    // colorScheme
    ...(boxShadowColor && { boxShadow: `inset 0 0 0 1px ${boxShadowColor}` }),
    color,

    // shape
    borderRadius,

    // state
    _disabled: { boxShadow: `inset 0 0 0 1px ${gray350}`, color: 'gray350' },
  };
});

// const variantCustom = defineStyle((props) => {
//   const {
//     shape: s,
//     textColor,
//     color,
//     bg,
//     background,
//     bgColor,
//     backgroundColor,
//     borderColor,
//   } = props;

//   const { borderRadius = 'none' } = shapeMap[s] ?? {};

//   const boxShadowColor = useToken('colors', borderColor);

//   return {
//     // colorScheme
//     bg,
//     background,
//     bgColor,
//     backgroundColor,
//     ...(boxShadowColor && { boxShadow: `inset 0 0 0 1px ${boxShadowColor}` }),
//     textColor,
//     color,

//     // shape
//     borderRadius,

//     // state
//     disabled: { opacity: 0.4 },
//   };
// });

const variants = {
  solid: variantSolid,
  outline: variantOutline,
};

const sizes = {
  '2xs': defineStyle({
    height: '20px',
    fontSize: '2xs',
    [DS_THEME_SSG]: { [$borderRadius.variable]: 'radii.md' },
    [DS_THEME_EMART]: { [$borderRadius.variable]: 'radii.md' },
    [$iconBoxSize.variable]: 'sizes.3',
  }),
  xs: defineStyle({
    height: '24px',
    fontSize: 'xs',
    [DS_THEME_SSG]: { [$borderRadius.variable]: 'radii.md' },
    [DS_THEME_EMART]: { [$borderRadius.variable]: 'radii.lg' },
    [$iconBoxSize.variable]: 'sizes.4',
  }),
  sm: defineStyle({
    height: '28px',
    fontSize: 'sm',
    [DS_THEME_SSG]: { [$borderRadius.variable]: 'radii.md' },
    [DS_THEME_EMART]: { [$borderRadius.variable]: 'radii.lg' },
    [$iconBoxSize.variable]: 'sizes.4',
  }),
  md: defineStyle({
    height: '32px',
    fontSize: 'sm',
    [DS_THEME_SSG]: { [$borderRadius.variable]: 'radii.lg' },
    [DS_THEME_EMART]: { [$borderRadius.variable]: 'radii.xl' },
    [$iconBoxSize.variable]: 'sizes.4',
  }),
  lg: defineStyle({
    height: '36px',
    fontSize: 'sm',
    [DS_THEME_SSG]: { [$borderRadius.variable]: 'radii.lg' },
    [DS_THEME_EMART]: { [$borderRadius.variable]: 'radii.xl' },
    [$iconBoxSize.variable]: 'sizes.4',
  }),
  xl: defineStyle({
    height: '40px',
    fontSize: 'md',
    [DS_THEME_SSG]: { [$borderRadius.variable]: 'radii.xl' },
    [DS_THEME_EMART]: { [$borderRadius.variable]: 'radii.2xl' },
    [$iconBoxSize.variable]: 'sizes.4',
  }),
  '2xl': defineStyle({
    height: '52px',
    fontSize: 'xl',
    [DS_THEME_SSG]: { [$borderRadius.variable]: 'radii.xl' },
    [DS_THEME_EMART]: { [$borderRadius.variable]: 'radii.2xl' },
    [$iconBoxSize.variable]: 'sizes.5',
  }),
  '3xl': defineStyle({
    height: '60px',
    fontSize: '2xl',
    [DS_THEME_SSG]: { [$borderRadius.variable]: 'radii.xl' },
    [DS_THEME_EMART]: { [$borderRadius.variable]: 'radii.2xl' },
    [$iconBoxSize.variable]: 'sizes.6',
  }),
};

export const ButtonTheme = defineStyleConfig({
  baseStyle,
  variants,
  sizes,
  defaultProps: {
    variant: 'solid',
    size: 'md',
    colorScheme: 'primary_01',
  },
});

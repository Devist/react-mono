import { cssVar, defineStyle, defineStyleConfig } from '@chakra-ui/styled-system';
import { useToken } from '@chakra-ui/system';
import { ButtonTheme } from './button';
import { DS_THEME_EMART, DS_THEME_SSG } from '../../selector';

const $borderRadius = cssVar('button-border-radius');
const $iconBoxSize = cssVar('button-icon-box-size');

const baseStyle = defineStyle({
  ...ButtonTheme.baseStyle,
  padding: 0,
});

type Variant = 'solid' | 'outline' | 'default';

const colorSchemeMap: Record<Variant, any> = {
  solid: {
    white_01: { bg: 'white', color: 'gray900' },
    white_opacity_01: { bg: 'white_alpha80', color: 'gray900' },
    black_opacity_01: { bg: 'black_alpha80', color: 'white' },
    black_opacity_02: { bg: 'black_alpha45', color: 'white' },
    black_opacity_03: { bg: 'black_alpha20', color: 'white' },
  },
  outline: {
    primary_01: { borderColor: 'gray300', color: 'primary' },
    gray_01: { borderColor: 'gray500', color: 'gray500' },
    gray_02: { borderColor: 'gray300', color: 'gray900' },
    white_01: { borderColor: 'white', color: 'white' },
  },
  default: {
    primary_01: { color: 'primary' },
    gray_01: { color: 'gray900' },
    gray_02: { color: 'gray500' },
    white_01: { color: 'white' },
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

const variantDefault = defineStyle((props) => {
  const { colorScheme: c, shape: s } = props;

  const { color = 'inherit' } = colorSchemeMap.default[c] ?? {};
  const { borderRadius = 'none' } = shapeMap[s] ?? {};

  return {
    // colorScheme
    color,

    // shape
    borderRadius,

    // state
    _disabled: { color: 'gray350' },
  };
});

const variants = {
  solid: variantSolid,
  outline: variantOutline,
  default: variantDefault,
};

const sizes = {
  '2xs': defineStyle({
    height: '20px',
    minWidth: '20px',
    [DS_THEME_SSG]: { [$borderRadius.variable]: 'radii.md' },
    [DS_THEME_EMART]: { [$borderRadius.variable]: 'radii.md' },
    [$iconBoxSize.variable]: 'sizes.3',
  }),
  xs: defineStyle({
    height: '24px',
    minWidth: '24px',
    [DS_THEME_SSG]: { [$borderRadius.variable]: 'radii.md' },
    [DS_THEME_EMART]: { [$borderRadius.variable]: 'radii.md' },
    [$iconBoxSize.variable]: 'sizes.4',
  }),
  sm: defineStyle({
    height: '28px',
    minWidth: '28px',
    [DS_THEME_SSG]: { [$borderRadius.variable]: 'radii.md' },
    [DS_THEME_EMART]: { [$borderRadius.variable]: 'radii.md' },
    [$iconBoxSize.variable]: 'sizes.5',
  }),
  md: defineStyle({
    height: '32px',
    minWidth: '32px',
    [DS_THEME_SSG]: { [$borderRadius.variable]: 'radii.lg' },
    [DS_THEME_EMART]: { [$borderRadius.variable]: 'radii.lg' },
    [$iconBoxSize.variable]: 'sizes.6',
  }),
  lg: defineStyle({
    height: '36px',
    minWidth: '36px',
    [DS_THEME_SSG]: { [$borderRadius.variable]: 'radii.lg' },
    [DS_THEME_EMART]: { [$borderRadius.variable]: 'radii.lg' },
    [$iconBoxSize.variable]: 'sizes.7',
  }),
  xl: defineStyle({
    height: '40px',
    minWidth: '40px',
    [DS_THEME_SSG]: { [$borderRadius.variable]: 'radii.xl' },
    [DS_THEME_EMART]: { [$borderRadius.variable]: 'radii.xl' },
    [$iconBoxSize.variable]: 'sizes.8',
  }),
  '2xl': defineStyle({
    height: '52px',
    minWidth: '52px',
    [DS_THEME_SSG]: { [$borderRadius.variable]: 'radii.xl' },
    [DS_THEME_EMART]: { [$borderRadius.variable]: 'radii.xl' },
    [$iconBoxSize.variable]: 'sizes.8',
  }),
};

export const IconButtonTheme = defineStyleConfig({
  baseStyle,
  variants,
  sizes,
  defaultProps: {
    variant: 'default',
    size: 'md',
    colorScheme: 'primary_01',
  },
});

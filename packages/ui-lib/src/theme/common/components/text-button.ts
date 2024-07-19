import { cssVar, defineStyle, defineStyleConfig } from '@chakra-ui/styled-system';
import { ButtonTheme } from './button';

const $iconBoxSize = cssVar('button-icon-box-size');

const colorSchemeMap: Record<string, any> = {
  primary_01: { color: 'primary' },
  gray_01: { color: 'gray900' },
  gray_02: { color: 'gray700' },
  gray_03: { color: 'gray500' },
  white_01: { color: 'white' },
  black_opacity_01: { color: 'black_alpha80' },
};

const baseStyle = defineStyle((props) => {
  const { colorScheme: c, hasUnderline: u, LeftIcon, RightIcon } = props;

  const { color = 'inherit' } = colorSchemeMap[c] ?? {};
  const hasUnderline = u || (!LeftIcon && !RightIcon);

  return {
    ...ButtonTheme.baseStyle,
    padding: 0,
    lineHeight: 'normal',
    verticalAlign: 'baseline',

    // colorScheme
    color,

    // etc
    ...(hasUnderline && { textDecoration: 'underline' }),

    // state
    _disabled: {
      ...ButtonTheme.baseStyle?._disabled,
      color: 'gray350',
    },
    _hover: {
      ...(hasUnderline && { textDecoration: 'underline' }),
    },
  };
});

const sizes = {
  '2xs': defineStyle({
    height: '20px',
    fontSize: '2xs',
    [$iconBoxSize.variable]: 'sizes.3',
  }),
  xs: defineStyle({
    height: '20px',
    fontSize: 'xs',
    [$iconBoxSize.variable]: 'sizes.4',
  }),
  sm: defineStyle({
    height: '20px',
    fontSize: 'sm',
    [$iconBoxSize.variable]: 'sizes.4',
  }),
  md: defineStyle({
    height: '20px',
    fontSize: 'md',
    [$iconBoxSize.variable]: 'sizes.4',
  }),
  lg: defineStyle({
    height: '22px',
    fontSize: 'lg',
    [$iconBoxSize.variable]: 'sizes.4',
  }),
  xl: defineStyle({
    height: '24px',
    fontSize: 'xl',
    [$iconBoxSize.variable]: 'sizes.5',
  }),
  '2xl': defineStyle({
    height: '26px',
    fontSize: '2xl',
    [$iconBoxSize.variable]: 'sizes.6',
  }),
};

export const TextButtonTheme = defineStyleConfig({
  baseStyle,
  sizes,
  defaultProps: {
    size: 'md',
    colorScheme: 'primary_01',
  },
});

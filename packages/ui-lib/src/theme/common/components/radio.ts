import { createMultiStyleConfigHelpers, defineStyle } from '@chakra-ui/styled-system';
import { CheckboxTheme } from './checkbox';

const { defineMultiStyleConfig, definePartsStyle } = createMultiStyleConfigHelpers([
  'container',
  'control',
  'label',
]);

const baseStyleControl = defineStyle((props) => {
  const controlStyle = CheckboxTheme.baseStyle?.(props).control ?? {};

  return {
    ...controlStyle,
    borderRadius: 'full',
    _checked: {
      ...controlStyle?.['_checked'],
      bg: controlStyle?.['_checked'].color,
      color: controlStyle?.['_checked'].bg,

      _disabled: {
        ...controlStyle?.['_checked']._disabled,
        bg: 'white',
        borderColor: controlStyle?.['_checked']._disabled.color,
      },

      _before: {
        content: `""`,
        display: 'inline-block',
        pos: 'relative',
        w: 'calc((100% + 2px) * 0.6)',
        h: 'calc((100% + 2px) * 0.6)',
        borderRadius: '50%',
        bg: 'currentColor',
      },
    },
  };
});

const baseStyle = definePartsStyle((props) => ({
  container: CheckboxTheme.baseStyle?.(props).container,
  control: baseStyleControl(props),
  label: CheckboxTheme.baseStyle?.(props).label,
}));

const sizes = {
  '3xs': definePartsStyle({
    control: { w: 4, h: 4 },
    label: { fontSize: 'sm', lineHeight: 6 },
  }),
  '2xs': definePartsStyle({
    control: { w: 5, h: 5 },
    label: { fontSize: 'md', lineHeight: 7 },
  }),
  xs: definePartsStyle({
    control: { w: 6, h: 6 },
    label: { fontSize: 'lg', lineHeight: 8 },
  }),
};

export const RadioTheme = defineMultiStyleConfig({
  baseStyle,
  sizes,
  defaultProps: {
    size: 'xs',
    colorScheme: 'primary',
  },
});

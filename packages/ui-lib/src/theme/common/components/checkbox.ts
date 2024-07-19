import { createMultiStyleConfigHelpers, defineStyle } from '@chakra-ui/styled-system';

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers([
  'container',
  'control',
  'icon',
  'label',
]);

const baseStyleContainer = defineStyle({
  display: 'inline-flex',
  alignItems: 'center',
  verticalAlign: 'top',
  cursor: 'pointer',
  position: 'relative',

  _disabled: {
    cursor: 'not-allowed',
  },
});

const baseStyleControl = defineStyle((props) => {
  const { colorScheme, radius } = props;

  return {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    verticalAlign: 'top',
    userSelect: 'none',
    flexShrink: 0,
    border: '1px solid',
    borderRadius: radius === 'round' ? 'md' : 'unset',
    borderColor: 'gray400',
    color: 'white',
    transitionProperty: 'box-shadow',
    transitionDuration: 'normal',

    _checked: {
      bg: colorScheme,
      borderColor: colorScheme,
      color: 'white',

      _disabled: {
        color: 'gray300',
      },
    },

    _indeterminate: {
      bg: colorScheme,
      borderColor: colorScheme,
      color: 'white',
    },

    _disabled: {
      bg: 'gray100',
      borderColor: 'gray300',
    },

    _focusVisible: {
      boxShadow: 'outline',
    },

    _invalid: {
      borderColor: 'primary',
    },
  };
});

const baseStyleIcon = defineStyle({
  transitionProperty: 'transform',
  transitionDuration: 'normal',
});

const baseStyleLabel = defineStyle({
  userSelect: 'none',
  _disabled: { opacity: 0.4 },
});

const baseStyle = definePartsStyle((props) => ({
  container: baseStyleContainer,
  control: baseStyleControl(props),
  icon: baseStyleIcon,
  label: baseStyleLabel,
}));

const sizes = {
  '3xs': definePartsStyle({
    control: { w: 4, h: 4 },
    label: { fontSize: 'sm', lineHeight: 6 },
    icon: { boxSize: 4 },
  }),
  '2xs': definePartsStyle({
    control: { w: 5, h: 5 },
    label: { fontSize: 'md', lineHeight: 7 },
    icon: { boxSize: 5 },
  }),
  xs: definePartsStyle({
    control: { w: 6, h: 6 },
    label: { fontSize: 'lg', lineHeight: 8 },
    icon: { boxSize: 6 },
  }),
};

export const CheckboxTheme = defineMultiStyleConfig({
  baseStyle,
  sizes,
  defaultProps: {
    size: '2xs',
    colorScheme: 'primary',
  },
});

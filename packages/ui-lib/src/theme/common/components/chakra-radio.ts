import Checkbox from './chakra-checkbox';

const parts = ['control', 'label'];

function baseStyleControl(props: Record<string, any>) {
  const { control } = Checkbox.baseStyle(props);

  return {
    ...control,
    borderRadius: 'full',
    _checked: {
      ...control._checked,
      bg: control._checked.color,
      color: control._checked.bg,

      _disabled: {
        ...control._checked._disabled,
        borderColor: control._checked._disabled.color,
      },

      _before: {
        content: `""`,
        display: 'inline-block',
        pos: 'relative',
        borderRadius: 'full',
        bg: 'currentColor',
      },
    },
  };
}

const baseStyle = function (props: Record<string, any>) {
  return {
    label: Checkbox.baseStyle(props).label,
    control: baseStyleControl(props),
  };
};

const sizes = {
  sm: {
    control: { w: 3, h: 3, _checked: { _before: { w: '6px', h: '6px' } } },
    label: { fontSize: 'sm' },
  },
  md: {
    control: { w: 4, h: 4, _checked: { _before: { w: '8px', h: '8px' } } },
    label: { fontSize: 'md' },
  },
  lg: {
    control: { w: 5, h: 5, _checked: { _before: { w: '12px', h: '12px' } } },
    label: { fontSize: 'lg' },
  },
};

const defaultProps = {
  size: 'md',
  colorScheme: 'primary',
};

export default {
  parts,
  baseStyle,
  sizes,
  defaultProps,
};

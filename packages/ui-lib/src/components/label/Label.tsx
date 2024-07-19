import { chakra, useStyleConfig } from '@chakra-ui/react';
import type { LabelProps } from './types';
import { omit } from '../utils';

const Label = (props: LabelProps) => {
  const {
    variant = 'solid',
    colorScheme = 'primary_01',
    LeftIcon,
    RightIcon,
    children,
    ...rest
  } = props;
  const themeStyles = useStyleConfig('Label', props);
  const omitThemingProps = omit(rest, [
    'size',
    'shape',
    'bg',
    'background',
    'bgColor',
    'backgroundColor',
    'borderColor',
    'textColor',
    'color',
  ]);

  return (
    <chakra.span
      data-ds-name={`${variant} label`}
      data-ds-colorset={`label_${variant}_${colorScheme}`}
      __css={themeStyles}
      {...omitThemingProps}
    >
      {LeftIcon && <LeftIcon />}
      {children}
      {RightIcon && <RightIcon />}
    </chakra.span>
  );
};

export default Label;

import { HTMLChakraProps, SystemProps, UseCheckboxProps, UseRadioProps } from '@chakra-ui/react';

export type CheckboxColorScheme = 'primary' | 'gray900';

type CheckboxRadius = 'rectangle' | 'round';

type CheckboxControlProps = Omit<HTMLChakraProps<'div'>, keyof UseCheckboxProps>;

type CheckboxThemeProps = {
  size?: '3xs' | '2xs' | 'xs';
  colorScheme?: CheckboxColorScheme;
  radius?: CheckboxRadius;
};

export interface CheckboxProps extends CheckboxControlProps, CheckboxThemeProps, UseCheckboxProps {
  spacing?: SystemProps['marginLeft'];
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
}

export type RadioColorScheme = 'primary' | 'gray900';

type RadioControlProps = Omit<HTMLChakraProps<'div'>, keyof UseRadioProps>;

type RadioThemeProps = {
  size?: '3xs' | '2xs' | 'xs';
  colorScheme?: RadioColorScheme;
};

export interface RadioProps extends RadioControlProps, RadioThemeProps, UseRadioProps {
  spacing?: SystemProps['marginLeft'];
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
}

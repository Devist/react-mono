import { chakra, useStyleConfig } from '@chakra-ui/react';
import type { ButtonProps } from '../types';
import { omit } from '../../utils';

const Button = (props: ButtonProps) => {
  const {
    variant = 'solid',
    colorScheme = 'primary_01',
    LeftIcon,
    RightIcon,
    iconSpacing,
    children,
    href,
    isDisabled,
    onClick,
    ...rest
  } = props;
  const themeStyles = useStyleConfig('DSButton', props);
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

  const isLink = !!href;
  const Container = isLink ? chakra.a : chakra.button;

  return (
    <Container
      onClick={onClick}
      {...(isLink
        ? { href, 'aria-disabled': isDisabled ? true : undefined }
        : {
            disabled: isDisabled,
          })}
      data-ds-name={`${variant} button`}
      data-ds-colorset={`btn_${variant}_${colorScheme}`}
      __css={themeStyles}
      {...omitThemingProps}
    >
      {LeftIcon && <LeftIcon marginRight={iconSpacing} />}
      {children}
      {RightIcon && <RightIcon marginLeft={iconSpacing} />}
    </Container>
  );
};

export default Button;

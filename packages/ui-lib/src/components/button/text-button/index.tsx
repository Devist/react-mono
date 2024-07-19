import { chakra, useStyleConfig } from '@chakra-ui/react';
import type { TextButtonProps } from '../types';
import { omit } from '../../utils';

const TextButton = (props: TextButtonProps) => {
  const {
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
  const themeStyles = useStyleConfig('TextButton', props);
  const omitThemingProps = omit(rest, [
    'size',
    'bg',
    'background',
    'bgColor',
    'backgroundColor',
    'borderColor',
    'textColor',
    'color',
    'hasUnderline',
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
      data-ds-name="text button"
      data-ds-colorset={`btn_text_${colorScheme}`}
      __css={themeStyles}
      {...omitThemingProps}
    >
      {LeftIcon && <LeftIcon marginRight={iconSpacing} />}
      {children}
      {RightIcon && <RightIcon marginLeft={iconSpacing} />}
    </Container>
  );
};

export default TextButton;

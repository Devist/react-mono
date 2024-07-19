import { chakra, useStyleConfig } from '@chakra-ui/react';
import type { IconButtonProps } from '../types';
import { omit } from '../../utils';

const IconButton = (props: IconButtonProps) => {
  const {
    variant = 'default',
    colorScheme = 'primary_01',
    Icon,
    iconProps,
    href,
    isDisabled,
    onClick,
    ...rest
  } = props;
  const themeStyles = useStyleConfig('IconButton', props);
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
      data-ds-name={`${variant !== 'default' ? `${variant} ` : ''}icon button`}
      data-ds-colorset={`btn_${variant !== 'default' ? variant : ''}icon_${colorScheme}`}
      __css={themeStyles}
      {...omitThemingProps}
    >
      {Icon && <Icon {...iconProps} />}
    </Container>
  );
};

export default IconButton;

import { chakra, useMultiStyleConfig, useRadio } from '@chakra-ui/react';
import type { RadioProps } from '../types';

const Radio = ({ size, colorScheme, ...ownProps }: RadioProps) => {
  const themeStyles = useMultiStyleConfig('DSRadio', { size, colorScheme });

  const { spacing = '0.5rem', children, inputProps, ...rest } = ownProps;

  const { getInputProps, getRadioProps, getLabelProps, getRootProps, htmlProps } = useRadio(rest);

  return (
    <chakra.label __css={themeStyles.container} {...getRootProps(htmlProps)}>
      <input {...getInputProps(inputProps)} />
      <chakra.span __css={themeStyles.control} {...getRadioProps()} />
      {children && (
        <chakra.span
          __css={{
            marginStart: spacing,
            ...themeStyles.label,
          }}
          {...getLabelProps()}
        >
          {children}
        </chakra.span>
      )}
    </chakra.label>
  );
};

export default Radio;

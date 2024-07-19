import { chakra, useCheckbox, useMultiStyleConfig } from '@chakra-ui/react';
import { cloneElement } from 'react';
import type { CheckboxProps } from '../types';
import { createIcon } from '../../../icons/utils/createIcon';

export const Checkbox = ({ size, colorScheme, radius = 'round', ...ownProps }: CheckboxProps) => {
  const themeStyles = useMultiStyleConfig('DSCheckbox', { size, colorScheme, radius });

  const { spacing = '0.5rem', children, inputProps, ...rest } = ownProps;

  const { state, getInputProps, getCheckboxProps, getLabelProps, getRootProps } = useCheckbox(rest);

  const icon = state.isIndeterminate ? <IndeterminateIcon /> : <CheckIcon />;

  const clonedIcon = cloneElement(icon, themeStyles.icon);

  return (
    <chakra.label __css={themeStyles.container} {...getRootProps()}>
      <input {...getInputProps(inputProps)} />
      <chakra.span __css={themeStyles.control} {...getCheckboxProps()}>
        {state.isChecked || state.isIndeterminate ? clonedIcon : null}
      </chakra.span>
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

export default Checkbox;

const CheckIcon = createIcon({
  displayName: 'CheckIcon',
  path: (
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.811 7L10.399 14.412L6.767 10.781L5 12.549L10.399 17.948L19.579 8.768L17.811 7Z"
      fill="currentColor"
    />
  ),
});

const IndeterminateIcon = createIcon({
  displayName: 'IndeterminateIcon',
  path: <rect x="5" y="11" width="14.58" height="2.5" fill="currentColor" />,
});

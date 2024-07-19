import { createIcon as chakraCreateIcon } from '@chakra-ui/icons';

export function createIcon(
  iconOptions: Parameters<typeof chakraCreateIcon>[0],
): ReturnType<typeof chakraCreateIcon> {
  const { displayName } = iconOptions;

  return chakraCreateIcon({
    viewBox: '0 0 24 24',
    ...iconOptions,
    defaultProps: {
      color: 'current',
      boxSize: 6,
      name: displayName,
      ...iconOptions.defaultProps,
    },
  });
}

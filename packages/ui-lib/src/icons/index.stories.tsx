import { Box, Center, Grid, getToken } from '@chakra-ui/react';
import * as Icons from '.';
import { StoryFn } from '@storybook/react';

export default {
  title: 'A. 디자인시스템/3. 아이콘',
  parameters: {
    layout: 'padded',
    viewport: {
      defaultViewport: 'responsive',
    },

    docs: {
      description: {
        component: `
- [피그마 UI KIT (SSG) 아이콘 디자인 바로가기](https://www.figma.com/file/gjmXdgPXR6dXCgAGDGdLsG/%5BDS%5D-SSG-UI-KIT?node-id=37%3A1286&mode=dev)
- [피그마 UI KIT (EMART) 아이콘 디자인 바로가기](https://www.figma.com/file/yatMtyLaQcSjuqj7wteMTa/%5BDS%5D-EMART-UI-KIT?node-id=37%3A1286&mode=dev)
`,
      },
    },
  },
};

/**
 * utils
 ************************************************************************************/
// 스토리
export const IconStory: StoryFn<any> = ({
  color,
  boxSize,
}: {
  color: string | number;
  boxSize: string | number;
}) => {
  const colorToken = getToken('colors', [color]) || 'inherit';

  return (
    <Grid templateColumns="repeat(4, 1fr)" gap={2}>
      {Object.keys(Icons).map((icon) => (
        <Box key={icon}>
          <Center h="60px">
            {Icons[icon].render({
              color: colorToken,
              boxSize,
            })}
          </Center>
          <Box p={1} color="black_alpha60" fontSize="xs" bg="black_alpha3" textAlign="center">
            {`<${icon} boxSize={${boxSize}} ${
              color !== 'current' ? 'color="' + color + '"' : ''
            } />`}
          </Box>
        </Box>
      ))}
    </Grid>
  );
};

IconStory.storyName = '아이콘';
IconStory.args = {
  boxSize: 8,
  color: 'current',
};
IconStory.argTypes = {
  boxSize: {
    description: '크기',
    control: {
      type: 'select',
    },
    options: [3, 4, 5, 6, 7, 8, 9, 10],
  },
  color: {
    description: '테마 컬러 토큰',
    control: {
      type: 'text',
    },
    table: { defaultValue: { summary: 'inherit' } },
  },
};

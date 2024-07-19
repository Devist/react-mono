import type { Meta, StoryFn } from '@storybook/react';
import { Box, HStack, Text, VStack } from '@chakra-ui/react';

import IconButton from '.';
import type {
  IconButtonDefaultColorScheme,
  IconButtonOutlineColorScheme,
  IconButtonSolidColorScheme,
} from '../types';
import { AirplaneIcon } from '../../../icons';

const colorSchemesSolid: IconButtonSolidColorScheme[] = [
  'white_01',
  'white_opacity_01',
  'black_opacity_01',
  'black_opacity_02',
  'black_opacity_03',
];
const colorSchemesOutline: IconButtonOutlineColorScheme[] = [
  'primary_01',
  'gray_01',
  'gray_02',
  'white_01',
];
const colorSchemesDefault: IconButtonDefaultColorScheme[] = [
  'primary_01',
  'gray_01',
  'gray_02',
  'white_01',
];

export default {
  title: 'A. 디자인시스템/2. 컴포넌트/버튼/IconButton',
  parameters: {
    layout: 'padded',
    viewport: {
      defaultViewport: 'responsive',
    },
    design: {
      type: 'figma',
      url:
        process.env.STORYBOOK_THEME === 'emart'
          ? 'https://www.figma.com/file/yatMtyLaQcSjuqj7wteMTa/%5BDS%5D-EMART-UI-KIT?node-id=13542%3A1865&mode=dev'
          : 'https://www.figma.com/file/gjmXdgPXR6dXCgAGDGdLsG/%5BDS%5D-SSG-UI-KIT?node-id=26532%3A53748&mode=dev',
    },
    docs: {
      canvas: {
        sourceState: 'shown',
      },
      description: {
        component: `
- 텍스트 없이 아이콘으로만 표기하는 버튼입니다.
- 🚨🚨🚨 solid, outline, default 는 "variant" prop 으로 지정하며 각 variant 마다 쓸 수 있는 colorScheme 이 다릅니다. (스토리북 기능 한계로 variant 에 따라 colorScheme을 분기하지 못하니 실제 쓸 수 있는 variant와 colorScheme 조합은 [컬러세트(토큰명)](https://projectwiki.ssgadm.com/pages/viewpage.action?pageId=177942097)을 확인하세요)
- 기본 button 엘리먼트로 렌더링되며, "href" prop 을 넘겨주면 a 엘리먼트로 렌더링됩니다.
- colorScheme의 토큰명은 SSG/EMART 공통으로 사용하며 SSG/EMART 테마에 따라 값이 매핑됩니다. 정의되지 않은 테마키는 배경/보더 transparent, 컬러 inherit으로 렌더링됩니다.
- 디자인팀 요청으로, 임의로 bgColor, borderColor, color(text) 를 변경할 수 없습니다.
`,
      },
    },
  },
  argTypes: {
    size: {
      description: '사이즈',
      control: { type: 'select' },
      options: ['2xs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl'],
      table: { defaultValue: { summary: 'md' } },
    },
    variant: {
      description: '변형',
      control: { type: 'select' },
      options: ['solid', 'outline', 'default'],
      table: { defaultValue: { summary: 'default' } },
    },
    colorScheme: {
      description: '컬러스킴',
      control: { type: 'select' },
      options: [...colorSchemesSolid, ...colorSchemesOutline, ...colorSchemesDefault],
      table: { defaultValue: { summary: 'primary_01' } },
    },
    shape: {
      description: '모서리 형태',
      control: { type: 'select' },
      options: ['rectangle', 'round', 'oval'],
      table: { defaultValue: { summary: 'rectangle' } },
    },
    Icon: {
      type: {
        name: 'function',
        required: true,
      },
      description: '아이콘',
      control: { type: 'select' },
      options: AirplaneIcon,
    },
    'aria-label': {
      type: {
        name: 'string',
        required: true,
      },
      description: '버튼 대체텍스트',
      control: { type: 'text' },
    },
    isDisabled: {
      description: '비활성화 여부',
      control: { type: 'boolean' },
    },
    href: {
      description: 'a 태그로 변경시 url 전달',
      control: { type: 'text' },
    },
  },
} as Meta<typeof IconButton>;

const defaultArgs: React.ComponentProps<typeof IconButton> = {
  size: 'md',
  variant: 'default',
  colorScheme: 'primary_01',
  Icon: AirplaneIcon,
  'aria-label': '버튼기능입력(대체텍스트)',
};

const Template: StoryFn<typeof IconButton> = (props) => <IconButton {...props} />;

export const IconButton01Story = Template.bind({});
IconButton01Story.storyName = '버튼 기본';
IconButton01Story.args = {
  ...defaultArgs,
};

export const IconButton02Story: StoryFn<typeof IconButton> = (props) => (
  <HStack spacing={20} align="flex-start">
    <VStack spacing={10}>
      {colorSchemesSolid.map((colorScheme) => (
        <Box key={colorScheme} w="full">
          <Text py={2} fontSize="xl" fontWeight="semibold">
            {`variant: "solid", colorScheme: "${colorScheme}"`}
          </Text>
          <IconButton {...props} variant="solid" colorScheme={colorScheme} />
        </Box>
      ))}
    </VStack>
    <VStack spacing={10}>
      {colorSchemesOutline.map((colorScheme) => (
        <Box key={colorScheme} w="full">
          <Text py={2} fontSize="xl" fontWeight="semibold">
            {`variant: "outline", colorScheme: "${colorScheme}"`}
          </Text>
          <IconButton {...props} variant="outline" colorScheme={colorScheme} />
        </Box>
      ))}
    </VStack>
    <VStack spacing={10}>
      {colorSchemesDefault.map((colorScheme) => (
        <Box key={colorScheme} w="full">
          <Text py={2} fontSize="xl" fontWeight="semibold">
            {`variant: "default", colorScheme: "${colorScheme}"`}
          </Text>
          <IconButton {...props} variant="default" colorScheme={colorScheme} />
        </Box>
      ))}
    </VStack>
  </HStack>
);
IconButton02Story.storyName = 'variant & colorScheme';
IconButton02Story.args = {
  ...defaultArgs,
};
IconButton02Story.parameters = {
  backgrounds: {
    default: 'temp',
    values: [
      {
        name: 'temp',
        value: '#d4d4d4',
      },
    ],
  },
};

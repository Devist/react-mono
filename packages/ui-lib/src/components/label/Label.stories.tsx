import type { Meta, StoryFn } from '@storybook/react';
import { Box, HStack, Text, VStack, chakra } from '@chakra-ui/react';

import Label from './Label';
import type { LabelOutlineColorScheme, LabelProps, LabelSolidColorScheme } from './types';
import { AirplaneIcon } from '../../icons';

const colorSchemesSolid: LabelSolidColorScheme[] = [
  'primary_01',
  'primary_02',
  'primary_03',
  'gray_01',
  'gray_02',
  'gray_03',
  'gray_04',
  'white_01',
  'black_opacity_01',
  'white_opacity_01',
  'biz_01',
  'farmersmarket_01',
  'freshgreen_01',
];
const colorSchemesOutline: LabelOutlineColorScheme[] = [
  'primary_01',
  'gray_01',
  'gray_02',
  'gray_03',
  'white_01',
];

export default {
  title: 'A. 디자인시스템/2. 컴포넌트/레이블(라벨)/Label',
  parameters: {
    layout: 'padded',
    viewport: {
      defaultViewport: 'responsive',
    },
    design: {
      type: 'figma',
      url:
        process.env.STORYBOOK_THEME === 'emart'
          ? 'https://www.figma.com/file/yatMtyLaQcSjuqj7wteMTa/%5BDS%5D-EMART-UI-KIT?node-id=13542%3A843&mode=dev'
          : 'https://www.figma.com/file/gjmXdgPXR6dXCgAGDGdLsG/%5BDS%5D-SSG-UI-KIT?node-id=26571%3A6594&mode=dev',
    },
    docs: {
      canvas: {
        sourceState: 'shown',
      },
      description: {
        component: `
- 🚨🚨🚨 solid, outline 은 "variant" prop 으로 지정하며 각 variant 마다 쓸 수 있는 colorScheme 이 다릅니다. (스토리북 기능 한계로 variant 에 따라 colorScheme을 분기하지 못하니 실제 쓸 수 있는 variant와 colorScheme 조합은 [컬러세트(토큰명)](https://projectwiki.ssgadm.com/pages/viewpage.action?pageId=176697353)을 확인하세요)
- colorScheme의 토큰명은 SSG/EMART 공통으로 사용하며 SSG/EMART 테마에 따라 값이 매핑됩니다. 정의되지 않은 테마키는 배경/보더 transparent, 컬러 inherit으로 렌더링됩니다.
- 디자인팀 요청으로, 임의로 bgColor, borderColor, color(text) 를 변경할 수 없습니다.
- 좌/우 여백 최소값은 6px이며 영역마다 변경해서 사용 가능합니다.
`,
      },
    },
  },
  argTypes: {
    children: {
      description: '텍스트 입력',
      type: {
        name: 'string',
        required: true,
      },
      control: { type: 'text' },
    },
    size: {
      description: '사이즈',
      control: { type: 'select' },
      options: ['3xs', '2xs', 'xs'],
      table: { defaultValue: { summary: 'xs' } },
    },
    variant: {
      description: '변형',
      control: { type: 'select' },
      options: ['solid', 'outline', 'custom'],
      table: { defaultValue: { summary: 'solid' } },
    },
    colorScheme: {
      description: '컬러스킴',
      control: { type: 'select' },
      options: [...colorSchemesSolid, ...colorSchemesOutline],
      table: { defaultValue: { summary: 'primary_01' } },
    },
    shape: {
      description: '모서리 형태',
      control: { type: 'select' },
      options: ['rectangle', 'round', 'oval'],
      table: { defaultValue: { summary: 'rectangle' } },
    },
    fontWeight: {
      description: '텍스트굵기',
      control: { type: 'select' },
      options: ['normal', 'medium', 'bold'],
      table: { defaultValue: { summary: 'medium' } },
    },
    LeftIcon: {
      description: '아이콘 : 왼쪽',
      control: { type: 'select' },
      options: AirplaneIcon,
    },
    RightIcon: {
      description: '아이콘 : 오른쪽',
      control: { type: 'select' },
      options: AirplaneIcon,
    },
    href: {
      description: 'a 태그로 변경시 url 전달',
      control: { type: 'text' },
    },
  },
} as Meta<typeof Label>;

const defaultArgs: React.ComponentProps<typeof Label> = {
  children: '레이블명을 변경해보세요',
  size: 'xs',
  variant: 'solid',
  colorScheme: 'primary_01',
};

const Template: StoryFn<typeof Label> = (props) => <Label {...props} />;

export const Label01Story = Template.bind({});
Label01Story.storyName = '레이블 기본';
Label01Story.args = {
  ...defaultArgs,
};

export const Label02Story: StoryFn<typeof Label> = (props) => (
  <HStack spacing={20} align="flex-start">
    <VStack spacing={10}>
      {colorSchemesSolid.map((colorScheme) => (
        <Box key={colorScheme} w="full">
          <Text py={2} fontSize="xl" fontWeight="semibold">
            {`variant: "solid", colorScheme: "${colorScheme}"`}
          </Text>
          <Label {...props} variant="solid" colorScheme={colorScheme} />
        </Box>
      ))}
    </VStack>
    <VStack spacing={10}>
      {colorSchemesOutline.map((colorScheme) => (
        <Box key={colorScheme} w="full">
          <Text py={2} fontSize="xl" fontWeight="semibold">
            {`variant: "outline", colorScheme: "${colorScheme}"`}
          </Text>
          <Label {...props} variant="outline" colorScheme={colorScheme} />
        </Box>
      ))}
    </VStack>
  </HStack>
);
Label02Story.storyName = 'variant & colorScheme';
Label02Story.args = {
  ...defaultArgs,
};
Label02Story.parameters = {
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

export const Label03Story = Template.bind({});
Label03Story.storyName = '왼쪽 아이콘';
Label03Story.args = {
  ...defaultArgs,
  LeftIcon: AirplaneIcon,
};

export const Label04Story = Template.bind({});
Label04Story.storyName = '오른쪽 아이콘';
Label04Story.args = {
  ...defaultArgs,
  RightIcon: AirplaneIcon,
};

export const Label05Story: StoryFn<typeof Label> = ({ children, ...rest }: LabelProps) => (
  <Label {...rest}>
    <chakra.span noOfLines={1}>{children}</chakra.span>
  </Label>
);
Label05Story.storyName = '말줄임 적용시';
Label05Story.args = {
  ...defaultArgs,
  children:
    '레이블명을 변경해보세요 레이블명을 변경해보세요 레이블명을 변경해보세요 레이블명을 변경해보세요 레이블명을 변경해보세요 레이블명을 변경해보세요 레이블명을 변경해보세요 레이블명을 변경해보세요 레이블명을 변경해보세요 레이블명을 변경해보세요 레이블명을 변경해보세요 레이블명을 변경해보세요 레이블명을 변경해보세요 레이블명을 변경해보세요',
};

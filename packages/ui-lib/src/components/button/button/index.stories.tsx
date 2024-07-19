import type { Meta, StoryFn } from '@storybook/react';
import { Box, HStack, Text, VStack, chakra } from '@chakra-ui/react';

import Button from '.';
import type { ButtonOutlineColorScheme, ButtonProps, ButtonSolidColorScheme } from '../types';
import { AirplaneIcon } from '../../../icons';

const colorSchemesSolid: ButtonSolidColorScheme[] = [
  'primary_01',
  'primary_02',
  'gray_01',
  'gray_02',
  'gray_03',
  'gray_04',
  'gray_05',
  'gray_06',
  'white_01',
  'ssg_food_01',
  'universe_01',
  'universe_02',
  'universe_03',
];
const colorSchemesOutline: ButtonOutlineColorScheme[] = [
  'primary_01',
  'primary_02',
  'gray_01',
  'gray_02',
  'gray_03',
  'gray_04',
  'white_01',
];

export default {
  title: 'A. 디자인시스템/2. 컴포넌트/버튼/Button',
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
- 🚨🚨🚨 solid, outline 은 "variant" prop 으로 지정하며 각 variant 마다 쓸 수 있는 colorScheme 이 다릅니다. (스토리북 기능 한계로 variant 에 따라 colorScheme을 분기하지 못하니 실제 쓸 수 있는 variant와 colorScheme 조합은 [컬러세트(토큰명)](https://projectwiki.ssgadm.com/pages/viewpage.action?pageId=177942097)을 확인하세요)
- 기본 button 엘리먼트로 렌더링되며, "href" prop 을 넘겨주면 a 엘리먼트로 렌더링됩니다.
- colorScheme의 토큰명은 SSG/EMART 공통으로 사용하며 SSG/EMART 테마에 따라 값이 매핑됩니다. 정의되지 않은 테마키는 배경/보더 transparent, 컬러 inherit으로 렌더링됩니다.
- 디자인팀 요청으로, 임의로 bgColor, borderColor, color(text) 를 변경할 수 없습니다.
- 좌/우 여백 최소값은 12px이며 영역마다 변경해서 사용 가능합니다.
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
      options: ['2xs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl'],
      table: { defaultValue: { summary: 'md' } },
    },
    variant: {
      description: '변형',
      control: { type: 'select' },
      options: ['solid', 'outline'],
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
      options: ['medium', 'bold'],
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
    iconSpacing: {
      description: '아이콘/텍스트 사이 간격',
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
} as Meta<typeof Button>;

const defaultArgs: React.ComponentProps<typeof Button> = {
  children: '버튼명을 변경해보세요',
  size: 'md',
  variant: 'solid',
  colorScheme: 'primary_01',
};

const Template: StoryFn<typeof Button> = (props) => <Button {...props} />;

export const Button01Story = Template.bind({});
Button01Story.storyName = '버튼 기본';
Button01Story.args = {
  ...defaultArgs,
};

export const Button02Story: StoryFn<typeof Button> = (props) => (
  <HStack spacing={20} align="flex-start">
    <VStack spacing={10}>
      {colorSchemesSolid.map((colorScheme) => (
        <Box key={colorScheme} w="full">
          <Text py={2} fontSize="xl" fontWeight="semibold">
            {`variant: "solid", colorScheme: "${colorScheme}"`}
          </Text>
          <Button {...props} variant="solid" colorScheme={colorScheme} />
        </Box>
      ))}
    </VStack>
    <VStack spacing={10}>
      {colorSchemesOutline.map((colorScheme) => (
        <Box key={colorScheme} w="full">
          <Text py={2} fontSize="xl" fontWeight="semibold">
            {`variant: "outline", colorScheme: "${colorScheme}"`}
          </Text>
          <Button {...props} variant="outline" colorScheme={colorScheme} />
        </Box>
      ))}
    </VStack>
  </HStack>
);
Button02Story.storyName = 'variant & colorScheme';
Button02Story.args = {
  ...defaultArgs,
};
Button02Story.parameters = {
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

export const Button03Story = Template.bind({});
Button03Story.storyName = '왼쪽 아이콘';
Button03Story.args = {
  ...defaultArgs,
  LeftIcon: AirplaneIcon,
};

export const Button04Story = Template.bind({});
Button04Story.storyName = '오른쪽 아이콘';
Button04Story.args = {
  ...defaultArgs,
  RightIcon: AirplaneIcon,
};

export const Button05Story: StoryFn<typeof Button> = ({ children, ...rest }: ButtonProps) => (
  <Button {...rest}>
    <chakra.span noOfLines={1}>{children}</chakra.span>
  </Button>
);
Button05Story.storyName = '말줄임 적용시';
Button05Story.args = {
  ...defaultArgs,
  children:
    '버튼명을 변경해보세요 버튼명을 변경해보세요 버튼명을 변경해보세요 버튼명을 변경해보세요 버튼명을 변경해보세요 버튼명을 변경해보세요 버튼명을 변경해보세요 버튼명을 변경해보세요 버튼명을 변경해보세요 버튼명을 변경해보세요 버튼명을 변경해보세요 버튼명을 변경해보세요 버튼명을 변경해보세요 버튼명을 변경해보세요',
};

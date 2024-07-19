import type { Meta, StoryFn } from '@storybook/react';
import { Box, Text, VStack, chakra } from '@chakra-ui/react';

import TextButton from '.';
import type { TextButtonColorScheme, TextButtonProps } from '../types';
import { AirplaneIcon } from '../../../icons';

const colorSchemes: TextButtonColorScheme[] = [
  'primary_01',
  'gray_01',
  'gray_02',
  'gray_03',
  'white_01',
  'black_opacity_01',
];

export default {
  title: 'A. 디자인시스템/2. 컴포넌트/버튼/TextButton',
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
- 기본 button 엘리먼트로 렌더링되며, "href" prop 을 넘겨주면 a 엘리먼트로 렌더링됩니다.
- colorScheme의 토큰명은 SSG/EMART 공통으로 사용하며 SSG/EMART 테마에 따라 값이 매핑됩니다. 정의되지 않은 테마키는 컬러 inherit으로 렌더링됩니다.
- 언더라인은 hasUnderline prop 으로 노출 유무를 선택할 수 있지만, 아이콘이 없을 땐 언더라인을 무조건 노출합니다.
- 디자인팀 요청으로, 임의로 color(text) 를 변경할 수 없습니다.
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
      options: ['2xs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl'],
      table: { defaultValue: { summary: 'md' } },
    },
    colorScheme: {
      description: '컬러스킴',
      control: { type: 'select' },
      options: colorSchemes,
      table: { defaultValue: { summary: 'primary_01' } },
    },
    hasUnderline: {
      description: '언더라인',
      control: { type: 'boolean' },
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
} as Meta<typeof TextButton>;

const defaultArgs: React.ComponentProps<typeof TextButton> = {
  children: '버튼명을 변경해보세요',
  size: 'md',
  colorScheme: 'primary_01',
};

const Template: StoryFn<typeof TextButton> = (props) => <TextButton {...props} />;

export const TextButton01Story = Template.bind({});
TextButton01Story.storyName = '버튼 기본';
TextButton01Story.args = {
  ...defaultArgs,
};

export const TextButton02Story: StoryFn<typeof TextButton> = (props) => (
  <VStack spacing={10}>
    {colorSchemes.map((colorScheme) => (
      <Box key={colorScheme} w="full">
        <Text py={2} fontSize="xl" fontWeight="semibold">
          {colorScheme}
        </Text>
        <TextButton {...props} colorScheme={colorScheme} />
      </Box>
    ))}
  </VStack>
);
TextButton02Story.storyName = 'colorScheme';
TextButton02Story.args = {
  ...defaultArgs,
};
TextButton02Story.parameters = {
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

export const TextButton03Story = Template.bind({});
TextButton03Story.storyName = '왼쪽 아이콘';
TextButton03Story.args = {
  ...defaultArgs,
  LeftIcon: AirplaneIcon,
};

export const TextButton04Story = Template.bind({});
TextButton04Story.storyName = '오른쪽 아이콘';
TextButton04Story.args = {
  ...defaultArgs,
  RightIcon: AirplaneIcon,
};

export const TextButton05Story: StoryFn<typeof TextButton> = ({
  children,
  ...rest
}: TextButtonProps) => (
  <TextButton {...rest}>
    <chakra.span noOfLines={1}>{children}</chakra.span>
  </TextButton>
);
TextButton05Story.storyName = '말줄임 적용시';
TextButton05Story.args = {
  ...defaultArgs,
  children:
    '버튼명을 변경해보세요 버튼명을 변경해보세요 버튼명을 변경해보세요 버튼명을 변경해보세요 버튼명을 변경해보세요 버튼명을 변경해보세요 버튼명을 변경해보세요 버튼명을 변경해보세요 버튼명을 변경해보세요 버튼명을 변경해보세요 버튼명을 변경해보세요 버튼명을 변경해보세요 버튼명을 변경해보세요 버튼명을 변경해보세요',
};

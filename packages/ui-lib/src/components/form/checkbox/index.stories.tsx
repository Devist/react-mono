import type { Meta, StoryFn } from '@storybook/react';
import { Box, Text, VStack, HStack, useCheckboxGroup } from '@chakra-ui/react';

import Checkbox from '.';
import type { CheckboxColorScheme } from '../types';

const colorSchemes: CheckboxColorScheme[] = ['primary', 'gray900'];

export default {
  title: 'A. 디자인시스템/2. 컴포넌트/폼요소/Checkbox',
  parameters: {
    layout: 'padded',
    viewport: {
      defaultViewport: 'responsive',
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/gjmXdgPXR6dXCgAGDGdLsG/%5BDS%5D-SSG-UI-KIT?type=design&node-id=1933-69544&mode=dev',
    },
    docs: {
      canvas: {
        sourceState: 'shown',
      },
      // description: {
      //   component: '',
      // },
    },
  },
  argTypes: {
    children: {
      description: '텍스트 입력',
      control: { type: 'text' },
    },
    size: {
      description: '사이즈',
      control: { type: 'select' },
      options: ['3xs', '2xs', 'xs'],
      table: { defaultValue: { summary: '2xs' } },
    },
    colorScheme: {
      description: '컬러스킴',
      control: { type: 'select' },
      options: colorSchemes,
      table: { defaultValue: { summary: 'primary' } },
    },
    radius: {
      description: '모서리 형태',
      control: { type: 'select' },
      options: ['round', 'rectangle'],
      table: { defaultValue: { summary: 'round' } },
    },
  },
} as Meta<typeof Checkbox>;

const defaultArgs: React.ComponentProps<typeof Checkbox> = {
  children: '체크박스',
  size: '2xs',
  colorScheme: 'primary',
  radius: 'round',
};

const Template: StoryFn<typeof Checkbox> = (props) => <Checkbox {...props} />;

export const Checkbox01Story = Template.bind({});
Checkbox01Story.storyName = '체크박스 기본';
Checkbox01Story.args = {
  ...defaultArgs,
};

export const Checkbox02Story: StoryFn<typeof Checkbox> = (props) => (
  <VStack spacing={10}>
    {colorSchemes.map((colorScheme) => (
      <Box key={colorScheme} w="full">
        <Text py={2} fontSize="xl" fontWeight="semibold">
          {colorScheme}
        </Text>
        <Checkbox {...props} colorScheme={colorScheme} isChecked />
      </Box>
    ))}
  </VStack>
);
Checkbox02Story.storyName = 'colorScheme';
Checkbox02Story.args = {
  ...defaultArgs,
};
Checkbox02Story.parameters = {
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

export const Checkbox03Story: StoryFn<typeof Checkbox> = (props) => (
  <HStack>
    <Checkbox {...props} isDisabled>
      체크박스
    </Checkbox>
    <Checkbox {...props} isDisabled defaultChecked>
      체크박스
    </Checkbox>
  </HStack>
);
Checkbox03Story.storyName = 'isDisabled';
Checkbox03Story.args = {
  ...defaultArgs,
};

export const Checkbox04Story: StoryFn<typeof Checkbox> = () => {
  const { value, getCheckboxProps } = useCheckboxGroup({
    defaultValue: ['1', '3'],
  });
  return (
    <>
      <Text py={2} fontSize="xl" fontWeight="semibold">
        선택된 체크박스 : {value.sort().join(',  ')}
      </Text>
      <HStack spacing={5}>
        <Checkbox {...getCheckboxProps({ value: '1' })}>체크박스1</Checkbox>
        <Checkbox {...getCheckboxProps({ value: '2' })}>체크박스2</Checkbox>
        <Checkbox {...getCheckboxProps({ value: '3' })}>체크박스3</Checkbox>
      </HStack>
    </>
  );
};
Checkbox04Story.storyName = 'useCheckboxGroup';
Checkbox04Story.args = {
  ...defaultArgs,
};

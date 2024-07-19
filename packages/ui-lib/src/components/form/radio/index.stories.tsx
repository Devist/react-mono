import type { Meta, StoryFn } from '@storybook/react';
import { Box, HStack, Text, VStack, useRadioGroup } from '@chakra-ui/react';

import Radio from '.';
import type { RadioColorScheme, RadioProps } from '../types';

const colorSchemes: RadioColorScheme[] = ['primary', 'gray900'];

export default {
  title: 'A. 디자인시스템/2. 컴포넌트/폼요소/Radio',
  parameters: {
    layout: 'padded',
    viewport: {
      defaultViewport: 'responsive',
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/gjmXdgPXR6dXCgAGDGdLsG/%5BDS%5D-SSG-UI-KIT?type=design&node-id=1933-69679&mode=dev',
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
  },
} as Meta<typeof Radio>;

const defaultArgs: React.ComponentProps<typeof Radio> = {
  children: '라디오버튼',
  size: '2xs',
  colorScheme: 'primary',
};

const Template: StoryFn<typeof Radio> = (props) => <Radio {...props} />;

export const Radio01Story = Template.bind({});
Radio01Story.storyName = '라디오버튼 기본';
Radio01Story.args = {
  ...defaultArgs,
};

export const Radio02Story: StoryFn<typeof Radio> = (props) => (
  <VStack spacing={10}>
    {colorSchemes.map((colorScheme) => (
      <Box key={colorScheme} w="full">
        <Text py={2} fontSize="xl" fontWeight="semibold">
          {colorScheme}
        </Text>
        <Radio {...props} colorScheme={colorScheme} isChecked />
      </Box>
    ))}
  </VStack>
);
Radio02Story.storyName = 'colorScheme';
Radio02Story.args = {
  ...defaultArgs,
};
Radio02Story.parameters = {
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

export const Radio03Story: StoryFn<typeof Radio> = (props: RadioProps) => (
  <HStack>
    <Radio {...props} isDisabled />
    <Radio {...props} isDisabled defaultChecked />
  </HStack>
);
Radio03Story.storyName = 'isDisabled';
Radio03Story.args = {
  ...defaultArgs,
};

export const Radio04Story: StoryFn<typeof Radio> = ({ children, ...rest }: RadioProps) => {
  const { value, getRootProps, getRadioProps } = useRadioGroup({
    name: 'radio-group',
    defaultValue: '1',
  });
  return (
    <>
      <Text py={2} fontSize="xl" fontWeight="semibold">
        선택된 라디오버튼 : {value}
      </Text>
      <HStack spacing={5} {...getRootProps}>
        <Radio {...rest} {...getRadioProps({ value: '1' })}>
          {children}1
        </Radio>
        <Radio {...rest} {...getRadioProps({ value: '2' })}>
          {children}2
        </Radio>
        <Radio {...rest} {...getRadioProps({ value: '3' })}>
          {children}3
        </Radio>
      </HStack>
    </>
  );
};
Radio04Story.storyName = 'useRadioGroup';
Radio04Story.args = {
  ...defaultArgs,
};

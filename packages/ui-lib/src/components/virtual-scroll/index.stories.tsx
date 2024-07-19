import { Meta, StoryObj } from '@storybook/react';

import { Box } from '@chakra-ui/react';

import { VirtualScroll } from '.';

export default {
  title: 'A. 전몰 공통 컴포넌트 / Virtual Scroll',
  component: VirtualScroll,
  parameters: {
    docs: { disable: true },
  },
} as Meta;

function getItems(count: number) {
  const arr: number[] = [];

  for (let i = 1; i < count; i++) {
    arr.push(i);
  }
  return arr;
}

const Item = ({ num }: any) => {
  const heights = [20, 40, 80, 77, 32, 200];
  return (
    <div
      style={{
        height: heights[num % heights.length],
        borderBottom: 'solid 1px #ccc',
        background: '#fff',
      }}
    >
      <div>{`Item ${num}`}</div>
    </div>
  );
};

const ImageItem = ({ num }: any) => {
  const heights = [300, 450, 550, 650, 700, 800];
  return (
    <div
      style={{
        borderBottom: 'solid 1px #ccc',
        background: '#fff',
        padding: 20,
      }}
    >
      <div>{`Image ${num}`}</div>
      <div style={{ width: '100%' }}>
        <img
          src={`https://dummyimage.com/500x${heights[num % heights.length]}/ddd/000`}
          style={{ width: '100%' }}
        />
      </div>
    </div>
  );
};

const ColumnItem = ({ num }: any) => {
  return (
    <div
      style={{
        width: num % 3 === 0 ? 100 : 60,
        height: '200px',
        borderRight: 'solid 1px #ccc',
        background: '#fff',
      }}
    >
      <span>{`Column ${num}`}</span>
    </div>
  );
};

const GridItem = ({ num }: any) => {
  const colors = [
    '#ef5777',
    '#575fcf',
    '#4bcffa',
    '#34e7e4',
    '#0be881',
    '#f53b57',
    '#3c40c6',
    '#0fbcf9',
    '#00d8d6',
    '#05c46b',
    '#ffc048',
    '#ffdd59',
    '#ff5e57',
    '#d2dae2',
    '#485460',
    '#ffa801',
    '#ffd32a',
    '#ff3f34',
  ];
  const changeColors = colors[Math.floor(Math.random() * colors.length)];
  const changeColors2 = colors[Math.floor(Math.random() * colors.length)];
  const heights = [100, 150, 200, 250, 300];
  return (
    <div
      style={{
        height: heights[num % heights.length],
        background: `linear-gradient(to top right, ${changeColors}, ${changeColors2})`,
      }}
    >
      <div>{`Item ${num}`}</div>
    </div>
  );
};

export const Default: StoryObj = {
  render: () => {
    const items = getItems(1000);
    return (
      <VirtualScroll
        totalCount={items.length}
        renderItem={(index: number) => {
          const item = items[index];

          if (item) {
            return <Item key={index} num={item} />;
          }
        }}
      />
    );
  },
};

export const Horizontal: StoryObj = {
  render: () => {
    const items = getItems(1000);
    return (
      <VirtualScroll
        height="200px"
        horizontal
        totalCount={items.length}
        renderItem={(index, isFirst) => {
          const item = items[index];

          if (item) {
            return (
              <Box marginLeft="8px" {...(isFirst && { marginLeft: '0' })}>
                <ColumnItem key={index} num={item} />
              </Box>
            );
          }
        }}
      />
    );
  },
};

export const DynamicImage: StoryObj = {
  render: () => {
    const items = getItems(1000);
    return (
      <VirtualScroll
        totalCount={items.length}
        renderItem={(index: number) => {
          const item = items[index];

          if (item) {
            return <ImageItem key={index} num={item} />;
          }
        }}
      />
    );
  },
};

export const GridColumn: StoryObj = {
  render: () => {
    const items = getItems(1000);
    return (
      <VirtualScroll
        gridColumn="span 2"
        columns={2}
        totalCount={items.length}
        renderItem={(index) => {
          const item = items[index];

          if (item) {
            return <GridItem key={index} num={item} />;
          }
        }}
      />
    );
  },
};

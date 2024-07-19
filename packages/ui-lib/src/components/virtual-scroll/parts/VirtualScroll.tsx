import { ReactNode, forwardRef, ForwardedRef, Fragment } from 'react';
import { Box, BoxProps } from '@chakra-ui/react';
import { WindowVirtualizer, WindowVirtualizerHandle, Virtualizer, VirtualizerHandle } from 'virtua';
import VirtualList from './VirtualList';
import VirtualListItem from './VirtualListItem';

interface IVirtualScrollProps extends BoxProps {
  totalCount: number;
  columns?: number;
  gap?: string;
  isWindow?: boolean;
  horizontal?: boolean;
  renderItem: (index: number, isFirst: boolean) => ReactNode;
  onScrollEnd?: () => void;
  onRangeChange?: (startIndex: number, endIndex: number) => void;
}

const createGridColumns = ({
  totalCount,
  columns = 1,
  gap = '0 8px',
  renderItem,
}: Pick<IVirtualScrollProps, 'totalCount' | 'columns' | 'gap' | 'renderItem'>) => {
  const isColumns = columns > 1;
  const items = Array.from({ length: totalCount });

  if (isColumns) {
    return items
      .map((_, i) => i)
      .reduce((acc, i) => {
        if (i % columns === 0) {
          acc.push([]);
        }
        const prev = acc[acc.length - 1];
        prev.push(i);
        return acc;
      }, [] as number[][])
      .map((arr, i) => {
        return (
          <div
            key={i}
            style={{
              display: 'flex',
              width: '100%',
              gap,
            }}
          >
            {arr.map((index) => (
              <div
                key={index}
                style={{
                  flex: 1 / columns,
                }}
              >
                {renderItem(index, index === 0)}
              </div>
            ))}
          </div>
        );
      });
  }

  return items.map((_, index) => <Fragment key={index}>{renderItem(index, index === 0)}</Fragment>);
};

const VirtualScroll = forwardRef(
  (
    {
      totalCount,
      columns,
      gap,
      isWindow = true,
      horizontal = false,
      renderItem,
      onScrollEnd,
      onRangeChange,
      ...chakraProps
    }: IVirtualScrollProps,
    ref: ForwardedRef<WindowVirtualizerHandle & VirtualizerHandle>,
  ) => {
    return horizontal ? (
      <Box height="500px" overflow="hidden" overflowX="auto" {...chakraProps}>
        <Virtualizer ref={ref} horizontal as={VirtualList} item={VirtualListItem}>
          {createGridColumns({ totalCount, renderItem })}
        </Virtualizer>
      </Box>
    ) : (
      <>
        {isWindow ? (
          <Box {...chakraProps}>
            <WindowVirtualizer ref={ref} onScrollEnd={onScrollEnd} onRangeChange={onRangeChange}>
              {createGridColumns({ totalCount, columns, gap, renderItem })}
            </WindowVirtualizer>
          </Box>
        ) : (
          <Box width="100%" height="100vh" overflow="hidden" overflowY="auto" {...chakraProps}>
            <Virtualizer ref={ref} onScrollEnd={onScrollEnd} onRangeChange={onRangeChange}>
              {createGridColumns({ totalCount, columns, gap, renderItem })}
            </Virtualizer>
          </Box>
        )}
      </>
    );
  },
);

VirtualScroll.displayName = 'VirtualScroll';
export default VirtualScroll;

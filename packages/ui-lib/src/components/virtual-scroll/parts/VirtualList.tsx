import { forwardRef } from 'react';
import type { CustomContainerComponentProps } from 'virtua';

const VirtualList = forwardRef<HTMLUListElement, CustomContainerComponentProps>(
  ({ children, style }, ref) => {
    return (
      <ul
        style={{
          ...style,
          height: '100%',
        }}
        ref={ref}
      >
        {children}
      </ul>
    );
  },
);

VirtualList.displayName = 'VirtualList';
export default VirtualList;

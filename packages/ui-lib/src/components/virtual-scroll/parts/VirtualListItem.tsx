import { forwardRef } from 'react';
import type { CustomItemComponentProps } from 'virtua';

const VirtualListItem = forwardRef<HTMLLIElement, CustomItemComponentProps>(
  ({ children, style }, ref) => {
    return (
      <li
        ref={ref}
        style={{
          ...style,
          height: 'auto',
        }}
      >
        {children}
      </li>
    );
  },
);

VirtualListItem.displayName = 'VirtualListItem';
export default VirtualListItem;

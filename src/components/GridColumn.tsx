import React from 'react';

type GridColumnProps = {
  children?: React.ReactNode;
};

const GridColumn = ({ children }: GridColumnProps) => {
  return (
    <div className="grid grid-cols-3 md:grid-cols-4 gap-x-4 items-start px-4">
      {children}
    </div>
  );
};

export default GridColumn;

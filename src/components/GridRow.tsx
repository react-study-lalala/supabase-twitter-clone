import React from 'react';

type GridRowProps = {
  children?: React.ReactNode;
};

const GridRow = ({ children }: GridRowProps) => {
  return <div className="grid gap-y-4">{children}</div>;
};

export default GridRow;

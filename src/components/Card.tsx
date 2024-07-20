import React from 'react';

type CardProps = {
  title?: string;
  children?: React.ReactNode;
};

const Card = ({ title, children }: CardProps) => {
  return (
    <div>
      {title && <div className="font-bold mb-2">{title}</div>}
      <div className="border border-gray-700 rounded-md p-4">{children}</div>
    </div>
  );
};

export default Card;

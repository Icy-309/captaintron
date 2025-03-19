// components/IframeComponent.tsx

import React from 'react';

type IframeComponentProps = {
  src: string;
};

const IframeComponent: React.FC<IframeComponentProps> = ({ src }) => {
  return (
    <div className="w-full flex justify-center">
      <iframe 
        src={src}
        className="w-full md:w-[70%] h-[600px] rounded-lg border border-gray-300 shadow-lg"
        title="Embedded Chart"
      />
    </div>
  );
};

export default IframeComponent;

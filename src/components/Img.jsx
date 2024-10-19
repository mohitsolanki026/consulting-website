import React from 'react';

function Img({ value }) {
  return (
    <div className="relative h-full">
      <img
        src={value}
        alt=""
        className="w-full h-full object-cover"
        style={{ objectFit: 'cover' }}
      />
      <div className="absolute top-0 right-0 bottom-0 w-full gradient"></div>
    </div>
  );
}

export default Img;
import React, { useState } from 'react';

const colors = [
  "#8BC34A",
  "#8E24AA",
  "#00E676",
  "#D81B60",
  "#1E88E5",
  "#FBC02D",
  "#4DD0E1",
  "#FF7043",
  "#AB47BC",
  "#42A5F5"
];

export function PhotoCard(props) {
  const { photo, index = 0 } = props;
  
  const [imgError, setImgError] = useState(false);
  const color = colors[index % colors.length];

  return (
    <div className="border border-gray-700 bg-black p-3 flex flex-col items-center h-full">
      <div className="w-full aspect-square bg-gray-900 overflow-hidden flex items-center justify-center">
        {/* Show a colored placeholder if the image fails to load */}
        {imgError ? (
          <div
            className="w-full h-full flex items-center justify-center text-white/50 text-xs font-medium"
            style={{ backgroundColor: color }}
          >
            600 x 600
          </div>
        ) : (
          <img
            src={photo.url}
            alt={photo.title}
            className="w-full h-full object-cover"
            onError={() => {
              setImgError(true);
            }}
          />
        )}
      </div>
      
      <p className="text-white text-xs sm:text-sm font-normal text-center w-full truncate mt-2">
        {photo.title}
      </p>
    </div>
  );
}

export default PhotoCard;

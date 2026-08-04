import React, { useState } from 'react';

// Color palette for the photo cards
const colors = [
  '#8BC34A', '#8E24AA', '#00E676', '#D81B60', '#FF69B4', '#1E88E5',
  '#A7F3D0', '#4A148C', '#4DB6AC', '#B71C1C', '#10B981', '#4FC3F7',
  '#1B5E20', '#0D47A1', '#F8BBD0', '#FBC02D', '#880E4F', '#00C853',
  '#4DD0E1', '#7E57C2', '#7B1FA2', '#556B2F', '#E040FB', '#9C27B0',
  '#4A4A4A', '#D47FA6', '#263238', '#9932CC', '#3B82F6', '#A3E635',
  '#E11D48', '#6B7280', '#22C55E', '#0284C7', '#EA580C', '#84CC16',
  '#FF7043', '#26A69A', '#AB47BC', '#5C6BC0', '#EC407A', '#26C6DA',
  '#FFA726', '#78909C', '#8D6E63', '#009688', '#FFCA28', '#EF5350',
  '#66BB6A', '#42A5F5', '#80DEEA', '#C51162', '#AA00FF', '#6200EA',
  '#304FFE', '#00B8D4', '#00BFA5', '#64DD17', '#AEEA00', '#FFAB00'
];

export function PhotoCard({ photo, index = 0 }) {
  const [imgError, setImgError] = useState(false);

  const color = colors[index % colors.length];

  return (
    <div className="border border-gray-700 bg-black p-3 flex flex-col items-center h-full">
      <div className="w-full aspect-square bg-gray-900 overflow-hidden flex items-center justify-center">
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
            onError={() => setImgError(true)}
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



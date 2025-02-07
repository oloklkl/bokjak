import React from 'react';

const MoveVisual = () => {
  // 이미지 URL 배열
  const imageUrls = [
    'https://via.placeholder.com/150?text=Image+1', // 첫 번째 이미지
    'https://via.placeholder.com/150?text=Image+2', // 두 번째 이미지
    null,
    'https://via.placeholder.com/150?text=Image+4', // 네 번째 이미지
    'https://via.placeholder.com/150?text=Image+5', // 다섯 번째 이미지
    'https://via.placeholder.com/150?text=Image+6', // 여섯 번째 이미지
  ];

  return (
    <MoveVisual>
      <div className="bg-black p-4">
        <div className="flex gap-4 justify-center items-center">
          {/* 각 사각형 요소 */}
          {imageUrls.map((url, index) => (
            <div key={index} className="w-32 h-32 bg-gray-800 rounded-lg flex items-center justify-center">
              {/* 이미지가 없으면 빈 사각형 */}
              {url ? (
                <img src={url} alt={`Image ${index + 1}`} className="w-full h-full object-cover rounded-lg" />
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </MoveVisual>
  );
};

export default MoveVisual;

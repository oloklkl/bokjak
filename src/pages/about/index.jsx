import React from 'react';

const HomePage = () => {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[800px] flex items-center justify-center bg-black">
        <div
          className="text-center bg-cover bg-center bg-no-repeat py-12 px-8"
          style={{
            backgroundImage:
              "url('https://i.namu.wiki/i/LU83hYWtTa90DITA-Ukrr-joZ4n2WuZjOuv9tVrJuBxVxCKSUuYz3TBisXS5b7dvNgzrg6een1GHEPKSqPRbpcqDOHWmbYeFqA4L3C-VT8ZkGTmR-DfXJkCKV7oUVYLGT6SQk5Z4eJXJr2ooVAj3tQ.webp')",
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center 50px', // 이미지 위치는 아래로 조정 (50px)
            width: '100%',
            height: '400px', // 높이는 고정
          }}
        >
          <h1
            className="text-4xl font-bold text-white"
            style={{
              textAlign: 'left',
              paddingLeft: '150px',
              paddingTop: '150px',
            }}
          >
            이 모든 이야기가 여기에
          </h1>
          <p
            className="mt-4 text-lg text-white"
            style={{
              textAlign: 'left',
              paddingLeft: '150px',
            }}
          >
            지금 스트리밍 중
          </p>
        </div>
      </section>

      {/* Content Sections */}
      <section className="flex-grow text-center">
        <div className="text-4xl">BOKJAK의 영화, 애니메이션</div>
        <div className="text-lg mt-2">다른 어디에서도 볼 수 없는 복작을 만나보세요. 영화, 드라마, 애니메이션 </div>
      </section>

      {/* Devices Section */}
      <section className="py-12 bg-gray-900 text-center">
        <h2 className="text-3xl font-semibold">다양한 기기에서 감상</h2>
        <p className="mt-4 text-lg">스마트폰, 태블릿, PC, TV까지!</p>
        <div className="mt-8 flex justify-center gap-4">
          <img src="" alt="복작화면" className="max-w-full h-auto" />
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-12 bg-gray-900 text-center">
        <h2 className="text-3xl font-semibold text-white">원하는 멤버십을 선택하세요</h2>
        <p>멤버십은 언제나 변경, 취소할 수 있습니다.</p>
        <div className="mt-8 mx-auto max-w-4xl bg-gray-800 rounded-lg overflow-hidden">
          <table className="w-full text-left text-white border-separate border-spacing-y-2">
            <thead>
              <tr>
                <th className="py-4 px-6 bg-gray-700 text-center text-lg font-bold rounded-tl-lg">베이직</th>
                <th className="py-4 px-6 bg-gray-700 text-center text-lg font-bold rounded-tr-lg">프리미엄</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-4 px-6 text-center">
                  <div className="bg-purple-500 py-2 px-4 text-white rounded-md">월 9,900원</div>
                </td>
                <td className="py-4 px-6 text-center">
                  <div className="bg-purple-500 py-2 px-4 text-white rounded-md">월 13,900원</div>
                </td>
              </tr>
              <tr>
                <td className="py-4 px-6 text-center">연간 99,000원</td>
                <td className="py-4 px-6 text-center">연간 139,000원</td>
              </tr>
              <tr>
                <td className="py-4 px-6 text-center">최대 16% 할인된 가격</td>
                <td className="py-4 px-6 text-center">최대 16% 할인된 가격</td>
              </tr>
              <tr>
                <td className="py-4 px-6 text-center">최대 1080p Full HD</td>
                <td className="py-4 px-6 text-center">최대 4K UHD & HDR</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto py-6 bg-black text-center text-sm text-gray-500">
        모든 권리는 복작에 있습니다. © 2025 BOKJAK
      </footer>
    </div>
  );
};

export default HomePage;

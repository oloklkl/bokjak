import React from 'react';

const FAQ = () => {
  const plans = [
    {
      name: '디즈니+ 스탠다드',
      monthly: '월 ₩9,900',
      yearly: '연 ₩99,000',
      discount: '최대 16% 할인된 가격**',
      videoQuality: '최대 1080p Full HD',
      audio: '최대 5.1 사운드',
      streams: 2,
      ads: '광고 없는 스트리밍',
      download: true,
    },
    {
      name: '디즈니+ 프리미엄',
      monthly: '월 ₩13,900',
      yearly: '연 ₩139,000',
      discount: '최대 16% 할인된 가격**',
      videoQuality: '최대 4K UHD & HDR',
      audio: '최대 Dolby Atmos 오디오',
      streams: 4,
      ads: '광고 없는 스트리밍',
      download: true,
    },
  ];

  return (
    <Faq>
      <section className="py-12 bg-black text-white">
        <h2 className="text-3xl font-semibold text-center">플랜을 선택하세요</h2>
        <div className="mt-8 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`p-6 rounded-lg border ${index === 1 ? 'border-cyan-500' : 'border-gray-700'} bg-gray-800`}
            >
              <h3 className="text-xl font-bold mb-4 text-center">{plan.name}</h3>
              <p className="text-center text-lg font-semibold text-cyan-400">{plan.monthly}</p>
              <p className="text-center mt-1 text-sm text-gray-400">{plan.yearly}</p>
              <p className="text-center mt-1 text-xs text-gray-500">{plan.discount}</p>
              <ul className="mt-6 space-y-2">
                <li className="flex justify-between">
                  <span>영상 화질***</span>
                  <span>{plan.videoQuality}</span>
                </li>
                <li className="flex justify-between">
                  <span>오디오***</span>
                  <span>{plan.audio}</span>
                </li>
                <li className="flex justify-between">
                  <span>동시 스트리밍</span>
                  <span>{plan.streams}</span>
                </li>
                <li className="flex justify-between">
                  <span>광고</span>
                  <span>{plan.ads}</span>
                </li>
                <li className="flex justify-between">
                  <span>콘텐츠 저장</span>
                  <span>{plan.download ? '✔' : '✘'}</span>
                </li>
              </ul>
            </div>
          ))}
        </div>
      </section>
    </Faq>
  );
};

export default FAQ;

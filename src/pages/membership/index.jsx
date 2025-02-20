import { useState } from 'react';

import { BarButton } from '../../ui';

const Membership = () => {
  const [selected, setSelected] = useState('1month');

  return (
    <div>
      <h2>프리미엄 구독권의 결제 주기를 선택하세요</h2>

      <div>
        {/* 1개월 옵션 */}
        <div>
          <div>
            <span>1개월</span>
          </div>
          <span className="font-bold">12,900원</span>
        </div>

        {/* 12개월 옵션 */}
        <div
          className={`flex flex-col p-4 rounded-lg border cursor-pointer ${
            selected === '12months' ? 'border-pink-500 bg-pink-900/20' : 'border-gray-700'
          }`}
          onClick={() => setSelected('12months')}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span>12개월</span>
              <span>16% 절약</span>
            </div>
            <span>129,900원</span>
          </div>
          <span className="text-gray-400 text-sm mt-1">월 10,830원 꼴</span>
        </div>
      </div>

      {/* 선택 버튼 */}
      <div>
        <BarButton
          className=""
          text="더 알아보기"
          width="250px"
          height="50px"
          style={{
            position: 'absolute',
            top: '400px',
            left: '10%',
            zIndex: 3,
            marginTop: '100px',
            marginLeft: '280px',
          }}
          onClick={() => window.open('pages/membership', '_blank')}
        />
      </div>
    </div>
  );
};

export default Membership;

import React, { useEffect } from 'react';
import { AboutWrap } from './style';

const HomePage = () => {
  useEffect(() => {
    // 페이지가 로드될 때 가로 스크롤을 막음
    document.body.style.overflowX = 'hidden';

    return () => {
      document.body.style.overflowX = '';
    };
  }, []);

  return (
    <AboutWrap>
      {/* Hero Section */}
      <section>
        <div
          className="fixed inset-0 bg-cover bg-center bg-no-repeat py-12 px-8"
          style={{
            backgroundImage:
              "url('https://i.namu.wiki/i/LU83hYWtTa90DITA-Ukrr-joZ4n2WuZjOuv9tVrJuBxVxCKSUuYz3TBisXS5b7dvNgzrg6een1GHEPKSqPRbpcqDOHWmbYeFqA4L3C-VT8ZkGTmR-DfXJkCKV7oUVYLGT6SQk5Z4eJXJr2ooVAj3tQ.webp')",
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',

            width: '100vw',
            height: '600px',
            overflow: 'hidden',
            fontSize: {},
          }}
        >
          <h1
            className="fontSize-display text-white text-left lg:text-left lg:pl-[150px] lg:pt-[150px] text-center p-4"
            style={{
              textAlign: 'left',
              paddingLeft: '15%',
              paddingTop: '200px',
              fontSize: 'lg',
              fontWeight: 'bold',
            }}
          >
            이 모든 이야기가 여기에 <br /> 지금 스트리밍중
          </h1>
        </div>
      </section>

      {/* Content Sections */}
      <section className="flex-grow text-center">
        <h2
          className="text-4xl"
          style={{
            paddingTop: '100px',
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: 'lg',
          }}
        >
          BOKJAK의 영화, 애니메이션
        </h2>
        <h3
          className="text-lg mt-2"
          style={{
            textAlign: 'center',
            paddingTop: '10px',
          }}
        >
          다른 어디에서도 볼 수 없는 복작을 만나보세요. <br />
          영화, 드라마, 애니메이션
        </h3>
      </section>

      <section
        style={{
          textAlign: 'center',
          paddingTop: '50px',
        }}
      >
        1,200편 이상의 영화 | 20,000편 이상의 에피소드 | 신규 및 단독 콘텐츠
      </section>

      {/* Devices Section */}
      <section className="py-12">
        <h2
          style={{
            textAlign: 'center',
            fontWeight: 'bold',
            paddingTop: '200px',
          }}
        >
          원하는 기기로 다 같이 감상 <br /> 스마트폰, 태블릿, PC, TV까지!
        </h2>

        <div
          style={{
            textAlign: 'center',
            paddingTop: '25px',
          }}
        >
          <img src="" alt="기기사진" />
        </div>
      </section>

      <section>
        <h2
          style={{
            textAlign: 'center',
            fontWeight: 'bold',
            paddingTop: '200px',
          }}
        >
          좋아하는 콘텐츠를 친구들과 함께 <br /> 감상하며 줄거움을 나눠보세요!
        </h2>
        <div
          style={{
            textAlign: 'center',
            paddingTop: '25px',
          }}
        >
          <img src="" alt="복작화면" />
        </div>
      </section>

      {/* Pricing Section */}
      <section>
        <h2
          style={{
            textAlign: 'center',
            fontWeight: 'bold',
            paddingTop: '200px',
          }}
        >
          원하는 멤버십을 선택하세요
        </h2>
        <h3
          style={{
            textAlign: 'center',
            paddingTop: '10px',
            paddingBottom: '50px',
          }}
        >
          멤버십은 언제나 변경, 취소할 수 있습니다.
        </h3>
        <p className="mt-8 mx-auto max-w-4xl bg-gray-800 rounded-lg overflow-hidden">
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
              <tr>
                <td className="py-4 px-6 text-center">최대 5.1 사운드</td>
                <td className="py-4 px-6 text-center">최대 Dolby Atmos 오디오</td>
              </tr>
              <tr>
                <td className="py-4 px-6 text-center">광고 없는 스트리밍</td>
                <td className="py-4 px-6 text-center">광고 없는 스트리밍</td>
              </tr>
              <tr>
                <td className="py-4 px-6 text-center">
                  <span className="text-green-500"> 콘텐츠 저장 ✔</span>
                </td>
                <td className="py-4 px-6 text-center">
                  <span className="text-green-500"> 콘텐츠 저장 ✔</span>
                </td>
              </tr>
            </tbody>
          </table>
        </p>
        <h4
          className="text-gray-50"
          style={{
            paddingTop: '10px',
          }}
        >
          맴버십 구독이 필요합니다.
          <br /> 결제 주기 종료시 취소 처리됩니다.
          <br /> 월간 멤버십 12개월 구독료 대비 할인된가격 입니다. 추가 약관 적용
          <br />
          영상 화질/오디오 및 저장 기능은 인터넷 서비스, 기기 성능, 멤버십 유형 및 각 콘텐츠에 따라 달라질 수 있습니다.
          <br /> 각 콘텐츠별 다양한 기능 표시가 있을 수 있으나, 해당 멤버십 유형에서 사용 가능한 최대 사양까지만 이용할
          수 있습니다. 더 알아보기.
        </h4>
      </section>

      <section className="py-12 bg-black">
        <h2
          style={{
            textAlign: 'center',
            paddingTop: '100px',
            fontWeight: 'bold',
            paddingBottom: '20px',
          }}
        >
          자주묻는질문
        </h2>
        <div className="mt-8 max-w-4xl mx-auto">
          {[
            '복작은 무엇인가요?',
            '복작에서 어떤 콘텐츠를 시청할 수 있나요?',
            '복작을 어디에서 시청할수있나요?',
            '복작을 얼마에 이용할 수 있나요?',
          ].map((question, index) => (
            <div key={index} className="py-4 border-b border-gray-700">
              <h3 className="text-lg font-semibold text-white">{question}</h3>
            </div>
          ))}
        </div>
      </section>
    </AboutWrap>
  );
};

export default HomePage;

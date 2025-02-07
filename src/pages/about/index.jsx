import React, { useEffect } from 'react';
import { AboutWrap } from './style';

const HomePage = () => {
  useEffect(() => {
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
          style={{
            position: 'relative', // 자식 요소가 배치될 기준
            backgroundImage:
              "url('https://raw.githubusercontent.com/lse-7660/bokjak-image/ea1decc22540a6f97e470d430f20a256bd37a994/images/about/headerimgg.jpg')",
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            width: '100vw',
            height: '800px',
            overflow: 'hidden',
          }}
        >
          {/* 투명한 검정 배경 레이어 */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(0, 0, 0, 0.25)', // 투명도 25% 검정
              zIndex: 1,
            }}
          ></div>

          {/* 텍스트 */}
          <h1
            style={{
              position: 'relative', // zIndex로 투명 배경 위에 텍스트 배치
              textAlign: 'left',
              paddingLeft: '10%',
              paddingTop: '300px',
              fontWeight: 'bold',
              zIndex: 2, // 텍스트가 투명 배경 위에 보이도록 설정
            }}
          >
            이 모든 이야기가 여기에 <br /> 지금 스트리밍 중
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
            paddingTop: '80px',
            backgroundImage:
              'url("https://raw.githubusercontent.com/lse-7660/bokjak-image/1286b3e9b4bc81032aa62c7ce3fb68c7d9c0a610/images/about/MultiDevice-bg.png")',
            backgroundSize: 'cover', // 배경 이미지를 전체 영역에 맞게 조정
            backgroundPosition: 'center', // 배경 이미지를 가운데로 정렬
            backgroundRepeat: 'no-repeat', // 배경 반복 방지
            height: '500px', // 전체 화면 높이
            width: '100vw', // 전체 화면 너비
          }}
        >
          <img
            src="https://raw.githubusercontent.com/lse-7660/bokjak-image/ea1decc22540a6f97e470d430f20a256bd37a994/images/about/MultiDevice-1.png"
            alt="기기사진"
            style={{
              maxWidth: '500px', // 이미지 크기 조정
              height: 'auto', // 비율 유지
            }}
          />
        </div>
      </section>

      <section>
        <h2
          style={{
            textAlign: 'center',
            fontWeight: 'bold',
            paddingTop: '300px',
          }}
        >
          좋아하는 콘텐츠를 친구들과 함께 <br /> 감상하며 줄거움을 나눠보세요!
        </h2>
        <div
          style={{
            textAlign: 'center',
            paddingTop: '80px',
          }}
        >
          <img
            src="https://raw.githubusercontent.com/lse-7660/bokjak-image/ea1decc22540a6f97e470d430f20a256bd37a994/images/about/watchparty-2.png"
            alt="복작화면"
            style={{
              maxWidth: '500px', // 이미지 크기 조정
              height: 'auto', // 비율 유지
            }}
          />
        </div>
      </section>

      {/* Pricing Section */}
      <section>
        <h2
          style={{
            textAlign: 'center',
            fontWeight: 'bold',
            paddingTop: '300px',
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
        <p>
          <table>
            <thead>
              <tr>
                <th>베이직</th>
                <th>프리미엄</th>
              </tr>
            </thead>
            <tbody>
              <tr></tr>
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
          className="co
          "
          style={{
            paddingTop: '10px',
            color: 'gr',
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
        <h5>
          <div>
            {[
              '복작은 무엇인가요?',
              '복작에서 어떤 콘텐츠를 시청할 수 있나요?',
              '복작을 어디에서 시청할수있나요?',
              '복작을 얼마에 이용할 수 있나요?',
            ].map((question, index) => (
              <div key={index} className="py-4 border-b border-gray-700">
                <h3 className="text-lg text-white">{question}</h3>
              </div>
            ))}
          </div>
        </h5>
      </section>
    </AboutWrap>
  );
};

export default HomePage;

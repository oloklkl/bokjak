import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { AboutWrap } from './style';

gsap.registerPlugin(ScrollTrigger);

const HomePage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    document.body.style.overflowX = 'hidden';

    gsap.fromTo(
      '.floating-animation',
      {
        y: 300,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.floating-animation',
          start: 'top 80%',
          end: 'top 60%',
          toggleActions: 'play none none none',
          once: false,
          onComplete: () => {
            gsap.set('.floating-animation', { clearProps: 'all' });
          },
        },
      }
    );

    return () => {
      document.body.style.overflowX = '';
    };
  }, []);

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const questions = [
    {
      question: '복작은 무엇인가요?',
      answer:
        '복작은 사용자들에게 다양한 콘텐츠를 제공하는 스트리밍 플랫폼입니다.    저렴한 월 요금으로 원하는 시간에 원하는 만큼 즐길 수 있습니다. 무궁무진한 콘텐츠가 준비되어 있으며 매주 새로운 시리즈와 영화가 제공됩니다.',
    },
    {
      question: '복작에서 어떤 콘텐츠를 시청할 수 있나요?',
      answer:
        '복작에서는 는 장편 영화, 다큐멘터리, 시리즈, 애니메이션, 등 수많은 콘텐츠를 확보하고 있습니다. 마음에 드는 콘텐츠를 원하는 시간에 원하는 만큼 시청하실 수 있습니다.',
    },
    {
      question: '복작을 어디에서 시청할 수 있나요?',
      answer:
        '언제 어디서나 시청할 수 있습니다. 로그인하면 PC에서 bokjak.com을 통해 바로 시청할 수 있으며, 인터넷이 연결되어 있고 넷플릭스 앱을 지원하는 디바이스(스마트 TV, 스마트폰, 태블릿, 스트리밍 미디어 플레이어, 게임 콘솔 등)에서도 언제든지 시청할 수 있습니다.',
    },
    {
      question: '복작을 얼마에 이용할 수 있나요?',
      answer:
        '스마트폰, 태블릿, 스마트 TV, 노트북, 스트리밍 디바이스 등 다양한 디바이스에서 월정액 요금 하나로 복작을 시청하세요. 멤버십 요금은 월 9,900원부터 15,600원까지 다양합니다. 추가 비용이나 약정이 없습니다',
    },
  ];

  return (
    <AboutWrap>
      {/* Hero Section */}
      <section>
        <div
          style={{
            position: 'relative',
            backgroundImage:
              "url('https://raw.githubusercontent.com/lse-7660/bokjak-image/ea1decc22540a6f97e470d430f20a256bd37a994/images/about/headerimgg.jpg')",
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            width: '100vw',
            height: '800px',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(0, 0, 0, 0.25)',
              zIndex: 1,
            }}
          ></div>
          <h1
            style={{
              position: 'absolute',
              top: '300px',
              left: '10%',
              fontWeight: 'bold',
              zIndex: 2,
              color: 'white',
            }}
          >
            이 모든 이야기가 여기에 <br /> 지금 스트리밍 중
          </h1>
        </div>
      </section>

      {/* Content Sections */}
      <section className="flex-grow text-center">
        <div className="max-w-screen-lg mx-auto">
          <h2
            style={{
              textAlign: 'center',
              paddingTop: '200px',
            }}
          >
            BOKJAK의 영화, 애니메이션
          </h2>
          <h3
            style={{
              textAlign: 'center',
              paddingTop: '10px',
            }}
          >
            다른 어디에서도 볼 수 없는 복작을 만나보세요. <br />
            영화, 드라마, 애니메이션
          </h3>
        </div>
      </section>

      <h6
        style={{
          textAlign: 'center',
          paddingTop: '50px',
        }}
      >
        1,200편 이상의 영화 | 20,000편 이상의 에피소드 | 신규 및 단독 콘텐츠
      </h6>

      {/* Floating Animation Section */}
      <section className="py-12">
        <h2
          style={{
            textAlign: 'center',
            fontWeight: 'bold',
            paddingTop: '200px',
          }}
        >
          좋아하는 콘텐츠를 친구들과 함께 <br /> 감상하며 즐거움을 나눠보세요!
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
            className="floating-animation"
            style={{
              maxWidth: '500px',
              height: 'auto',
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
          style={{
            paddingTop: '10px',
            color: 'gray',
          }}
        >
          멤버십 구독이 필요합니다.
          <br /> 결제 주기 종료 시 취소 처리됩니다.
          <br /> 월간 멤버십 12개월 구독료 대비 할인된 가격입니다. 추가 약관 적용.
        </h4>
      </section>

      {/* FAQ Section */}
      <section className="py-12 bg-black">
        <h2
          style={{
            textAlign: 'center',
            paddingTop: '200px',
            fontWeight: 'bold',
            paddingBottom: '20px',
          }}
        >
          자주 묻는질문
        </h2>
        <div
          style={{
            paddingBottom: '100px',
            width: '80%',
            maxWidth: 'auto',
            margin: '0 auto',
          }}
        >
          {questions.map((item, index) => (
            <div
              key={index}
              style={{
                marginBottom: '20px',
                backgroundColor: '#1D1D1D',
                borderRadius: '5px',
                position: 'relative',
                overflow: 'hidden', // Ensure smooth clipping
                transition: 'background-color 0.3s ease', // Add transition for smooth hover effect
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#2d2d2d')} // Hover color
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#1d1d1d')} // Reset color on leave
            >
              <div
                style={{
                  padding: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  height: '70px',
                  cursor: 'pointer',
                }}
                onClick={() => toggleQuestion(index)}
              >
                <span
                  style={{
                    fontSize: '16px',
                    color: 'white',
                    flex: 1,
                  }}
                >
                  {item.question}
                </span>
                <span
                  style={{
                    fontSize: '30px',
                    fontWeight: 'normal',
                    color: 'white',
                    transform: openIndex === index ? 'rotate(45deg)' : 'none',
                    transition: 'transform 0.3s ease',
                  }}
                >
                  +
                </span>
              </div>

              {openIndex === index && (
                <div
                  style={{
                    padding: '20px',
                    fontSize: '14px',
                    backgroundColor: '#1d1d1d',
                    borderRadius: '0 0 5px 5px',
                    color: 'white',
                    animation: 'fadeIn 0.5s ease', // Smooth transition
                  }}
                >
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </AboutWrap>
  );
};

export default HomePage;

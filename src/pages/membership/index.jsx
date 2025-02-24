import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare, faSquare } from '@fortawesome/free-solid-svg-icons';
import { BarButton } from '../../ui';

export default function SubscriptionPlans() {
  const [showMembership, setShowMembership] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);

  if (showMembership) {
    return <Membership />;
  }

  const handlePlanClick = (plan) => {
    setSelectedPlan(selectedPlan === plan ? null : plan);
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        padding: '20px',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          gap: '20px',
          maxWidth: '1200px',
          width: '100%',
          marginBottom: '40px',
        }}
      >
        {/* 프리미엄 플랜 */}
        <div
          onClick={() => handlePlanClick('프리미엄')}
          style={{
            flex: '1',
            border: `2.5px solid ${selectedPlan === '프리미엄' ? '#8000FF' : '#fff'}`,
            padding: '20px',
            borderRadius: '10px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            backgroundColor: selectedPlan === '프리미엄' ? '#1d1d1d' : '#111',
            cursor: 'pointer',
          }}
        >
          <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px' }}>프리미엄</h2>
          <p style={{ fontSize: '25px', fontWeight: 'bold', marginBottom: '10px' }}>
            월 15,000원
            <br />연 150,000원
          </p>
          <p style={{ marginBottom: '10px' }}>최대 16% 할인된 가격</p>
          <p style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '5px' }}>최대 Dolley Atmos 오디오</p>
          <p style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '5px' }}>최대 4K Full HD UHD & HDR</p>
          <p style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '5px' }}>광고없는 스트리밍</p>
          <p style={{ fontSize: '14px' }}>비디오 저장가능</p>
        </div>

        {/* 베이직 플랜 */}
        <div
          onClick={() => handlePlanClick('베이직')}
          style={{
            flex: '1',
            border: `2.5px solid ${selectedPlan === '베이직' ? '#8000FF' : '#fff'}`,
            padding: '20px',
            borderRadius: '10px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            backgroundColor: selectedPlan === '베이직' ? '#1d1d1d' : '#111',
            cursor: 'pointer',
          }}
        >
          <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px' }}>베이직</h2>
          <p style={{ fontSize: '25px', fontWeight: 'bold', marginBottom: '10px' }}>
            월 9,900원
            <br />연 99,000원
          </p>
          <p style={{ marginBottom: '10px' }}>최대 16% 할인된 가격</p>
          <p style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '5px' }}>최대 5.1 사운드</p>
          <p style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '5px' }}>최대 1080P Full HD</p>
          <p style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '5px' }}>광고없는 스트리밍</p>
          <p style={{ fontSize: '14px' }}>비디오 저장가능</p>
        </div>
      </div>

      {/* 지원 기기 */}
      <div
        style={{
          backgroundColor: '#1d1d1d',
          color: '#fff',
          padding: '20px',
          borderRadius: '10px',
          textAlign: 'center',
          width: '100%',
          maxWidth: '1200px',
          marginBottom: '15px',
        }}
      >
        <p style={{ fontSize: '18px', marginBottom: '10px' }}>지원 기기</p>
        <p style={{ fontSize: '16px' }}>모바일, 태블릿, PC, TV 지원</p>
      </div>

      {/* 구독 버튼 */}
      <BarButton
        text="결제 주기 선택"
        width="50%"
        height="45px"
        style={{
          marginTop: '20px',
        }}
        onClick={() => setShowMembership(true)}
      />
    </div>
  );
}

function Membership() {
  const [activeDiv, setActiveDiv] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [isBasicChecked, setIsBasicChecked] = useState(false);
  const [isPremiumChecked, setIsPremiumChecked] = useState(false);

  const handleDivClick = (div) => {
    if (div === 'basic') {
      setIsBasicChecked(!isBasicChecked);
      if (activeDiv === 'basic') {
        setActiveDiv(null); // Deselect if already selected
      } else {
        setActiveDiv('basic');
      }
    } else if (div === 'premium') {
      setIsPremiumChecked(!isPremiumChecked);
      if (activeDiv === 'premium') {
        setActiveDiv(null); // Deselect if already selected
      } else {
        setActiveDiv('premium');
      }
    }
  };

  const handleButtonClick = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  const getCheckboxColor = (div) => (activeDiv === div ? '#8000FF' : '#ccc');

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        padding: '100px 0px 105px',
        maxWidth: '40%',
        height: 'auto',
        margin: '0 auto',
      }}
    >
      <h1
        style={{
          marginTop: '50px',
          color: '#fff',
          fontSize: '32px',
          fontWeight: 'bold',
          textAlign: 'left',
          marginBottom: '10px',
        }}
      >
        멤버십을 <br />
        선택해 주세요
      </h1>
      <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '20px',
            border: activeDiv === 'basic' ? '2.5px solid #8000FF' : '2.5px solid white',
            borderRadius: '5px',
            marginBottom: '30px',
            cursor: 'pointer',
          }}
          onClick={() => handleDivClick('basic')}
        >
          <span>
            <FontAwesomeIcon
              icon={isBasicChecked ? faCheckSquare : faSquare}
              style={{ marginRight: '10px', color: getCheckboxColor('basic') }}
            />
            1개월
          </span>
          <span>9,900원</span>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '20px',
            border: activeDiv === 'premium' ? '2.5px solid #8000FF' : '2.5px solid white',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
          onClick={() => handleDivClick('premium')}
        >
          <span>
            <FontAwesomeIcon
              icon={isPremiumChecked ? faCheckSquare : faSquare}
              style={{ marginRight: '10px', color: getCheckboxColor('premium') }}
            />
            12개월
          </span>
          <span>15,000원</span>
        </div>
      </div>
      <BarButton
        text="결제 멤버십 선택"
        width="100%"
        height="45px"
        style={{
          marginTop: '20px',
        }}
        onClick={handleButtonClick} // 버튼 클릭 시 모달 표시
      />
      {/*모달창*/}
      {showModal && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.50)', // 배경 투명도 설정
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onClick={handleCloseModal}
        >
          <div
            style={{
              backgroundColor: '#1D1D1D', // 다크 모드 스타일
              color: 'white',
              padding: '20px',
              borderRadius: '10px',
              textAlign: 'center',
              width: '350px',
              position: 'relative',
            }}
            onClick={(e) => e.stopPropagation()} // 모달 내부 클릭 시 닫히지 않도록 설정
          >
            <span
              style={{
                position: 'absolute',
                top: '10px',
                right: '15px',
                fontSize: '20px',
                cursor: 'pointer',
                color: '#ccc',
              }}
              onClick={handleCloseModal}
            >
              &times;
            </span>
            <p style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>알림</p>
            <p style={{ color: '#C6C6C6', marginBottom: '20px' }}>계정을 만들고 구독을 완료해 보세요!</p>
            <BarButton
              style={{
                backgroundColor: '#8000FF',
                color: 'white',
                padding: '12px',
                borderRadius: '5px',
                width: '100%',
                fontWeight: 'bold',
                border: 'none',
                cursor: 'pointer',
              }}
              onClick={() => (window.location.href = '/login')}
            >
              네, 좋아요!
            </BarButton>
          </div>
        </div>
      )}
    </div>
  );
}

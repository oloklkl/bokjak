import React, { useState } from 'react';
import { BarButton } from '../../ui';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare, faSquare } from '@fortawesome/free-solid-svg-icons';

const Membership = () => {
  // State to track which div is clicked and modal visibility
  const [activeDiv, setActiveDiv] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [isBasicChecked, setIsBasicChecked] = useState(false);
  const [isPremiumChecked, setIsPremiumChecked] = useState(false);

  const handleDivClick = (div) => {
    if (div === 'basic') {
      setIsBasicChecked(!isBasicChecked);
    } else if (div === 'premium') {
      setIsPremiumChecked(!isPremiumChecked);
    }

    if (activeDiv === div) {
      setActiveDiv(null);
    } else {
      setActiveDiv(div);
    }
  };

  const handleButtonClick = () => {
    setShowModal(true); // 버튼 클릭 시 모달 표시
  };

  const handleCloseModal = () => {
    setShowModal(false); // 모달 닫기
  };

  const getCheckboxColor = (div) => {
    return activeDiv === div ? '#8000FF' : '#ccc';
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start', // Changed from 'left' to 'flex-start'
        justifyContent: 'center',
        padding: '100px 0px 105px',
        maxWidth: '70%',
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
          textAlign: 'left', // Added textAlign to ensure left alignment
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
            border: activeDiv === 'basic' ? '2.5px solid #8000FF' : '2.5px solid white', // Updated border color
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
            베이직
          </span>
          <span>9,900원</span>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '20px',
            border: activeDiv === 'premium' ? '2.5px solid #8000FF' : '2.5px solid white', // Updated border color
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
            프리미엄
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

      {/* Modal */}
      {showModal && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.6)', // 배경 어둡게
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
};

export default Membership;

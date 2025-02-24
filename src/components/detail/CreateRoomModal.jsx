import styled from 'styled-components';
import { DetailModalCom } from './style';
import { useDispatch, useSelector } from 'react-redux';
import { CaretLeft, X } from '@phosphor-icons/react';
import { detailActions } from '../../store/modules/detailSlice';
import { BarButton } from '../../ui';
import { color } from '../../styled/theme';
import { useState } from 'react';
import { media } from '../../styled/media';

const CreateRoomModalWrap = styled.div`
    width: 540px;
    height: auto;
    padding: 64px 100px;

    ${media.mobile} {
        width: auto;
        padding: 120px 20px;
    }

    div {
        &.bj-room-lock {
            display: flex;
            flex-direction: column;
            gap: 14px;
        }
        &.bj-room-lock-btns {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 10px;
            button {
                height: 42px;
                border-radius: 7px;
                background-color: ${color('gray', '70')};
                color: ${color('gray', '50')};
                &.bj-room-lock-focus {
                    font-weight: 600;
                    background-color: ${color('gray', '60')};
                    color: ${color('gray', '0')};
                }
            }
        }
    }
`;

const CreateRoomModal = () => {
    const [isPwOpen, setIsPwOpen] = useState(true);
    const dispatch = useDispatch();
    const { isCreateOpen, currentContent } = useSelector((state) => state.detailR);

    return (
        <DetailModalCom className={isCreateOpen ? 'modal-animation' : ''}>
            <div className="create-room-modal-wrap-mo">
                <CreateRoomModalWrap className="create-room-modal">
                    <p onClick={() => dispatch(detailActions.closeCreateModal())} className="bjmodal-close-button-left">
                        <CaretLeft size={24} />
                    </p>
                    <p onClick={() => dispatch(detailActions.closeAllModal())} className="bjmodal-close-button">
                        <X size={24} />
                    </p>
                    <div className="bj-create-modal-wrap">
                        <p className="bj-modal-title">{currentContent.title} 모여보기</p>
                        <form action="" className="bj-create-modal-form">
                            <input type="text" placeholder="방 제목을 입력해주세요" className="bjmodal-input" />

                            <div className="bj-room-lock">
                                <div className="bj-room-lock-btns">
                                    <button
                                        type="button"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            setIsPwOpen(true);
                                        }}
                                        className={isPwOpen && 'bj-room-lock-focus'}
                                    >
                                        우리끼리만
                                    </button>
                                    <button
                                        type="button"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            setIsPwOpen(false);
                                        }}
                                        className={!isPwOpen && 'bj-room-lock-focus'}
                                    >
                                        누구나
                                    </button>
                                </div>
                                {isPwOpen && (
                                    <input
                                        type="text"
                                        placeholder="비밀번호를 입력해주세요"
                                        className="bjmodal-input"
                                    />
                                )}
                            </div>
                        </form>
                        <BarButton
                            text="방 만들기"
                            width="340px"
                            height="42px"
                            onClick={() => dispatch(detailActions.openRoomCreatedModal())}
                        />
                    </div>
                </CreateRoomModalWrap>
            </div>
        </DetailModalCom>
    );
};

export default CreateRoomModal;

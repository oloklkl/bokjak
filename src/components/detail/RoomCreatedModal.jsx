import { Link, X } from '@phosphor-icons/react';
import { DetailModalCom } from './style';
import { useDispatch } from 'react-redux';
import { detailActions } from '../../store/modules/detailSlice';
import styled from 'styled-components';
import { BarButton } from '../../ui';
import { color } from '../../styled/theme';

const RoomCreatedModalWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 60px;
    padding: 64px 40px 40px 40px;

    div {
        &.bj-modal-roomcreated-titlewrap {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }
        &.bj-modal-url {
            display: flex;
            align-items: center;

            max-width: 420px;
            padding: 10px;
            background-color: ${color('gray', '70')};
            border-radius: 7px;

            p {
                &.bj-modal-url-nowrap {
                    white-space: nowrap;
                    overflow-x: scroll;

                    -ms-overflow-style: none;
                    &::-webkit-scrollbar {
                        display: none;
                    }
                }
            }
        }
    }
`;

const RoomCreatedModal = () => {
    const dispatch = useDispatch();
    return (
        <>
            <DetailModalCom>
                <RoomCreatedModalWrap>
                    <p onClick={() => dispatch(detailActions.closeAllModal())} className="bjmodal-close-button">
                        <X size={24} />
                    </p>
                    <div className="bj-modal-roomcreated-titlewrap">
                        <p className="bj-modal-title">모여보기 방을 만들었어요!</p>
                        <p>모여 볼 친구에게 아래 링크를 공유해주세요.</p>
                    </div>
                    <div className="bj-modal-url">
                        <p className="bj-modal-url-nowrap">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo, voluptatibus
                        </p>
                        <BarButton text="URL 복사" minWidth="120px" height="42px" />
                    </div>
                </RoomCreatedModalWrap>
            </DetailModalCom>
        </>
    );
};

export default RoomCreatedModal;

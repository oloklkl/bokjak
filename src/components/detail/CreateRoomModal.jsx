import styled from 'styled-components';
import { DetailModalCom } from './style';
import { useDispatch } from 'react-redux';
import { X } from '@phosphor-icons/react';
import { detailActions } from '../../store/modules/detailSlice';
import { BarButton } from '../../ui';

const CreateRoomModalWrap = styled.div`
    width: 540px;
    height: auto;
    padding: 64px 100px;
`;

const CreateRoomModal = () => {
    const dispatch = useDispatch();
    return (
        <DetailModalCom>
            <CreateRoomModalWrap>
                <p onClick={() => dispatch(detailActions.closeAllModal())} className="bjmodal-close-button">
                    <X size={24} />
                </p>
                <div>
                    <p className="bj-modal-title">힐하우스의 유령 모여보기</p>
                    <div></div>
                    <BarButton text="방 만들기" />
                </div>
            </CreateRoomModalWrap>
        </DetailModalCom>
    );
};

export default CreateRoomModal;

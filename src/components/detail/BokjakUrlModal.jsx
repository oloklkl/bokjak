import styled from 'styled-components';
import { BarButton } from '../../ui';
import { Link, X } from '@phosphor-icons/react';
import { useDispatch, useSelector } from 'react-redux';
import { detailActions } from '../../store/modules/detailSlice';
import { DetailModalCom } from './style';

const BokjakUrlModalWrap = styled.div`
    width: auto;
    height: auto;
    padding: 64px 40px 40px 40px;

    div {
        &.bj-modal-content-wrap {
            display: flex;
            flex-direction: column;
            gap: 60px;
            align-items: center;

            width: 100%;
        }
        &.bj-modal-btns {
            display: flex;
            flex-direction: column;
            gap: 20px;
        }
    }

    &.bj-url-modal-hidden {
        display: none;
    }
`;

const BokjakUrlModal = () => {
    const dispatch = useDispatch();
    const { isRoomCreated } = useSelector((state) => state.detailR);
    return (
        <DetailModalCom>
            <BokjakUrlModalWrap className={isRoomCreated ? 'bj-url-modal-hidden' : ''}>
                <p onClick={() => dispatch(detailActions.closeUrlModal())} className="bjmodal-close-button">
                    <X size={24} />
                </p>
                <div className="bj-modal-content-wrap">
                    <p className="bj-modal-title">힐하우스의 유령 모여보기</p>
                    <div className="bj-modal-btns">
                        <BarButton icon={<Link />} text="URL 복사" width="340px" height="42px" />
                        <BarButton
                            onClick={() => dispatch(detailActions.openCreateModal())}
                            icon="https://raw.githubusercontent.com/lse-7660/bokjak-image/18cb6ec19defe09b46ec12917c88c31e962632b7/images/common/bokjak-icon.svg"
                            text="방 만들기"
                            width="340px"
                            height="42px"
                        />
                    </div>
                </div>
            </BokjakUrlModalWrap>
        </DetailModalCom>
    );
};

export default BokjakUrlModal;

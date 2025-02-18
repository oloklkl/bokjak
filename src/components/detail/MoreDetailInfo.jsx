import { CaretDown, CaretUp } from '@phosphor-icons/react';
import { MoreDetailInfoWrap } from './style';
import { useSelector } from 'react-redux';

const MoreDetailInfo = ({ isShow, showMoreInfo }) => {
    const { width } = useSelector((state) => state.windowR);
    return (
        <MoreDetailInfoWrap onClick={showMoreInfo}>
            {isShow ? <span>닫기</span> : <span>더보기</span>}
            {isShow ? <CaretUp /> : <CaretDown />}
        </MoreDetailInfoWrap>
    );
};

export default MoreDetailInfo;

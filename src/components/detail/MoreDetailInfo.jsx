import { CaretDown, CaretUp } from '@phosphor-icons/react';
import { MoreDetailInfoWrap } from './style';

const MoreDetailInfo = ({ isShow, showMoreInfo }) => {
    return (
        <MoreDetailInfoWrap onClick={showMoreInfo}>
            {isShow ? (
                <span>닫기</span>
            ) : (
                <span>더보기</span>
            )}
            {isShow ? <CaretUp /> : <CaretDown />}
        </MoreDetailInfoWrap>
    );
};

export default MoreDetailInfo;

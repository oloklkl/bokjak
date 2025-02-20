import { Link } from 'react-router-dom';
import { BarButton, IconButton } from '../../ui';
import { BookmarkSimple, Heart } from '@phosphor-icons/react';
import { useDispatch, useSelector } from 'react-redux';
import { detailActions } from '../../store/modules/detailSlice';
import styled from 'styled-components';
import { useEffect, useState } from 'react';

const UtilButtonWrapStyle = styled.div`
    &.detailpreview-util-wrap {
        width: 100%;
        display: flex;
        gap: 12px;
    }
`;

const UtilButtonWrap = () => {
    const dispatch = useDispatch();
    const { width } = useSelector((state) => state.windowR);

    return (
        <UtilButtonWrapStyle className="detailpreview-util-wrap">
            {width > 600 && (
                <BarButton text="재생하기" width="240px" height="42px">
                    <Link to="/video" />
                </BarButton>
            )}

            <IconButton className="" icon={<Heart />} text="좋아요" />
            <IconButton className="" icon={<BookmarkSimple />} text="북마크" />
            <IconButton
                onClick={() => dispatch(detailActions.openUrlModal())}
                className=""
                icon="https://raw.githubusercontent.com/lse-7660/bokjak-image/f7683cb4e88d31d422118d70c20dcdccb0ad102e/images/icon/bokjak-icon.svg"
                text="모여보기"
            />
        </UtilButtonWrapStyle>
    );
};

export default UtilButtonWrap;

import {
    Link,
    useNavigate,
    useParams,
} from 'react-router-dom';
import { BarButton, IconButton } from '../../ui';
import {
    BookmarkSimple,
    Heart,
} from '@phosphor-icons/react';
import { useDispatch, useSelector } from 'react-redux';
import { detailActions } from '../../store/modules/detailSlice';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { authActions } from '../../store/modules/authSlice';

const UtilButtonWrapStyle = styled.div`
    &.detailpreview-util-wrap {
        width: 100%;
        display: flex;
        gap: 12px;
    }
`;

const UtilButtonWrap = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { type, id } = useParams();
    const { width } = useSelector((state) => state.windowR);
    const { authed, user } = useSelector(
        (state) => state.authR
    );
    const { currentContent } = useSelector(
        (state) => state.detailR
    );

    const isLiked =
        authed &&
        user?.likedContent?.some(
            (content) => content.id === currentContent.id
        );
    const isBookmarked =
        authed &&
        user?.bookmarkedContent?.some(
            (content) => content.id === currentContent.id
        );

    const onLikeBtnClick = () => {
        if (!authed) {
            navigate('/login');
        } else {
            dispatch(authActions.setLiked(currentContent));
        }
    };
    const onBookmarkBtnClick = () => {
        if (!authed) {
            navigate('/login');
        } else {
            dispatch(
                authActions.setBookmarked(currentContent)
            );
        }
    };

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(user));
    }, [user]);

    return (
        <UtilButtonWrapStyle className="detailpreview-util-wrap">
            {width > 600 && (
                <BarButton
                    text="재생하기"
                    width="240px"
                    height="42px"
                >
                    <Link
                        to={authed ? '/video' : '/login'}
                    />
                </BarButton>
            )}

            <IconButton
                onClick={onLikeBtnClick}
                className=""
                icon={
                    isLiked ? (
                        <Heart weight="fill" />
                    ) : (
                        <Heart />
                    )
                }
                text="좋아요"
            />
            <IconButton
                onClick={onBookmarkBtnClick}
                className=""
                icon={
                    isBookmarked ? (
                        <BookmarkSimple weight="fill" />
                    ) : (
                        <BookmarkSimple />
                    )
                }
                text="북마크"
            />
            <IconButton
                onClick={() =>
                    dispatch(detailActions.openUrlModal())
                }
                className=""
                icon="https://raw.githubusercontent.com/lse-7660/bokjak-image/f7683cb4e88d31d422118d70c20dcdccb0ad102e/images/icon/bokjak-icon.svg"
                text="모여보기"
            />
        </UtilButtonWrapStyle>
    );
};

export default UtilButtonWrap;

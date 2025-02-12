import { BookmarkSimple, Heart, X } from '@phosphor-icons/react';
import { BarButton, IconButton } from '../../ui';
import { DetailPreviewWrap } from './style';
import { useDispatch } from 'react-redux';
import { detailActions } from '../../store/modules/detailSlice';
import { Link } from 'react-router-dom';

const DetailPreview = () => {
    const dispatch = useDispatch();
    return (
        <DetailPreviewWrap className="detail-preview">
            <div className="detailpreview-wrap">
                <IconButton onClick={() => dispatch(detailActions.closeDetailModal())} className="b30" icon={<X />} />
                <div className="detailpreview-util-wrap">
                    <BarButton
                        onClick={() => dispatch(detailActions.closeDetailModal())}
                        text="재생하기"
                        width="240px"
                        height="42px"
                    >
                        <Link to="/video" />
                    </BarButton>
                    <IconButton className="b30" icon={<Heart />} text="좋아요" />
                    <IconButton className="b30" icon={<BookmarkSimple />} text="북마크" />
                    <IconButton
                        onClick={() => dispatch(detailActions.openUrlModal())}
                        className="b30"
                        icon="https://raw.githubusercontent.com/lse-7660/bokjak-image/f7683cb4e88d31d422118d70c20dcdccb0ad102e/images/icon/bokjak-icon.svg"
                        text="모여보기"
                    />
                </div>
            </div>
        </DetailPreviewWrap>
    );
};

export default DetailPreview;

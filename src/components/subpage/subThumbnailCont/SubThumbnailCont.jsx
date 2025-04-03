import { ThumbnailSection } from './style';
import SubThumbnailContList from './SubThumbnailContList';

const SubThumbnailCont = ({
    title,
    contents,
    noContentText,
}) => {
    return (
        <ThumbnailSection>
            <SubThumbnailContList
                title={title}
                contents={contents}
                noContentText={noContentText}
            />
        </ThumbnailSection>
    );
};

export default SubThumbnailCont;

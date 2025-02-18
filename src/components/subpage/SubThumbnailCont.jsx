import { ThumbnailSection } from './style';
import SubThumbnailContList from './SubThumbnailContList';

const SubThumbnailCont = ({ title, contents }) => {
    return (
        <ThumbnailSection>
            <SubThumbnailContList title={title} contents={contents} />
        </ThumbnailSection>
    );
};

export default SubThumbnailCont;

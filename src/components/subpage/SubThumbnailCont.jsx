import { ThumbnailSection } from './style';
import ThumbnailContList from './SubThumbnailContList';

const SubThumbnailCont = ({ title, contents }) => {
    return (
        <ThumbnailSection>
            <ThumbnailContList title={title} contents={contents} />
        </ThumbnailSection>
    );
};

export default SubThumbnailCont;

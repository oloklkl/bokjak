import ContentFlipCard from '../../ui/ContentFlipCard';
import { FilmoWrap } from './style';

const Filmo = () => {
    return (
        <FilmoWrap>
            <h2>Actor Name</h2>
            <div className="filmo-card-wrap">
                <ContentFlipCard />
                <ContentFlipCard />
                <ContentFlipCard />
                <ContentFlipCard />
                <ContentFlipCard />
                <ContentFlipCard />
                <ContentFlipCard />
            </div>
        </FilmoWrap>
    );
};

export default Filmo;

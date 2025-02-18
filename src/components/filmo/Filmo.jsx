import { useSelector } from 'react-redux';
import ContentFlipCard from '../../ui/ContentFlipCard';
import { FilmoWrap } from './style';

const Filmo = () => {
    const { currentPerson, filmoData } = useSelector((state) => state.filmoR);
    if (currentPerson !== null)
        return (
            <div className="inner">
                <FilmoWrap>
                    <h2>{currentPerson[0] ? currentPerson[0].name : null}</h2>
                    <div className="filmo-card-wrap">
                        {filmoData.map((item) => (
                            <ContentFlipCard key={item.id} content={item} />
                        ))}
                    </div>
                </FilmoWrap>
            </div>
        );
};

export default Filmo;

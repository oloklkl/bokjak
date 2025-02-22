import IntroList from './IntroList';
import { IntroSection } from './style';

const Intro = () => {
    return (
        <IntroSection>
            <div className="inner">
                <IntroList />
            </div>
        </IntroSection>
    );
};

export default Intro;

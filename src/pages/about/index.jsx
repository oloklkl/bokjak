import BottomNavigation from '../../common/bottomnavigation';
import AboutPage from '../../components/about/AboutPage';
import { AboutWrap } from './style';

const About = () => {
    return (
        <>
            <AboutWrap className='aboutWrap'>
                <AboutPage />
            </AboutWrap>
            <BottomNavigation />
        </>
    );
};

export default About;

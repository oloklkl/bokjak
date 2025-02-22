import { Suspense } from 'react';
import IntroList from './introList';
import { IntroSection } from './style';

const Intro = () => {
    const IntroList = React.lazy(() =>
        import('./introList')
    );
    return (
        <IntroSection>
            <div className="inner">
                <Suspense fallback={<div>Loading...</div>}>
                    <IntroList />
                </Suspense>
            </div>
        </IntroSection>
    );
};

export default Intro;

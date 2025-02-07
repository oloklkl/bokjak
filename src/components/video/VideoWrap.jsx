import { useSelector } from 'react-redux';
import BokjakChat from './BokjakChat';
import VideoPlayer from './VideoPlayer';

const VideoWrap = () => {
    const { isChatOpen } = useSelector((state) => state.videoR);
    return (
        <>
            <VideoPlayer />
            {isChatOpen && <BokjakChat />}
        </>
    );
};

export default VideoWrap;

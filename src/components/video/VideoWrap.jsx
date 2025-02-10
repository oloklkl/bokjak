import { useSelector } from 'react-redux';
import BokjakChat from './BokjakChat';
import VideoPlayer from './VideoPlayer';
import { VideoWrapCom } from './style';

const VideoWrap = (props) => {
    const { isChatOpen } = useSelector((state) => state.videoR);
    return (
        <VideoWrapCom {...props}>
            <VideoPlayer />
            <BokjakChat />
        </VideoWrapCom>
    );
};

export default VideoWrap;

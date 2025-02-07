import { VideoPlayerWrap } from './style';

const VideoPlayer = () => {
    return (
        <VideoPlayerWrap>
            <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/T_QWLEwN3rE?rel=0&amp;controls=0&amp;showinfo=0"
                // frameborder="0"
                allow="autoplay; encrypted-media"
                allowfullscreen
            ></iframe>
        </VideoPlayerWrap>
    );
};

export default VideoPlayer;

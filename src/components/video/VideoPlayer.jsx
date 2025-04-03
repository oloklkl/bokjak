import {
    CardsThree,
    CaretLeft,
    CaretRight,
    ChatCenteredDots,
    Gear,
    Pause,
    Play,
    SkipForward,
    SpeakerSimpleHigh,
} from '@phosphor-icons/react';
import { ProgressBar, VideoPlayerWrap } from './style';
import { useDispatch, useSelector } from 'react-redux';
import { videoActions } from '../../store/modules/videoSlice';
import { useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import ReactPlayer from 'react-player';

const optionList = [
    {
        id: 1,
        depth1: '화질 설정',
        depth2: ['자동', '1080p', '720p', '720p'],
    },
    {
        id: 2,
        depth1: '재생 속도',
        depth2: [
            'x 0.5',
            'x 1.0',
            'x 1.2',
            'x 1.5',
            'x 2.0',
        ],
    },
    {
        id: 3,
        depth1: '오프닝/엔딩 자동스킵',
        depth2: ['켜기', '끄기'],
    },
    {
        id: 4,
        depth1: '에피소드 자동재생',
        depth2: ['켜기', '끄기'],
    },
];

const VideoPlayer = () => {
    const navigate = useNavigate();
    const { isOptionOpen } = useSelector(
        (state) => state.videoR
    );
    const { currentContent } = useSelector(
        (state) => state.detailR
    );
    const { width } = useSelector((state) => state.windowR);
    const dispatch = useDispatch();
    const [selectedOptionId, setSelectedOptionId] =
        useState(null);

    /* 영상 재생 버튼 */
    const [isPlaying, setIsPlaying] = useState(true);
    const handlePlaying = () => {
        setIsPlaying(!isPlaying);
    };

    /*영상 재생 바 */
    const [played, setPlayed] = useState(0);
    const playerRef = useRef(null);
    const progressRef = useRef(played);

    useEffect(() => {
        const updateProgress = () => {
            if (playerRef.current) {
                const newPlayed =
                    playerRef.current.getCurrentTime() /
                    playerRef.current.getDuration();
                if (!isNaN(newPlayed)) {
                    progressRef.current = newPlayed;
                    setPlayed(newPlayed);
                }
            }
            requestAnimationFrame(updateProgress);
        };
        updateProgress();
        return () => cancelAnimationFrame(updateProgress);
    }, []);

    const handleSeek = (e) => {
        const newPlayed = parseFloat(e.target.value);
        setPlayed(newPlayed);
        playerRef.current.seekTo(newPlayed, 'fraction');
    };
    /*-----------------------------------------------------------*/

    /* 영상 재생 시간 */
    const [duration, setDuration] = useState(0); // 전체 길이
    const [playedSeconds, setPlayedSeconds] = useState(0); // 현재 재생 시간

    useEffect(() => {
        const updateProgress = () => {
            if (playerRef.current) {
                const currentTime =
                    playerRef.current.getCurrentTime();
                const totalDuration =
                    playerRef.current.getDuration();
                if (
                    !isNaN(currentTime) &&
                    !isNaN(totalDuration)
                ) {
                    setPlayedSeconds(currentTime);
                    setDuration(totalDuration);
                    setPlayed(currentTime / totalDuration);
                }
            }
            requestAnimationFrame(updateProgress);
        };
        updateProgress();
        return () => cancelAnimationFrame(updateProgress);
    }, []);

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
    };
    /*-----------------------------------------------------------*/

    /* 되감기, 빨리 감기 */
    const handleRewind = () => {
        if (playerRef.current) {
            const currentTime =
                playerRef.current.getCurrentTime();
            playerRef.current.seekTo(
                Math.max(currentTime - 10, 0),
                'seconds'
            );
        }
    };

    const handleFastForward = () => {
        if (playerRef.current) {
            const currentTime =
                playerRef.current.getCurrentTime();
            const totalDuration =
                playerRef.current.getDuration();
            playerRef.current.seekTo(
                Math.min(currentTime + 10, totalDuration),
                'seconds'
            );
        }
    };
    /*-----------------------------------------------------------*/

    const exitVideo = () => {
        navigate(-1);
    };

    const handleOptionClick = (id) => {
        setSelectedOptionId(
            id === selectedOptionId ? null : id
        );
    };

    return (
        <VideoPlayerWrap>
            <div className="video-util-wrap">
                <div className="video-util-top">
                    <CaretLeft
                        size={30}
                        onClick={exitVideo}
                    />
                    <div className="video-option-dropdown">
                        <Gear
                            size={30}
                            onClick={() =>
                                dispatch(
                                    videoActions.showOptions()
                                )
                            }
                        />
                        {isOptionOpen && (
                            <ul className="video-option-list">
                                {selectedOptionId ===
                                null ? (
                                    optionList.map(
                                        (item) => (
                                            <li
                                                key={
                                                    item.id
                                                }
                                                className="video-option-item"
                                            >
                                                <div
                                                    className="option-depth1"
                                                    onClick={() =>
                                                        handleOptionClick(
                                                            item.id
                                                        )
                                                    }
                                                >
                                                    <span>
                                                        {
                                                            item.depth1
                                                        }
                                                    </span>
                                                    <CaretRight />
                                                </div>
                                            </li>
                                        )
                                    )
                                ) : (
                                    <li className="video-option-item">
                                        <div
                                            className="option-main"
                                            onClick={() =>
                                                setSelectedOptionId(
                                                    null
                                                )
                                            }
                                        >
                                            <CaretLeft />
                                        </div>
                                        <ul className="depth2-list">
                                            {optionList
                                                .find(
                                                    (
                                                        item
                                                    ) =>
                                                        item.id ===
                                                        selectedOptionId
                                                )
                                                ?.depth2.map(
                                                    (
                                                        depth2Item,
                                                        index
                                                    ) => (
                                                        <li
                                                            key={
                                                                index
                                                            }
                                                            className="depth2-item"
                                                        >
                                                            {
                                                                depth2Item
                                                            }
                                                        </li>
                                                    )
                                                )}
                                        </ul>
                                    </li>
                                )}
                            </ul>
                        )}
                    </div>
                </div>
                <div>
                    <ProgressBar className="video-play-bar">
                        <input
                            type="range"
                            min="0"
                            max="1"
                            step="any"
                            value={played}
                            onChange={handleSeek}
                            style={{
                                '--progress': `${
                                    played * 100
                                }%`,
                            }}
                        ></input>
                    </ProgressBar>
                    <div className="video-controls-wrap">
                        <div className="video-controls video-controls-left">
                            {width > 600 && (
                                <>
                                    <img
                                        src="https://raw.githubusercontent.com/lse-7660/bokjak-image/b21d3ce5129ec91bdaa968b80212b483b21de0ed/images/icon/rewind.svg"
                                        alt="되감기"
                                        className="pointer"
                                        onClick={
                                            handleRewind
                                        }
                                    />
                                    {isPlaying ? (
                                        <Pause
                                            weight="fill"
                                            size={30}
                                            className="pointer"
                                            onClick={
                                                handlePlaying
                                            }
                                        />
                                    ) : (
                                        <Play
                                            weight="fill"
                                            size={30}
                                            className="pointer"
                                            onClick={
                                                handlePlaying
                                            }
                                        />
                                    )}

                                    <img
                                        src="https://raw.githubusercontent.com/lse-7660/bokjak-image/b21d3ce5129ec91bdaa968b80212b483b21de0ed/images/icon/fastfoword.svg"
                                        alt="빨리감기"
                                        className="pointer"
                                        onClick={
                                            handleFastForward
                                        }
                                    />
                                    <SpeakerSimpleHigh
                                        size={30}
                                        className="pointer"
                                    />
                                </>
                            )}

                            <span className="video-play-time">
                                {formatTime(playedSeconds)}{' '}
                                / {formatTime(duration)}
                            </span>
                        </div>
                        <div className="video-controls video-controls-right">
                            <SkipForward
                                size={30}
                                className="pointer"
                            />
                            <CardsThree
                                size={30}
                                className="pointer"
                            />
                            <ChatCenteredDots
                                size={30}
                                onClick={() =>
                                    dispatch(
                                        videoActions.showChatWindow()
                                    )
                                }
                                className="pointer"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="video-player">
                <ReactPlayer
                    ref={playerRef}
                    url={
                        currentContent.videos.results[0]
                            ? `https://www.youtube.com/watch?v=${currentContent.videos.results[0].key}`
                            : `https://www.youtube.com/watch?v=5-oH6keT1iM`
                    }
                    playing={isPlaying}
                    muted={true}
                    controls={false}
                    width="100%"
                    height="100%"
                />
            </div>
        </VideoPlayerWrap>
    );
};

export default VideoPlayer;

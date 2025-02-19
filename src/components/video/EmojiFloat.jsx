import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { font } from '../../styled/theme';
import { chatActions } from '../../store/modules/chatSlice';

const EmojiFloatWrap = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;

    p {
        position: absolute;
        bottom: 0;
        right: 0;
        z-index: 0;
        opacity: 0;

        padding: 70px 24px;

        animation: emojisUp 1s linear forwards;
    }

    @keyframes emojisUp {
        0% {
            transform: translateY(0);
            opacity: 1;
        }
        25% {
            transform: translateY(-10vh);
        }
        50% {
            transform: translateY(-20vh);
        }
        75% {
            transform: translateY(-30vh);
        }
        100% {
            transform: translateY(-40vh);
            opacity: 0;
        }
    }
`;

const EmojiFloat = () => {
    const dispatch = useDispatch();
    const { emojiArray } = useSelector(
        (state) => state.chatR
    );
    return (
        <EmojiFloatWrap className="emoji-float">
            {emojiArray.map((item) => (
                <p
                    key={item.id}
                    style={{
                        right: `${item.left}px`,
                        animationDelay: `${item.delay}s`,
                        animationDuration: `${item.duration}s`,
                    }}
                    onAnimationEnd={() => {
                        setTimeout(() => {
                            dispatch(
                                chatActions.removeEmoji(
                                    item.id
                                )
                            );
                        }, 50);
                    }}
                >
                    {item.emoji}
                </p>
            ))}
        </EmojiFloatWrap>
    );
};

export default EmojiFloat;

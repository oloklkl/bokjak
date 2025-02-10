import EmojiPicker from 'emoji-picker-react';
import { ChatFormWrap } from './style';
// import { useDispatch } from 'react-redux';
// import { chatActions } from '../../store/modules/chatSlice';

const ChatForm = () => {
    // const dispatch = useDispatch();
    return (
        <ChatFormWrap>
            <EmojiPicker
                className="emoji-picker"
                // onEmojiClick={() => dispatch(chatActions.setEmoji)}
                width="100%"
                suggestedEmojisMode="recent"
                theme="dark"
                // open={false}
                reactionsDefaultOpen={true}
                style={{ backgroundColor: '#2d2d2d' }}
            />
            <input className="chat-input-bar" type="text" placeholder="채팅 보내기" />
        </ChatFormWrap>
    );
};

export default ChatForm;

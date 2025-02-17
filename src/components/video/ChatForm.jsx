import EmojiPicker from 'emoji-picker-react';
import { ChatFormWrap } from './style';
import { useDispatch } from 'react-redux';
import { chatActions } from '../../store/modules/chatSlice';
import { useState } from 'react';

const ChatForm = () => {
    const dispatch = useDispatch();
    const [text, setText] = useState({
        username: 'user1',
        reply: '',
    });

    const changeInput = (e) => {
        const { value, name } = e.target;
        setText({ ...text, [name]: value });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        if (!text.reply.trim()) return;
        dispatch(chatActions.addChat(text));
        setText({ ...text, reply: '' });
    };

    return (
        <ChatFormWrap onSubmit={onSubmit}>
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
            <input
                className="chat-input-bar"
                value={text.reply}
                onChange={changeInput}
                name="reply"
                placeholder="채팅 보내기"
            />
            <button
                type="submit"
                style={{ display: 'none' }}
            ></button>
        </ChatFormWrap>
    );
};

export default ChatForm;

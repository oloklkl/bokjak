import EmojiPicker from 'emoji-picker-react';
import { ChatFormWrap } from './style';
import { useDispatch, useSelector } from 'react-redux';
import { chatActions } from '../../store/modules/chatSlice';
import { useState } from 'react';
import { ArrowUp, CaretUp, Smiley } from '@phosphor-icons/react';

const ChatForm = () => {
    const dispatch = useDispatch();
    const [text, setText] = useState({
        username: 'user1',
        reply: '',
    });
    const { isEmojiOpen } = useSelector((state) => state.chatR);

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
        <ChatFormWrap onSubmit={onSubmit} className="chatform-wrap">
            <EmojiPicker
                className="emoji-picker"
                open={isEmojiOpen}
                onEmojiClick={() => dispatch(chatActions.setEmoji())}
                width="80%"
                suggestedEmojisMode="recent"
                theme="dark"
                style={{ backgroundColor: '#2d2d2d' }}
            />
            <Smiley size={24} onClick={() => dispatch(chatActions.toggleEmoji())} />
            <input
                className="chat-input-bar"
                value={text.reply}
                onChange={changeInput}
                name="reply"
                placeholder="채팅 보내기"
            />
            <button className="chatform-submit-btn" type="submit">
                <span className="hide">채팅 보내기</span>
                <ArrowUp color="white" size={20} />
            </button>
        </ChatFormWrap>
    );
};

export default ChatForm;

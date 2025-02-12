import { ChatItemWrap } from './style';

const ChatItem = ({ item }) => {
    return (
        <ChatItemWrap>
            <span className="chat-username">{item.username}</span>
            <span className="chat-text">{item.text}</span>
        </ChatItemWrap>
    );
};

export default ChatItem;

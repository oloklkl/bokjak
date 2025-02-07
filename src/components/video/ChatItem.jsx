import { ChatItemWrap } from './style';

const ChatItem = (props) => {
    return (
        <ChatItemWrap {...props}>
            <span>{props.username}</span>
            <span>{props.text}</span>
        </ChatItemWrap>
    );
};

export default ChatItem;

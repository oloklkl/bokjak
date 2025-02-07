import { SignOut } from '@phosphor-icons/react';
import { BokjakChatWrap } from './style';
import chatData from '../../assets/api/chatData';
import ChatItem from './ChatItem';

const BokjakChat = () => {
    return (
        <BokjakChatWrap>
            <SignOut size={24} />
            <div className="chat-content-wrap">
                {chatData.map((item) => (
                    <ChatItem key={item.id} item={item} />
                ))}
            </div>
        </BokjakChatWrap>
    );
};

export default BokjakChat;

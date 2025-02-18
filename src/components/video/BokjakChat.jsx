import { SignOut, X } from '@phosphor-icons/react';
import { BokjakChatWrap } from './style';
import ChatItem from './ChatItem';
import ChatForm from './ChatForm';
import { useDispatch, useSelector } from 'react-redux';
import { videoActions } from '../../store/modules/videoSlice';

const BokjakChat = () => {
    const dispatch = useDispatch();
    const { chatData } = useSelector((state) => state.chatR);
    const { isChatOpen } = useSelector((state) => state.videoR);
    const { width } = useSelector((state) => state.windowR);

    return (
        <BokjakChatWrap className={`chat-window ${isChatOpen ? 'chat-window-active' : ''}`}>
            <p className="chat-exit" onClick={() => dispatch(videoActions.showChatWindow())}>
                {width > 1024 ? <SignOut size={30} /> : ''}
            </p>
            <div className="chat-content-wrap">
                {chatData.map((item) => (
                    <ChatItem key={item.id} item={item} />
                ))}
            </div>
            <ChatForm />
        </BokjakChatWrap>
    );
};

export default BokjakChat;

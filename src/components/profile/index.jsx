import { ChatsCircle, Gear, MoneyWavy } from '@phosphor-icons/react';
import { IconButton } from '../../ui';
import { Section, SubscriptionInfo, UserActions, UserImage, UserInfo, UserProfile } from './style';
import { Link } from 'react-router-dom';

const ProfileSection = () => {
    return (
        <Section>
            <UserProfile>
                <UserImage>
                    <img
                        src='https://github.com/lse-7660/bokjak-image/blob/main/images/userImg/img1.png?raw=true'
                        alt='userImg'
                    />
                </UserImage>
                <UserInfo>
                    <h2>복작</h2>
                    <SubscriptionInfo>
                        <IconButton className='gray40 none' icon={<MoneyWavy size={24} />} text='BellSimple' />
                        <span>나의 이용권</span>
                        <span>프리미엄</span>
                    </SubscriptionInfo>
                </UserInfo>
            </UserProfile>

            <UserActions>
                <Link>
                    <IconButton className='gray40 none' icon={<Gear size={24} />} text='BellSimple' />
                    <span>회원정보수정</span>
                </Link>
                <Link>
                    <IconButton className='gray40 none' icon={<ChatsCircle size={24} />} text='BellSimple' />
                    <span>문의내역</span>
                </Link>
            </UserActions>
        </Section>
    );
};

export default ProfileSection;

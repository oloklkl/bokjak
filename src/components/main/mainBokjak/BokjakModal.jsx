import { BellSimple, Link, X } from '@phosphor-icons/react';
import { BarButton, IconButton } from '../../../ui';
import Dimmed from '../../../ui/Dimmed';
import BookMarkLabel from '../../../ui/BookMarkLabel';
import { BokjakDetailCont, BokjakModalCont } from './style';
import genres from '../../../assets/api/genreData';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../../../store/modules/authSlice';
import { useNavigate } from 'react-router-dom';

const BokjakModal = ({ content, closeModal }) => {
    const [isTimeToEnter, setIsTimeToEnter] =
        useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { authed, user } = useSelector(
        (state) => state.authR
    );

    const isBokjakAlarm =
        authed &&
        user?.bokjakAlarm?.some(
            (item) => item.id === content.id
        );

    const bgurl = `https://image.tmdb.org/t/p/original`;
    const title = content.title;
    const bokjakTitle = content.bokjak_title;
    const enterTime = content.bokjak_time;
    const people = content.expected_participants;
    const genreNames =
        content.genre_ids
            ?.map((id) => {
                const genre = genres.find(
                    (genre) => genre.id === id
                );
                return genre ? genre.name : null;
            })
            .filter(Boolean)
            .join(' · ') || '장르 없음';

    const formatEnterTime = (time) => {
        const date = new Date(time);
        const month = String(date.getMonth() + 1).padStart(
            2,
            '0'
        );
        const day = String(date.getDate()).padStart(2, '0');
        const hour = String(date.getHours()).padStart(
            2,
            '0'
        );
        const minute = String(date.getMinutes()).padStart(
            2,
            '0'
        );

        return `${month}월 ${day}일  ${hour}:${minute} 입장`;
    };

    useEffect(() => {
        const checkTime = () => {
            const currentTime = new Date();
            const targetTime = new Date(enterTime);

            if (currentTime >= targetTime) {
                setIsTimeToEnter(true);
            } else {
                setIsTimeToEnter(false);
            }
        };

        const intervalId = setInterval(checkTime, 1000);

        return () => clearInterval(intervalId);
    }, [enterTime]);

    return (
        <BokjakModalCont>
            <Dimmed zindex={11} className="dimmed-active">
                <BokjakDetailCont>
                    <div className="detailTop">
                        <div className="titleTxt">
                            <h2>{title}</h2>
                            <div className="subTitle">
                                <h3>{bokjakTitle}</h3>
                                <em>|</em>
                                <h3>
                                    {people}명 참여 예정
                                </h3>
                            </div>
                        </div>
                        <IconButton
                            className="none"
                            icon={<X size={24} />}
                            text="close"
                            onClick={closeModal}
                        />
                    </div>
                    <div className="detailMid">
                        <div className="imgBox">
                            <img
                                src={`${bgurl}${content.poster_path}`}
                                alt={title}
                            />
                        </div>
                        <div className="textarea">
                            <BookMarkLabel
                                text="더빙"
                                className="modal"
                            />
                            <h2>{title}</h2>
                            <div className="category">
                                <span>{genreNames}</span>
                            </div>
                            <span className="enterTime">
                                {formatEnterTime(enterTime)}
                            </span>
                        </div>
                    </div>
                    <div className="detailBottom">
                        <BarButton
                            className="share modalBtn"
                            icon={<Link size={24} />}
                            text="공유"
                            width="110px"
                            height="42px"
                        />
                        <BarButton
                            onClick={(e) => {
                                e.preventDefault();
                                if (authed) {
                                    dispatch(
                                        authActions.setBokjakAlarm(
                                            content
                                        )
                                    );
                                } else {
                                    navigate('/login');
                                }
                            }}
                            className="modalBtn"
                            icon={
                                !isTimeToEnter &&
                                isBokjakAlarm ? (
                                    <BellSimple
                                        size={24}
                                        weight="fill"
                                    />
                                ) : (
                                    <BellSimple size={24} />
                                )
                            }
                            text={
                                isTimeToEnter
                                    ? '입장하기'
                                    : '알림받기'
                            }
                            width="230px"
                            height="42px"
                        />
                    </div>
                </BokjakDetailCont>
            </Dimmed>
        </BokjakModalCont>
    );
};

export default BokjakModal;

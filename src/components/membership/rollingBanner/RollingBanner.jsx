import { useEffect, useState, useCallback } from 'react';
import { RollingBannerWrapper, RowLeft, RowRight } from './style';

const RollingBanner = ({ movies, tvShows }) => {
    const [rows, setRows] = useState([[], [], []]);
    const [currentLogo, setCurrentLogo] = useState(null);

    const logos = {
        pc: {
            url: 'https://github.com/lse-7660/bokjak-image/blob/main/images/membership/pc-logo.png?raw=true',
        },
        tablet: {
            url: 'https://github.com/lse-7660/bokjak-image/blob/main/images/membership/tablet-logo.png?raw=true',
        },
        mobile: {
            url: 'https://github.com/lse-7660/bokjak-image/blob/main/images/membership/mobile-logo.png?raw=true',
        },
    };

    // ✅ 디바이스에 따라 로고 선택
    useEffect(() => {
        const width = window.innerWidth;
        if (width <= 768) {
            setCurrentLogo(logos.mobile);
        } else if (width <= 1024) {
            setCurrentLogo(logos.tablet);
        } else {
            setCurrentLogo(logos.pc);
        }
    }, []);

    // ✅ 로고 삽입 로직 (로고에는 title 없음)
    const insertLogos = useCallback((images, logo) => {
        const result = [...images];
        const numberOfLogos = 2;
        const logoIndexes = [];

        while (logoIndexes.length < numberOfLogos) {
            const index = Math.floor(Math.random() * result.length);
            if (logoIndexes.every((i) => Math.abs(i - index) > 3)) {
                logoIndexes.push(index);
            }
        }

        logoIndexes.sort((a, b) => b - a);
        logoIndexes.forEach((index) => {
            result.splice(index, 0, logo);
        });

        return result;
    }, []);

    useEffect(() => {
        if (!movies?.length || !tvShows?.length || !currentLogo) return;

        const movieImgs = movies
            .filter((item) => item.backdrop_path)
            .map((item) => ({
                url: `https://image.tmdb.org/t/p/w780${item.backdrop_path}`,
                title: item.title || item.name || '',
            }));

        const tvImgs = tvShows
            .filter((item) => item.backdrop_path)
            .map((item) => ({
                url: `https://image.tmdb.org/t/p/w780${item.backdrop_path}`,
                title: item.title || item.name || '',
            }));

        const allImages = [...new Set([...movieImgs, ...tvImgs].map((img) => img.url))].map((url) => {
            const found = [...movieImgs, ...tvImgs].find((img) => img.url === url);
            return found || { url };
        });

        if (allImages.length >= 30) {
            const row1 = insertLogos(allImages.slice(0, 10), currentLogo);
            const row2 = insertLogos(allImages.slice(10, 20), currentLogo);
            const row3 = insertLogos(allImages.slice(20, 30), currentLogo);
            setRows([row1, row2, row3]);
        }
    }, [movies, tvShows, insertLogos, currentLogo]);

    const renderImage = (item, i, prefix) => (
        <img
            key={`${prefix}-${i}`}
            src={item.url}
            alt={item.title || 'bokjak logo'}
            {...(item.title ? { title: item.title } : {})} // 콘텐츠일 때만 title 적용
        />
    );

    return (
        <RollingBannerWrapper>
            <RowLeft>{[...rows[0], ...rows[0]].map((item, i) => renderImage(item, i, 'row1'))}</RowLeft>
            <RowRight>{[...rows[1], ...rows[1], ...rows[1]].map((item, i) => renderImage(item, i, 'row2'))}</RowRight>
            <RowLeft>{[...rows[2], ...rows[2]].map((item, i) => renderImage(item, i, 'row3'))}</RowLeft>
        </RollingBannerWrapper>
    );
};

export default RollingBanner;

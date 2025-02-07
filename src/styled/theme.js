export const theme = {
    colors: {
        primary: {
            default: '#8000ff',
            5: '#fdfbff',
            10: '#f7efff',
            20: '#eddbff',
            30: '#dfbfff',
            40: '#cd9bff',
            50: '#b770ff',
            60: '#9d3cff',
            70: '#8000ff',
            80: '#47008e',
            90: '#25004a',
            100: '#1a0033',
        },
        gray: {
            0: '#fff',
            10: '#f8f8f8',
            20: '#e4e4e4',
            30: '#c6c6c6',
            40: '#8e8e8e',
            50: '#717171',
            60: '#555555',
            70: '#2d2d2d',
            80: '#1d1d1d',
            90: '#111',
            100: '#000',
        },
    },
    fontSize: {
        display: {
            lg: '66px',
            md: '50px',
            sm: '40px',
        },
        heading: {
            lg: '50px',
            md: '40px',
            sm: '32px',
            xs: '24px',
        },
        title: {
            xxlg: '32px',
            xlg: '24px',
            lg: '21px',
            md: '19px',
        },
        body: {
            lg: '19px',
            md: '17px',     
            sm: '15px',
            xsm: '13px',
        },
        detail: {
            lg: '17px',
            md: '15px',
            sm: '13px',
        },
        label: {
            lg: '19px',
            md: '17px',
            sm: '15px',
            xsm: '10px',
        },
    },
};

// 색상
export const color = (category, variant) => {
    return ({ theme }) => theme.colors[category][variant];
};

// 폰트 사이즈
export const font = (category, size) => {
    return ({ theme }) => theme.fontSize[category][size];
};

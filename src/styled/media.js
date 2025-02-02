const breakpoints = {
    mobile: '600px',
    tablet: '1024px',
};

export const media = {
    mobile: `@media screen and (max-width: ${breakpoints.mobile})`,
    tablet: `@media screen and (max-width: ${breakpoints.tablet})`,
    desktop: `@media screen and (min-width: ${breakpoints.tablet})`,
};

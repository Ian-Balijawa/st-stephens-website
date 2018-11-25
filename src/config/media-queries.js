import facepaint from 'facepaint';

const breakpoints = [576, 768, 992, 1200];

const mediaQueries = facepaint(
    breakpoints.map(bp => `@media (min-width: ${bp}px)`)
)

export {breakpoints, mediaQueries};
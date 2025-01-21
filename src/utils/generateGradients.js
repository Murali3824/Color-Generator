import { getDarkerShade, getLighterShade } from "./colorUtils";

export const generateGradients = (baseColor) => {
    const lighter = getLighterShade(baseColor, 40);
    const darker = getDarkerShade(baseColor, 20);
    const middle = baseColor;
    const superLight = getLighterShade(baseColor, 80);
    const superDark = getDarkerShade(baseColor, 60);

    return [
        {
            name: 'Double Radial',
            css: `radial-gradient(circle at top left, ${lighter}, transparent), radial-gradient(circle at bottom right, ${darker}, transparent)`
        },
        {
            name: 'Faded Corners',
            css: `radial-gradient(circle at top left, ${lighter}, transparent), radial-gradient(circle at bottom right, ${darker}, transparent)`
        },
        {
            name: 'Linear Right',
            css: `linear-gradient(to right, ${darker}, ${lighter})`
        },
        {
            name: 'Linear Bottom',
            css: `linear-gradient(to bottom, ${darker}, ${lighter})`
        },
        {
            name: 'Diagonal',
            css: `linear-gradient(45deg, ${darker}, ${middle}, ${lighter})`
        },
        {
            name: 'Diagonal Reverse',
            css: `linear-gradient(135deg, ${lighter}, ${middle}, ${darker})`
        },
        {
            name: 'Three-Tone',
            css: `linear-gradient(to right, ${superDark}, ${middle}, ${superLight})`
        },
        {
            name: 'Diagonal Reverse',
            css: `linear-gradient(135deg, ${lighter}, ${middle}, ${darker})`
        },
        {
            name: 'Layered',
            css: `linear-gradient(to right, ${superDark}, transparent), linear-gradient(to left, ${superLight}, transparent), ${middle}`
        },
        {
            name: 'Conic',
            css: `conic-gradient(from 0deg, ${darker}, ${lighter}, ${darker})`
        },
        {
            name: 'Angular Gradient',
            css: `conic-gradient(from 90deg, ${superLight}, ${lighter}, ${middle}, ${darker}, ${superDark})`
        },
        {
            name: 'Split Mirror',
            css: `linear-gradient(to bottom, ${darker} 50%, ${lighter} 50%)`
        },
        {
            name: 'Ripple Effect',
            css: `radial-gradient(circle, ${lighter}, ${middle}, ${darker})`
        },
        {
            name: 'Symmetric Horizontal',
            css: `linear-gradient(to right, ${darker}, ${middle}, ${lighter}, ${middle}, ${darker})`
        },
        {
            name: 'Symmetric Vertical',
            css: `linear-gradient(to bottom, ${darker}, ${middle}, ${lighter}, ${middle}, ${darker})`
        },
        {
            name: 'Repeating Linear',
            css: `repeating-linear-gradient(45deg, ${darker}, ${darker} 20px, ${lighter} 20px, ${lighter} 40px)`
        },
        {
            name: 'Checkerboard',
            css: `repeating-linear-gradient(45deg, ${lighter}, ${lighter} 25px, ${darker} 25px, ${darker} 50px)`
        },
        {
            name: 'Horizontal Stripes',
            css: `repeating-linear-gradient(to bottom, ${lighter}, ${lighter} 10px, ${darker} 10px, ${darker} 20px)`
        },
        {
            name: 'Vertical Stripes',
            css: `repeating-linear-gradient(to right, ${lighter}, ${lighter} 10px, ${darker} 10px, ${darker} 20px)`
        },
        
    ].map(gradient => ({
        ...gradient,
        style: { background: gradient.css }
    }));
};

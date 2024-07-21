import { css } from '@emotion/react'
import { isMobile } from 'react-device-detect'

const spacing = isMobile ? 8 : 7
const getSpacing = (multiplier = 1) => spacing * multiplier + 'px'
const fontFamily = css`
  font-family: Söhne Test;
`

export const theme = {
  main: {
    background: '#F4F4F4',

    paper: '#FFFFFF',
    paper1: '#FFFFFF',

    mainTextColor: '#000000',
    secondaryTextColor: '#000000',
    tertiaryTextColor: '#636363',
    posterNameColor: '#000000',
    linkColor: '#000000',

    primaryButtonColor: '#000000',
    primaryButtonColorDisabled: '#FFFFFF',
    mainTextColorDisabled: '#000000'
  },
  inverted: {
    background: '#000000',

    paper: '#000000',
    paper1: '#000000',

    mainTextColor: '#FFFFFF',
    secondaryTextColor: '#FFFFFF',
    tertiaryTextColor: '#ECECEC',
    posterNameColor: '#FFFFFF',
    linkColor: '#FFFFFF',

    primaryButtonColor: '#FFFFFF',
    primaryButtonColorDisabled: '#FFFFFF',
    mainTextColorDisabled: '#FFFFFF'
  },
  spacing: getSpacing,
  typography: {
    fontWeightLight: css`
      font-weight: 300;
    `,
    fontWeightRegular: css`
      font-weight: 400;
    `,
    fontWeightMedium: css`
      font-weight: 500;
    `,
    fontWeightSemiBold: css`
      font-weight: 600;
    `,
    fontWeightBold: css`
      font-weight: 700;
    `,
    fontWeightExtraBold: css`
      font-weight: 800;
    `,
    h1: css`
      ${fontFamily};
      font-size: clamp(
        ${getSpacing(5)},
        ${getSpacing(2.25)} + 3.5vw,
        ${getSpacing(7)}
      );
      font-weight: 600;
      line-height: 1.1142857142857143;
      letter-spacing: -0.2;
    `,
    h2: css`
      ${fontFamily};
      font-size: clamp(
        ${getSpacing(3)},
        ${getSpacing(2)} + 1.4286vw,
        ${getSpacing(3.5)}
      );
      font-weight: 600;
      line-height: 1.2222222222222223;
      letter-spacing: -0.2;
      color: hsl(215, 15%, 92%);
    `,
    h3: css`
      ${fontFamily};
      font-size: ${getSpacing(3.5)};
      line-height: 1.2222222222222223;
      letter-spacing: 0.2;
      font-weight: 400;
      @media (max-width: 768px) {
        font-size: ${getSpacing(2)};
      }
    `,
    h4: css`
      ${fontFamily};
      font-size: ${getSpacing(2.75)};
      line-height: 1.5;
      letter-spacing: 0.2;
      font-weight: 400;
      @media (max-width: 768px) {
        font-size: ${getSpacing(2)};
      }
    `,
    h5: css`
      ${fontFamily};
      font-size: ${getSpacing(2)};
      line-height: 1.5;
      letter-spacing: 0.1;
      color: hsl(210, 100%, 70%);
      font-weight: 400;
    `,
    h6: css`
      ${fontFamily};
      font-size: ${getSpacing(2.5)};
      line-height: 1.5;
      font-weight: 500;
      @media (max-width: 768px) {
        font-size: ${getSpacing(1.5)};
      }
    `,
    button: css`
      ${fontFamily};
      font-size: ${getSpacing(1.75)};
      text-transform: initial;
      font-weight: 700;
      letter-spacing: 0;
      line-height: 1.75;
    `,
    subtitle1: css`
      ${fontFamily};
      font-size: ${getSpacing(2)};
      line-height: 1.3333333333333333;
      letter-spacing: 0;
      font-weight: 500;
    `,
    subtitle2: css`
      ${fontFamily};
      font-size: ${getSpacing(1.75)};
      font-weight: 500;
      line-height: 1.57;
    `,
    body1: css`
      ${fontFamily};
      font-size: ${getSpacing(2)};
      line-height: 1.5;
      letter-spacing: 0;
      font-weight: 400;
      @media (max-width: 768px) {
        font-size: ${getSpacing(1.25)};
      }
    `,
    body2: css`
      ${fontFamily};
      font-size: ${getSpacing(1.75)};
      line-height: 1.5;
      letter-spacing: 0;
      font-weight: 400;
      @media (max-width: 768px) {
        font-size: 7px;
      }
    `,
    caption: css`
      ${fontFamily};
      font-size: ${getSpacing(1.5)};
      line-height: ${getSpacing(3)};
      letter-spacing: 0;
      font-weight: 700;
    `,
    overline: css`
      ${fontFamily};
      font-weight: 400;
      font-size: ${getSpacing(1.5)};
      line-height: 2.66;
      text-transform: uppercase;
    `,
    inherit: css`
      font-family: inherit;
      font-weight: inherit;
      font-size: inherit;
      line-height: inherit;
      letter-spacing: inherit;
    `
  }
}
// let typography = {
//   fontFamily:
//     'Söhne Test,"IBM Plex Sans",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
//   htmlFontSize: 16,
//   fontSize: 14,
//   fontWeightLight: 300,
//   fontWeightRegular: 400,
//   fontWeightMedium: 500,
//   fontWeightBold: 700,
//   fontWeightSemiBold: 600,
//   fontWeightExtraBold: 800,
// }

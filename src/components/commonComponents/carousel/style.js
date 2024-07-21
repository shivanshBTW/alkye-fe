import { css } from '@emotion/react'
import { theme } from '../../../config/themes/light'

const slideSpacing = theme.spacing(1)

//   max-width: 48rem;
// margin: auto;
export const carouselRoot = css``

export const carouselContainerSection = css`
  overflow: hidden;
`

export const slidesContainer = ({
  slideSpacing = theme.spacing(1)
} = {}) => css`
  backface-visibility: hidden;
  display: flex;
  touch-action: pan-y pinch-zoom;
  margin-left: calc(${slideSpacing} * -1);
`

export const slideStyle = ({
  slideWidth = '30%',
  slideSpacing = theme.spacing(1)
} = {}) => css`
  flex: 0 0 ${slideWidth};
  min-width: 0;
  padding-left: ${slideSpacing};
  color: ${theme.inverted.mainTextColor};
  &:last-of-type {
    padding-right: ${theme.spacing(8)};
  }
`

export const dotsRootStyle = css`
  margin-top: ${theme.spacing(2)};
  margin-right: ${theme.spacing(9)};
`

export const dotsContainerStyle = css`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-end;
  align-items: center;
  margin-right: calc((2.6rem - 1.4rem) / 2 * -1);
`

export const dotStyle = css`
  -webkit-tap-highlight-color: ${theme.inverted.primaryTextColor};
  -webkit-appearance: none;
  appearance: none;
  background-color: transparent;
  touch-action: manipulation;
  display: inline-flex;
  text-decoration: none;
  cursor: pointer;
  border: 0;
  padding: 0;
  margin: 0;
  width: ${theme.spacing(2.6)};
  height: ${theme.spacing(2.6)};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  &:after {
    background-color: #888888;
    width: ${theme.spacing(2)};
    height: ${theme.spacing(2)};
    border-radius: 50%;
    display: flex;
    align-items: center;
    content: '';
  }
`

export const selectedDotStyle = css`
  &:after {
    background-color: ${theme.inverted.mainTextColor};
  }
`

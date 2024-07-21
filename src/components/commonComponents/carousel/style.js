import { css } from '@emotion/react'
import { theme } from '../../../config/themes/light'

const slideSpacing = theme.spacing(8)
const slideSpacingMobile = theme.spacing(4)
const slideWidth = theme.spacing(50)
const slideWidthMobile = theme.spacing(25)

export const carouselRoot = css``

export const carouselContainerSection = css`
  overflow: hidden;
`

export const slidesContainer = css`
  backface-visibility: hidden;
  display: flex;
  touch-action: pan-y pinch-zoom;
  margin-left: calc(${theme.spacing(1)} * -1);
  @media (max-width: 768px) {
    margin-left: calc(${theme.spacing(0.5)} * -1);
  }
`

export const slideStyle = css`
  flex: 0 0 ${slideWidth};
  min-width: 0;
  padding-left: ${slideSpacing};
  color: ${theme.inverted.mainTextColor};
  @media (max-width: 768px) {
    flex: 0 0 ${slideWidthMobile};
    padding-left: ${slideSpacingMobile};
  }
  &:last-of-type {
    padding-right: ${slideSpacing};
    @media (max-width: 768px) {
      padding-right: ${slideSpacingMobile};
    }
  }
`

export const dotsRootStyle = css`
  margin-top: ${theme.spacing(2)};
  margin-right: ${theme.spacing(9)};
  @media (max-width: 768px) {
    margin-right: ${theme.spacing(4)};
  }
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

import { css } from '@emotion/react'
import { theme } from '../../config/themes/light'

export const homeRoot = css`
  background-color: ${theme.inverted.background};
`

export const contentContainer = css`
  width: 100%;
  box-sizing: border-box;
  padding: ${theme.spacing(9)} 0;

  display: flex;
  flex-direction: column;
  row-gap: ${theme.spacing(2)};
  @media (max-width: 768px) {
    padding: ${theme.spacing(7)} 0;
  }
`

export const headerSectionStyle = css`
  padding: 0 ${theme.spacing(14)};
  @media (max-width: 768px) {
    padding: 0 ${theme.spacing(4)};
  }
`

export const headerLogoContainer = css`
  margin-bottom: ${theme.spacing(10)};
`

export const greetingText = css`
  ${theme.typography.h4};
  color: ${theme.typography.fontWeightMedium};
  color: ${theme.inverted.mainTextColor};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: ${theme.spacing(2)};
  margin-bottom: ${theme.spacing(3)};
`

export const logoutIconStyle = css`
  cursor: pointer;
  width: ${theme.spacing(4)};
  height: ${theme.spacing(4)};
`

export const subtitleText = css`
  ${theme.typography.h6};
  color: ${theme.typography.fontWeightSemiBold};
  color: ${theme.inverted.tertiaryTextColor};
  margin-bottom: ${theme.spacing(3)};
  width: ${theme.spacing(72.5)}
  box-sizing: border-box;
  @media (max-width: 768px) {
    width: 100%;
    max-width: ${theme.spacing(72.5)};
  }
`

export const postsSectionStyle = css`
  display: flex;
  flex-direction: column;
  row-gap: ${theme.spacing(2.5)};
`

export const carouselContainer = css`
  margin: ${theme.spacing(2)} 0;
  padding-left: ${theme.spacing(6)};
  @media (max-width: 768px) {
    padding-left: ${theme.spacing(2)};
  }
`

export const carouselTitleStyle = css`
  ${theme.typography.h4};
  ${theme.typography.fontWeightSemiBold};
  color: ${theme.inverted.mainTextColor};
  margin-bottom: ${theme.spacing(6)};
  padding: 0 ${theme.spacing(8)};
`

// aspect-ratio: 700/425;
export const carouselImageContainerStyle = css`
  width: 100%;
  height: ${theme.spacing(87.5)};
  overflow: hidden;
  border-radius: ${theme.spacing(5)};
`

export const carouselImageStyle = css`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`

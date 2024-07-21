import { css } from '@emotion/react'
import { theme } from '../../config/themes/light'

export const homeRoot = css`
  background-color: ${theme.inverted.background};
`

export const contentContainer = css`
  width: 100%;
  box-sizing: border-box;
  padding: 70px 0;

  display: flex;
  flex-direction: column;
  row-gap: 15px;
  @media (max-width: 700px) {
    padding: 70px 20px;
  }
`

export const headerSectionStyle = css`
  padding: 0 ${theme.spacing(14)};
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
  width: 30px;
  height: 30px;
`

export const subtitleText = css`
  ${theme.typography.h6};
  color: ${theme.typography.fontWeightSemiBold};
  color: ${theme.inverted.tertiaryTextColor};
  margin-bottom: 25px;
  width: 580px;
  box-sizing: border-box;
  @media (max-width: 700px) {
    width: 100%;
    max-width: 580px;
  }
`

export const postsSectionStyle = css`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
`

export const carouselContainer = css`
  margin: ${theme.spacing(2)} 0;
`

export const carouselTitleStyle = css`
  ${theme.typography.h4};
  ${theme.typography.fontWeightSemiBold};
  color: ${theme.inverted.mainTextColor};
  margin-bottom: ${theme.spacing(6)};
  padding: 0 ${theme.spacing(14)};
`

export const carouselImageContainerStyle = css`
  width: 100%;
  height: 700px;
  aspect-ratio: 700/425;
  overflow: hidden;
  border-radius: 40px;
`

export const carouselImageStyle = css`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`

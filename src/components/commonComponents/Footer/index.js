/** @jsxImportSource @emotion/react */
import {
  footerLinksContainer,
  footerLinkStyle,
  footerRoot,
  iconsContainerStyle,
  linkGroupContainerStyle,
  socialIconStyle
} from './style.js'
import fb from '../../../assets/images/icons/fb.svg'
import instagram from '../../../assets/images/icons/instagram.svg'
import yt from '../../../assets/images/icons/yt.svg'
import twitter from '../../../assets/images/icons/twitter.svg'
import twitch from '../../../assets/images/icons/twitch.svg'

const linkConfig = [
  [
    {
      to: '/privacy',
      label: 'Privacy Policy'
    },
    {
      to: '/privacy',
      label: 'Privacy Policy'
    }
  ],
  [
    {
      to: '/contact',
      label: 'Contact Us'
    },
    {
      to: '/contact',
      label: 'Contact Us'
    }
  ],
  [
    {
      to: '/cookie',
      label: 'Cookie preferences'
    },
    {
      to: '/cookie',
      label: 'Cookie preferences'
    }
  ],
  [
    {
      to: '/corporate',
      label: 'Corporate Information'
    },
    {
      to: '/corporate',
      label: 'Corporate Information'
    }
  ]
]

const socialIcons = [fb, instagram, yt, twitter, twitch]

function Footer (props) {
  return (
    <div css={footerRoot}>
      <div css={iconsContainerStyle}>
        {socialIcons.map((icon, index) => {
          return (
            <img
              key={index}
              src={icon}
              alt='social-icon'
              css={socialIconStyle}
            />
          )
        })}
      </div>
      <div css={footerLinksContainer}>
        {linkConfig.map((linkGroup, index) => {
          return (
            <div key={index} css={linkGroupContainerStyle}>
              {linkGroup.map((link, index) => {
                return (
                  <a
                    key={index + link.label}
                    href={link.to}
                    css={footerLinkStyle}
                  >
                    {link.label}
                  </a>
                )
              })}
            </div>
          )
        })}
      </div>

      <div>© Alkye Test</div>
    </div>
  )
}
export default Footer

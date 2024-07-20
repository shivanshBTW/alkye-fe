/** @jsxImportSource @emotion/react */
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

import { connect } from 'react-redux'
import { loginRoot, loginSectionContainer, logoStyle } from './style'
import { loginUser } from '../../redux/actions/login'
import { routes } from '../../routes'
import testLogo from '../../assets/images/login/testLogo.svg'
import Step1 from '../../components/Login/steps/Step1'
import Step2 from '../../components/Login/steps/Step2'

function Login (props) {
  const { email: formEmail, isLoggedIn } = props
  const navigate = useNavigate()

  useEffect(() => {
    if (isLoggedIn) {
      navigate(routes.home)
    }
  }, [isLoggedIn, navigate])

  return (
    <div css={loginRoot}>
      <div css={loginSectionContainer}>
        <img src={testLogo} alt='Test' css={logoStyle} />
        <div>{formEmail ? <Step2 /> : <Step1 />}</div>
      </div>
    </div>
  )
}

const mapStateToProps = ({
  login: { isLoggedIn, currentUserData, formData: { email } = {} } = {}
}) => {
  return {
    isLoggedIn,
    currentUserData,
    email
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loginUser: data => dispatch(loginUser(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)

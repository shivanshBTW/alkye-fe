/** @jsxImportSource @emotion/react */
import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

import Button from '../../components/commonComponents/Button'
import TextField from '../../components/commonComponents/TextField'
import { connect } from 'react-redux'
import { delay } from '../../utils/commonUtils'
import { handleFetchUserData } from '../../service/login'
import { loginRoot, loginSectionContainer, logoStyle } from './style'
import { loginUser } from '../../redux/actions/login'
import { routes } from '../../routes'
import testLogo from '../../assets/images/login/testLogo.svg'
import { toast } from 'material-react-toastify'
import Step1 from '../../components/Login/steps/Step1'
import Step2 from '../../components/Login/steps/Step2'

function Login (props) {
  const { email: formEmail, isLoggedIn, loginUser } = props
  const [isLoggingIn, setIsLoggingIn] = useState(false)
  const navigate = useNavigate()

  // const handleLogin = async () => {
  //   if (!email || !password) {
  //     toast.error('Please enter email and password')
  //   } else {
  //     setIsLoggingIn(true)
  //     const data = await handleFetchUserData(email)
  //     // to replicate a longer login delay
  //     await delay(2000)
  //     loginUser(data)
  //     setIsLoggingIn(false)
  //     toast.success('Login successful')
  //   }
  // }

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

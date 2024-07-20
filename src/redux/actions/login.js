export const loginUser = (data = {}) => {
  return {
    type: 'LOGIN_USER',
    payload: data
  }
}

export const logoutUser = () => {
  return {
    type: 'LOGOUT_USER'
  }
}

export const updateFormData = data => {
  return {
    type: 'UPDATE_FORM_DATA',
    payload: data
  }
}

export const setFormEmail = email => {
  return {
    type: 'SET_FORM_EMAIL',
    payload: email
  }
}

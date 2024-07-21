import axios from 'axios'

export const handleLogin = async (username = '', password = '') => {
  const data = await axios({
    method: 'POST',
    url: 'https://untitled-twkmuar27a-uc.a.run.app/api/login/',
    headers: {
      'Content-Type': 'application/json'
    },
    data: {
      username,
      password
    }
  })

  const { data: { token, user_id } = {} } = data

  const userListData = await axios({
    method: 'GET',
    url: 'https://untitled-twkmuar27a-uc.a.run.app/api/customer-list',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Token ${token}`
    }
  })

  const { data: results = [] } = userListData
  const user = results.find(user => user.id === user_id)
  return { token, user_id, ...user }
}

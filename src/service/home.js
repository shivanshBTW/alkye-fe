import axios from 'axios'

export const fetchPosts = async ({ token }) => {
  const response = await axios({
    method: 'GET',
    url: 'https://untitled-twkmuar27a-uc.a.run.app/api',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Token ${token}`
    }
  })
  return response
}

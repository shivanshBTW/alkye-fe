import axios from 'axios'
import { toast } from 'material-react-toastify'

export const handleLogin = async (
  username = 'testadmin',
  password = 'testadmin'
) => {
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
  return data
}

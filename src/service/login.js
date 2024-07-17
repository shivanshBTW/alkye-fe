import axios from 'axios'

export const handleFetchUserData = async () => {
  const { data } = await axios({
    method: 'GET',
    url: 'https://random-data-api.com/api/v3/projects/9251e080-4e1f-4ade-9602-c1f33ad3e16e?api_key=FwnApaekjZA4sWJRbiTVIg',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  console.log('first data', data)
  return data
}

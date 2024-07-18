export const fetchPosts = async () => {
  const response = await fetch(
    'https://random-data-api.com/api/v3/projects/9053afc7-0abb-4904-9147-e2fd52c966fd?api_key=U2zIee7dTeFFsnzZ8KYJJg'
  )
  const data = await response.json()
  return data
}

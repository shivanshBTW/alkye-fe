export const fetchPosts = async () => {
  const response = await fetch('https://dummyjson.com/posts?limit=10&skip=10')
  const data = await response.json()
  return data
}

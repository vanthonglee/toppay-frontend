import { getAccessToken, withApiAuthRequired } from '@auth0/nextjs-auth0'

export default withApiAuthRequired(async function store(req, res) {
  const { accessToken } = await getAccessToken(req, res)

  if (req.method === 'POST') {
    const response = await fetch(`${process.env.API_BASE_URL}/store`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`
      },
      body: req.body
    })

    const store = await response.json()

    res.status(200).json(store)
  }
  if (req.method === 'GET') {
    const response = await fetch(`${process.env.API_BASE_URL}/store`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`
      }
    })

    const stores = await response.json()

    res.status(200).json(stores)
  }
})

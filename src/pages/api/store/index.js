import { getAccessToken, withApiAuthRequired } from '@auth0/nextjs-auth0'

export default withApiAuthRequired(async function store(req, res) {
  const { accessToken } = await getAccessToken(req, res)
  const response = await fetch('http://localhost:3001/store', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`
    },
    body: req.body
  })

  const products = await response.json()

  res.status(200).json(products)
})

import { getAccessToken, withApiAuthRequired } from '@auth0/nextjs-auth0'

export default withApiAuthRequired(async function handler(req, res) {
  const { accessToken } = await getAccessToken(req, res)
  console.log(accessToken)
  if (req.method === 'PUT') {
    const { storeId } = req.query

    const response = await fetch(
      `${process.env.API_BASE_URL}/store/${storeId}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`
        },
        body: req.body
      }
    )

    const store = await response.json()

    res.status(200).json(store)
  }
})

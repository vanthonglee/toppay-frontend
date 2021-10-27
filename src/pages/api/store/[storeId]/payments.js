import { getAccessToken, withApiAuthRequired } from '@auth0/nextjs-auth0'

export default withApiAuthRequired(async function getPaymentOfStore(req, res) {
  const { storeId } = req.query
  const { accessToken } = await getAccessToken(req, res)

  const response = await fetch(
    `${process.env.API_BASE_URL}/store/${storeId}/payments`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`
      }
    }
  )

  const results = await response.json()

  res.status(200).json(results)
})

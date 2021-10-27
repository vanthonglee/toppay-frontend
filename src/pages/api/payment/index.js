export default async function handler(req, res) {
  const { payment_id } = req.query
  const response = await fetch(
    `${process.env.API_BASE_URL}/payment/${payment_id}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }
  )

  const products = await response.json()

  res.status(200).json(products)
}

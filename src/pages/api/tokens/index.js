export default async function handler(req, res) {
  const { symbol, network } = req.query
  const response = await fetch(
    `${
      process.env.API_BASE_URL
    }/token/${symbol.toUpperCase()}/${network.toUpperCase()}`,
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

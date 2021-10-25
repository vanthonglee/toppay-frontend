import { NextSeo } from 'next-seo'

const SEO = () => (
  <NextSeo
    title="TopPay - Token Payment Gateway"
    description="TopPay is a Cryptocurrency Payment Gateway. We provide solutions to help sellers and business owners easily integrate crypto payment gateways into their websites."
    openGraph={{
      url: 'https://www.toppay.store',
      title: 'Open Graph Title',
      description: 'Open Graph Description',
      images: [
        {
          url: '/images/seo-toppay-thumbnaile-800x600.jpg',
          width: 800,
          height: 600,
          alt: 'Og Image Alt',
          type: 'image/jpeg'
        },
        {
          url: '/images/seo-toppay-thumbnaile-900x800.jpg',
          width: 900,
          height: 800,
          alt: 'Og Image Alt Second',
          type: 'image/jpeg'
        },
        { url: '/images/seo-toppay-thumbnaile-800x600.jpg' },
        { url: '/images/seo-toppay-thumbnaile-900x800.jpg' }
      ],
      site_name: 'TopPay'
    }}
  />
)

export default SEO

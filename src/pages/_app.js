import 'tailwindcss/tailwind.css'
import '@/styles/common/reset.scss'

import { UserProvider } from '@auth0/nextjs-auth0'
import Head from 'next/head'

// import SEO from '@/components/Seo'
import { AdminLayout } from '@/layout'
import CheckoutLayout from '@/layout/ChechoutLayout'
const layouts = {
  L1: AdminLayout,
  L2: CheckoutLayout
}
function MyApp({ Component, pageProps }) {
  const Layout = layouts[Component.layout] || layouts['L1']
  const { user } = pageProps
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Mulish:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
        {/* <SEO /> */}
      </Head>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp

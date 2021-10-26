import 'tailwindcss/tailwind.css'
import '@/styles/common/reset.scss'

import { UserProvider } from '@auth0/nextjs-auth0'
import Head from 'next/head'

// import SEO from '@/components/Seo'
import { AdminLayout } from '@/layout'

function MyApp({ Component, pageProps }) {
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
      <UserProvider user={user}>
        <AdminLayout>
          <Component {...pageProps} />
        </AdminLayout>
      </UserProvider>
    </>
  )
}

export default MyApp

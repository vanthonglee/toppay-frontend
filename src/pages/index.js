import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0'
import Head from 'next/head'
import { useEffect } from 'react'
const fetcher = async () => {
  const response = await fetch('/api/store/IamJZhiEdAUMyWwoahfS/payments', {
    method: 'GET'
  })
  return response.json()
}
export default function Home() {
  const { user, error, isLoading } = useUser()
  useEffect(() => {
    fetcher()
  }, [])

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>{error.message}</div>

  return (
    <>
      <Head>
        <title>TopPay - Home Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section>
        Home Dashboard
        <div>
          {user ? (
            <div>Welcome to TopPay, {user.name}!</div>
          ) : (
            <a href="/api/auth/login">Login</a>
          )}
        </div>
      </section>
    </>
  )
}

export const getServerSideProps = withPageAuthRequired()

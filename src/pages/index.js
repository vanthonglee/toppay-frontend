import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0'
import clsx from 'clsx'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'

import {
  CircleDollar,
  CogWheel,
  CubeFrame,
  LayerCube,
  PieChart,
  ShoppingBag
} from '@/components/icons'
import adminStyles from '@/styles/common/adminLayout.module.scss'
import globalStyles from '@/styles/common/global.module.scss'

import HomeAPIIcon from '../../public/images/home-api-icon.png'
import HomeCheckoutsIcon from '../../public/images/home-checkouts-icon.png'
import HomeStoreIcon from '../../public/images/home-store-icon.png'

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

      <section className={clsx([adminStyles.main__container])}>
        <div className="max-w-5xl mx-auto pt-10">
          {user ? (
            <>
              <h1 className={clsx([globalStyles.h1])}>
                Welcome to TopPay, {user.name}
              </h1>
              <h2 className="mb-8">
                You’re off to a great start. Let's get you using TopPay
                rightway.
              </h2>

              <div className="grid grid-cols-3 gap-x-6 max-w-5xl mx-auto">
                <div className="justify-center bg-white shadow-lg rounded-lg">
                  <div className="w-20 h-25">
                    <Image
                      src={HomeStoreIcon}
                      alt="TopPay"
                      className="w-20 h-20"
                    />
                  </div>

                  <li className="">
                    <a className="">
                      <CircleDollar />
                      <div className="">Store</div>
                    </a>
                  </li>
                </div>
                <div className="bg-white shadow-lg rounded-lg">
                  <Image
                    src={HomeCheckoutsIcon}
                    alt="TopPay"
                    className="w-20 h-20 object-cover rounded-full "
                  />
                  <h2>dsds</h2>
                </div>
                <div className="bg-white shadow-lg rounded-lg">
                  <Image
                    src={HomeAPIIcon}
                    alt="TopPay"
                    className="w-20 h-20 object-cover rounded-full "
                  />
                </div>
              </div>
            </>
          ) : (
            <a href="/api/auth/login">Login</a>
          )}
        </div>
      </section>
    </>
  )
}

export const getServerSideProps = withPageAuthRequired()

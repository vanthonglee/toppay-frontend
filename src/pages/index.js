/* eslint-disable react/no-unescaped-entities */
import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0'
import clsx from 'clsx'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'
import { useState } from 'react'

import { Modal } from '@/components'
import { Box, CreditCard, EarthMouse } from '@/components/icons'
import { HelpCircle } from '@/components/icons'
import adminStyles from '@/styles/common/adminLayout.module.scss'
import globalStyles from '@/styles/common/global.module.scss'
import styles from '@/styles/home.module.scss'

import HomeSuccessfullWomen from '../../public/images/home-successfull-women.svg'
import HomeWomenCreditCard from '../../public/images/home-women-credit-card.svg'
import HomeWomenOnEarth from '../../public/images/home-women-on-earth.svg'
// const cardsInfo = [
//   {
//     title: 'Store Setting',
//     description: '',
//     link: '/store',
//     linkTitle: 'Go to Store Setting'
//   },
//   {
//     title: 'Payments Setting',
//     description: '',
//     link: '/payments',
//     linkTitle: 'Go to Payments Setting'
//   },
//   {
//     title: 'Choose your integration',
//     description: '',
//     link: '/api',
//     linkTitle: 'Choose integration'
//   }
// ]

const fetcher = async () => {
  const response = await fetch('/api/store/IamJZhiEdAUMyWwoahfS/payments', {
    method: 'GET'
  })
  return response.json()
}
export default function Home() {
  const [showModal, updateModalState] = useState(false)

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
        <div className="flex flex-col items-center justify-center h-full">
          {user ? (
            <div>
              <div className="mb-[58px]">
                <h1 className={clsx([globalStyles.h1])}>
                  Welcome to Top Pay, {user.name}
                </h1>
                <h2 className="font-san-montserrat leading-[24px] text-primary mt-1">
                  You’re off to a great start. Let's get you using TopPay
                  rightway.
                </h2>
              </div>

              <div className="grid grid-cols-3 mx-auto gap-x-6 ">
                {/* Card Store Setting */}
                <div className={clsx([styles.home__card])}>
                  <div className={clsx([styles.card__image_wrapper])}>
                    <Image
                      src={HomeSuccessfullWomen}
                      alt="TopPay"
                      width="187"
                      height="187"
                    />
                  </div>

                  <li className={clsx([styles.card__content])}>
                    <div className={clsx([styles.card__header])}>
                      <Box />

                      <h3 className={clsx([styles.card__title])}>
                        Store Setting
                      </h3>
                    </div>
                    <p className={clsx([styles.card__description])}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Fusce pharetra nunc quis faucibus tristique.{' '}
                    </p>
                    <div className={clsx([styles.card__bottom])}>
                      <Link href="/store">
                        <a className={clsx([styles.card__button])}>
                          Go to Store Setting
                        </a>
                      </Link>
                      <a className={clsx([styles.card__button_learn_more])}>
                        <HelpCircle />
                        Learn more
                      </a>
                    </div>
                  </li>
                </div>
                {/* Card Payments Setting */}
                <div className={clsx([styles.home__card])}>
                  <div className={clsx([styles.card__image_wrapper])}>
                    <Image
                      src={HomeWomenCreditCard}
                      alt="TopPay"
                      width="187"
                      height="187"
                    />
                  </div>

                  <li className={clsx([styles.card__content])}>
                    <div className={clsx([styles.card__header])}>
                      <CreditCard />

                      <h3 className={clsx([styles.card__title])}>
                        Payments Setting
                      </h3>
                    </div>
                    <p className={clsx([styles.card__description])}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Fusce pharetra nunc quis faucibus tristique.{' '}
                    </p>
                    <div className={clsx([styles.card__bottom])}>
                      <Link href="/payments">
                        <a className={clsx([styles.card__button])}>
                          Go to Payments Setting
                        </a>
                      </Link>
                      <a className={clsx([styles.card__button_learn_more])}>
                        <HelpCircle />
                        Learn more
                      </a>
                    </div>
                  </li>
                </div>
                {/* Card Choose your integration*/}
                <div className={clsx([styles.home__card])}>
                  <div className={clsx([styles.card__image_wrapper])}>
                    <Image
                      src={HomeWomenOnEarth}
                      alt="TopPay"
                      width="187"
                      height="187"
                    />
                  </div>

                  <li className={clsx([styles.card__content])}>
                    <div className={clsx([styles.card__header])}>
                      <EarthMouse />

                      <h3 className={clsx([styles.card__title])}>
                        Choose your integration
                      </h3>
                    </div>
                    <p className={clsx([styles.card__description])}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Fusce pharetra nunc quis faucibus tristique.{' '}
                    </p>
                    <div className={clsx([styles.card__bottom])}>
                      <button
                        className={clsx([styles.card__button])}
                        onClick={() => updateModalState(true)}
                      >
                        Choose integration
                      </button>
                      <a className={clsx([styles.card__button_learn_more])}>
                        <HelpCircle />
                        Learn more
                      </a>
                    </div>
                  </li>
                </div>
              </div>
            </div>
          ) : (
            <a href="/api/auth/login">Login</a>
          )}
        </div>
      </section>

      <Modal show={showModal} onClose={() => updateModalState(false)}>
        <div className="flex items-center justify-center w-full h-full gap-7">
          {/* Card API Intergration */}
          <div
            className={clsx([
              styles.home__card,
              styles.home__card_center_layout
            ])}
          >
            <div className={clsx([styles.card__image_wrapper])}>
              <Image
                src={HomeSuccessfullWomen}
                alt="TopPay"
                width="187"
                height="187"
              />
            </div>

            <li className={clsx([styles.card__content])}>
              <div className={clsx([styles.card__header])}>
                <h3 className={clsx([styles.card__title])}>API integration</h3>
              </div>
              <p className={clsx([styles.card__description])}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                pharetra nunc quis faucibus tristique.{' '}
              </p>
              <div className={clsx([styles.card__bottom])}>
                <Link href="/api">
                  <a className={clsx([styles.card__button])}>Choose</a>
                </Link>
              </div>
            </li>
          </div>
          {/* Card Button Checkout */}
          <div
            className={clsx([
              styles.home__card,
              styles.home__card_center_layout
            ])}
          >
            <div className={clsx([styles.card__image_wrapper])}>
              <Image
                src={HomeWomenCreditCard}
                alt="TopPay"
                width="187"
                height="187"
              />
            </div>

            <li className={clsx([styles.card__content])}>
              <div className={clsx([styles.card__header])}>
                <h3 className={clsx([styles.card__title])}>Button Checkout</h3>
              </div>
              <p className={clsx([styles.card__description])}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                pharetra nunc quis faucibus tristique.{' '}
              </p>
              <div className={clsx([styles.card__bottom])}>
                <Link href="/payments">
                  <a className={clsx([styles.card__button])}>Choose</a>
                </Link>
              </div>
            </li>
          </div>
        </div>
      </Modal>
    </>
  )
}

export const getServerSideProps = withPageAuthRequired()

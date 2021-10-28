import clsx from 'clsx'
import Head from 'next/head'

import globalStyles from '@/styles/common/global.module.scss'
import styles from '@/styles/payment.module.scss'

export default function payments() {
  return (
    <>
      <Head>
        <title>TopPay - Payments</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className={clsx([styles.payment__container])}>
        <div>
          <h1 className={clsx([globalStyles.h1])}>Payments Senting</h1>
          {/* Popular Coin */}
          <div className={clsx([styles.payment__option_container])}>
            <div className={clsx([styles.payment__option_explanation])}>
              <h3 className={clsx([styles.option__title])}>Popular coin</h3>
              <p className={clsx([styles.option__description])}>
                Unique ID used for creation of payments and monitoring their
                status.
              </p>
            </div>
            <div className={clsx([styles.payment__form__options])}>Coin</div>
          </div>
          {/* Stable Coin */}
          <div className={clsx([styles.payment__option_container])}>
            <div className={clsx([styles.payment__option_explanation])}>
              <h3 className={clsx([styles.option__title])}>Stable coin</h3>
              <p className={clsx([styles.option__description])}>
                This is the setup to sync orders from your store
              </p>
            </div>
            <div className={clsx([styles.payment__form__options])}>Coins</div>
          </div>
          {/* Own coin */}
          <div className={clsx([styles.payment__option_container])}>
            <div className={clsx([styles.payment__option_explanation])}>
              <h3 className={clsx([styles.option__title])}>Own coin</h3>
              <p className={clsx([styles.option__description])}>
                This is the setup to sync orders from your store
              </p>
            </div>
            <div className={clsx([styles.payment__form__options])}>Coins</div>
          </div>
          <div className={clsx(['flex gap-2 justify-end mt-5'])}>
            <button className={clsx([styles.btn, styles.btn__discard])}>
              Discard
            </button>
            <button className={clsx([styles.btn, styles.btn__save])}>
              Save
            </button>
          </div>
        </div>
      </section>
    </>
  )
}

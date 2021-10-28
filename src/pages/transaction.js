import clsx from 'clsx'
import Head from 'next/head'

import { TransactionTable } from '@/components'
import { Calendar, MagnifyingGlass } from '@/components//icons'
import adminStyles from '@/styles/common/adminLayout.module.scss'
import globalStyles from '@/styles/common/global.module.scss'
import styles from '@/styles/transaction.module.scss'

export default function Home() {
  return (
    <>
      <Head>
        <title>TopPay - Transaction</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className={clsx([adminStyles.main__container])}>
        <h1 className={clsx([globalStyles.h1])}>Transaction Log</h1>
        <div className={clsx([styles.transaction__container])}>
          {/* Status Types */}
          <div
            className={clsx([
              styles.transaction__component,
              styles.transaction__status_types
            ])}
          >
            <ul className={clsx([styles.status__list])}>
              <li className={clsx([styles.status__item, styles.active])}>
                All
              </li>
              <li className={clsx([styles.status__item])}>Awaiting Payment</li>
              <li className={clsx([styles.status__item])}>Confirm Payment</li>
              <li className={clsx([styles.status__item])}>Partially Paid</li>
              <li className={clsx([styles.status__item])}>Paid</li>
              <li className={clsx([styles.status__item])}>Cancel</li>
            </ul>
          </div>
          <hr className={globalStyles.line} />
          {/* Statistics */}
          <div
            className={clsx([
              styles.transaction__component,
              styles.transaction__stats
            ])}
          >
            <div
              className={clsx([
                styles.transaction__card,
                styles.card__total_transaction
              ])}
            >
              <p className={clsx([styles.card__title])}>Total Transaction</p>
              <p className={clsx([styles.stat])}>2.654</p>
            </div>
            <div className={clsx([styles.transaction__card])}>
              <p className={clsx([styles.card__title])}>Paid Transaction</p>
              <p className={clsx([styles.stat])}>568</p>
            </div>
            <div
              className={clsx([
                styles.transaction__card,
                styles.total__received
              ])}
            >
              <p className={clsx([styles.card__title])}>Total received</p>
              <p className={clsx([styles.stat])}>$22.408,75</p>
            </div>
          </div>
          <hr className={clsx(['mx-6', globalStyles.line])} />
          {/* Filter */}
          <div
            className={clsx([
              styles.transaction__component,
              styles.transaction__filter
            ])}
          >
            <div
              className={clsx([
                styles.transaction__filter_search_by,
                globalStyles.input__wrapper
              ])}
            >
              <MagnifyingGlass
                className={clsx([
                  globalStyles.input__icon,
                  globalStyles.input__icon_left
                ])}
              />
              <input
                placeholder="Search by order ID/address"
                className={clsx([
                  globalStyles.input,
                  globalStyles.input__for_left_icon
                ])}
              />
            </div>
            <div
              className={clsx([
                styles.transaction__filter_date,
                globalStyles.input__wrapper
              ])}
            >
              <input
                placeholder="Choose Date"
                className={clsx([globalStyles.input])}
              />
              <Calendar
                className={clsx([
                  globalStyles.input__icon,
                  globalStyles.input__icon_right
                ])}
              />
            </div>
          </div>
          {/* Table */}
          <div
            className={clsx([
              styles.transaction__component,
              styles.transaction__table
            ])}
          >
            <TransactionTable />
          </div>
        </div>
      </section>
    </>
  )
}

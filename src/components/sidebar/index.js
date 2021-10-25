import clsx from 'clsx'
import Link from 'next/link'

import {
  BankCard,
  CircleDollar,
  CogWheel,
  CubeFrame,
  LayerCube,
  PieChart,
  ShoppingBag
} from '@/components/icons'

import styles from './sidebar.module.scss'

const Sidebar = () => {
  return (
    <aside className={clsx([styles.sidebar])}>
      <nav className={clsx([styles.sidebar__navigation])}>
        <ul className={clsx([styles.sidebar__list])}>
          <li className={clsx([styles.sidebar__item])}>
            <Link href="/">
              <a className={clsx([styles.sidebar__link])}>
                <LayerCube />
                <div className={clsx([styles.link__typo])}>
                  <span data-content="Home" aria-hidden="true"></span>
                  Home
                </div>
              </a>
            </Link>
          </li>
          <li className={clsx([styles.sidebar__item])}>
            <Link href="/general">
              <a className={clsx([styles.sidebar__link])}>
                <CogWheel />
                <div className={clsx([styles.link__typo])}>
                  <span data-content="General" aria-hidden="true"></span>
                  General
                </div>
              </a>
            </Link>
          </li>
          <li className={clsx([styles.sidebar__item])}>
            <a className={clsx([styles.sidebar__link])}>
              <CircleDollar />
              <div className={clsx([styles.link__typo])}>
                <span data-content="Coin" aria-hidden="true"></span>
                Coin
              </div>
            </a>
          </li>
          <li className={clsx([styles.sidebar__item])}>
            <a className={clsx([styles.sidebar__link])}>
              <CubeFrame />
              <div className={clsx([styles.link__typo])}>
                <span data-content="API" aria-hidden="true"></span>
                API
              </div>
            </a>
          </li>
          <li className={clsx([styles.sidebar__item])}>
            <a className={clsx([styles.sidebar__link])}>
              <BankCard />
              <div className={clsx([styles.link__typo])}>
                <span data-content="Invoices" aria-hidden="true"></span>
                Invoices
              </div>
            </a>
          </li>
          <li className={clsx([styles.sidebar__item])}>
            <a className={clsx([styles.sidebar__link])}>
              <ShoppingBag />
              <div className={clsx([styles.link__typo])}>
                <span data-content="Button Checkout" aria-hidden="true"></span>
                Button Checkout
              </div>
            </a>
          </li>
          <li className={clsx([styles.sidebar__item])}>
            <Link href="/transaction">
              <a className={clsx([styles.sidebar__link])}>
                <PieChart />
                <div className={clsx([styles.link__typo])}>
                  <span data-content="Transaction" aria-hidden="true"></span>
                  Transaction
                </div>
              </a>
            </Link>
          </li>
          <li className={clsx([styles.sidebar__item])}>
            <a className={clsx([styles.sidebar__link])}>
              <CogWheel />
              <div className={clsx([styles.link__typo])}>
                <span data-content="Setting" aria-hidden="true"></span>
                Setting
              </div>
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  )
}

export default Sidebar

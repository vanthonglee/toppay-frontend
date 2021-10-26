import clsx from 'clsx'
import Link from 'next/link'

import {
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
                  <span data-content="Dashboard" aria-hidden="true"></span>
                  Dashboard
                </div>
              </a>
            </Link>
          </li>
          <li className={clsx([styles.sidebar__item])}>
            <Link href="/general">
              <a className={clsx([styles.sidebar__link])}>
                <CogWheel />
                <div className={clsx([styles.link__typo])}>
                  <span data-content="Store" aria-hidden="true"></span>
                  Store
                </div>
              </a>
            </Link>
          </li>
          <li className={clsx([styles.sidebar__item])}>
            <Link href="/payments">
              <a className={clsx([styles.sidebar__link])}>
                <CircleDollar />
                <div className={clsx([styles.link__typo])}>
                  <span data-content="Payments" aria-hidden="true"></span>
                  Payments
                </div>
              </a>
            </Link>
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
              <ShoppingBag />
              <div className={clsx([styles.link__typo])}>
                <span data-content="Checkouts" aria-hidden="true"></span>
                Checkouts
              </div>
            </a>
          </li>
          <li className={clsx([styles.sidebar__item])}>
            <Link href="/transaction">
              <a className={clsx([styles.sidebar__link])}>
                <PieChart />
                <div className={clsx([styles.link__typo])}>
                  <span data-content="Transactions" aria-hidden="true"></span>
                  Transactions
                </div>
              </a>
            </Link>
          </li>
          <li className={clsx([styles.sidebar__item])}>
            <a className={clsx([styles.sidebar__link])}>
              <CogWheel />
              <div className={clsx([styles.link__typo])}>
                <span data-content="Settings" aria-hidden="true"></span>
                Settings
              </div>
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  )
}

export default Sidebar

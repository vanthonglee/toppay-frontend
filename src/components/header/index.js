import clsx from 'clsx'
import Link from 'next/link'

import {
  ChevronDown,
  Plus,
  RingBell,
  TopPayLogo,
  User
} from '@/components/icons'

import styles from './header.module.scss'

const Header = () => (
  <header className={clsx([styles.header])}>
    <Link href="/">
      <a className="flex items-center">
        <TopPayLogo />
        <span className="ml-1 font-extrabold">TOP PAY</span>
      </a>
    </Link>
    <div className={clsx([styles.header__right])}>
      <div className={clsx([styles.header__shop_name])}>
        <span className="mr-[7px]">Orangedroopy</span> <ChevronDown />
      </div>
      <div className={clsx([styles.header__notification])}>
        <RingBell className={clsx([styles.header__ring_bell])} />
      </div>
      <div className={clsx([styles.header__user_options])}>
        <img
          className="inline-block w-8 h-8 rounded-full ring-2 ring-white"
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt="avatar"
        />
        <div className={clsx([styles.header__user_sub_menu])}>
          <Link href="/store/new">
            <a className={clsx([styles.header__link])}>
              <Plus />
              Add New Shop
            </a>
          </Link>
          <Link href="/">
            <a className={clsx([styles.header__link])}>
              <User />
              Your account
            </a>
          </Link>
          <hr className={clsx([styles.line])} />
          <a className={clsx([styles.header__link])} href="/api/auth/logout">
            Sign out
          </a>
        </div>
      </div>
    </div>
  </header>
)

export default Header

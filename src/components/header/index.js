import { Plus, RingBell, TopPayLogo, User } from '@/components/icons'
import { useCallback, useEffect, useState } from 'react'

import Link from 'next/link'
import clsx from 'clsx'
import styles from './header.module.scss'
import { useRouter } from 'next/router'
import { useUser } from '@auth0/nextjs-auth0'

const Header = ({ hasNav = true }) => {
  const { user } = useUser()
  const [stores, setStores] = useState([])
  const router = useRouter()

  const getStores = useCallback(async () => {
    if (user) {
      const respone = await fetch('/api/store')
      const { result } = await respone.json()
      setStores(result)
    }
  }, [user])

  useEffect(() => {
    getStores()
  }, [user, getStores])

  const handleStoreChange = event => {
    event.preventDefault()

    router.push(`/?store=${event.target.value}`)
  }

  return (
    <header className={clsx([styles.header])}>
      <Link href="/">
        <a className="flex items-center">
          <TopPayLogo />
          <span className="ml-1 font-extrabold">TOP PAY</span>
        </a>
      </Link>
      {hasNav && (
        <div className={clsx([styles.header__right])}>
          <div className={clsx([styles.header__shop_name])}>
            {/* <span className="mr-[7px]">Orangedroopy</span> <ChevronDown /> */}
            <div className="relative inline-flex">
              <svg
                className="w-2 h-2 absolute top-0 right-0 m-4 pointer-events-none"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 412 232"
              >
                <path
                  d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z"
                  fill="#648299"
                  fillRule="nonzero"
                />
              </svg>
              <select
                className=" text-white h-10 pl-5 pr-10 bg-[#252626] hover:border-gray-400 focus:outline-none appearance-none"
                onChange={handleStoreChange}
                defaultValue={0}
              >
                {stores &&
                  stores.length > 0 &&
                  stores.map(item => (
                    <option key={item.store_id} value={item.store_id}>
                      {item.store_name}
                    </option>
                  ))}
              </select>
            </div>
          </div>
          <div className={clsx([styles.header__notification])}>
            <RingBell className={clsx([styles.header__ring_bell])} />
          </div>
          <div className={clsx([styles.header__user_options])}>
            <img
              className="inline-block w-8 h-8 rounded-full ring-2 ring-white"
              src={
                user?.picture ||
                'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
              }
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
              <a
                className={clsx([styles.header__link])}
                href="/api/auth/logout"
              >
                Sign out
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
export default Header

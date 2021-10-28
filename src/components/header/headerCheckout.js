import Link from 'next/link'
import { TopPayLogo } from '@/components/icons'
import clsx from 'clsx'
import styles from './header.module.scss'

const HeaderCheckout = () => {
  return (
    <header className={clsx([styles.header])}>
      <Link href="/">
        <a className="flex items-center">
          <TopPayLogo />
          <span className="ml-1 font-extrabold">TOP PAY</span>
        </a>
      </Link>
    </header>
  )
}
export default HeaderCheckout

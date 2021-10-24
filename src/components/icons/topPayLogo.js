import Image from 'next/image'

import topPayLogo from '../../../public/images/top-pay-logo-white.png'

const TopPayLogo = () => (
  <Image
    src={topPayLogo}
    alt="TopPay"
    width={33}
    height={29}
    // blurDataURL="data:..." automatically provided
    // placeholder="blur" // Optional blur-up while loading
  />
)

export default TopPayLogo

import React from 'react'

import { Header } from '@/components'

const CheckoutLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen font-san-mulish">
      <Header hasNav={false} />
      <main className="flex flex-grow h-full bg-[#F9FAFB]">
        <div className="mx-auto">{children}</div>
      </main>
    </div>
  )
}

export default CheckoutLayout

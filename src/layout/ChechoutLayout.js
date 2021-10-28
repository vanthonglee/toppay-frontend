import HeaderCheckout from '@/components/header/headerCheckout'
import React from 'react'

const CheckoutLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen font-san-mulish">
      <HeaderCheckout />
      <main className="flex flex-grow h-full bg-[#F9FAFB]">
        <div className="mx-auto">{children}</div>
      </main>
    </div>
  )
}

export default CheckoutLayout

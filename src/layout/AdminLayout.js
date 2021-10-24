import React from 'react'

import { Header, Sidebar } from '@/components'

const AdminLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen font-san-mulish">
      <Header />
      <main className="flex flex-grow h-full bg-[#F9FAFB]">
        <Sidebar />
        {children}
      </main>
    </div>
  )
}

export default AdminLayout

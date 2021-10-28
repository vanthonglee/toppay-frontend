import React from 'react'

import { UserProvider } from '@auth0/nextjs-auth0'
import { Header, Sidebar } from '@/components'

const AdminLayout = ({ children }) => {
  return (
    <UserProvider user={user}>
      <div className="flex flex-col min-h-screen font-san-mulish">
        <Header />
        <main className="flex flex-grow h-full bg-[#F9FAFB]">
          <Sidebar />
          {children}
        </main>
      </div>
    </UserProvider>
  )
}

export default AdminLayout

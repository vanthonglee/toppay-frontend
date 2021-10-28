import clsx from 'clsx'
import Head from 'next/head'
import { useCallback, useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import adminStyles from '@/styles/common/adminLayout.module.scss'
import globalStyles from '@/styles/common/global.module.scss'
export default function Store() {
  const [stores, setStores] = useState([])

  const getMyStore = useCallback(async () => {
    const respone = await fetch('/api/store', {
      method: 'GET'
    })
    const { result } = await respone.json()
    setStores(result)
  }, [])

  useEffect(() => {
    getMyStore()
  }, [getMyStore])

  const handleGenKey = async store => {
    const newKey = uuidv4()
    const newData = {
      owner: store['owner'],
      store_id: store['store_id'],
      store_name: store['store_name'],
      tokens: store['tokens'],
      api_key: newKey
    }
    const response = await fetch(`/api/store/${store.store_id}`, {
      method: 'PUT',
      body: JSON.stringify(newData)
    })
    const data = await response.json()
    if (data.status === 'OK') {
      setStores(prevState =>
        prevState.map(item => {
          if (item.store_id === store.store_id) {
            return { ...item, api_key: newKey }
          }
          return item
        })
      )
    }
  }

  return (
    <>
      <Head>
        <title>TopPay - Store</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className={clsx([adminStyles.main__container])}>
        <h1 className={clsx([globalStyles.h1])}>My Store</h1>

        <div className="mt-6 overflow-x-auto">
          <table className="w-full border-collapse table-auto">
            <thead>
              <tr className="text-sm font-medium text-left text-gray-700 rounded-lg">
                <th className="px-4 py-2 bg-gray-200">Name</th>
                <th className="px-4 py-2 bg-gray-200">API Key</th>
                <th className="px-4 py-2 bg-gray-200">Token</th>
              </tr>
            </thead>
            <tbody className="text-sm font-normal text-gray-700">
              {stores &&
                stores.map(store => (
                  <tr
                    key={store.store_id}
                    className="py-10 border-b border-gray-200 hover:bg-gray-100"
                  >
                    <td className="px-4 py-4">{store['store_name']}</td>
                    <td className="px-4 py-4">
                      {store['api_key']}
                      <button
                        onClick={() => handleGenKey(store)}
                        className="px-3 py-1 ml-2 text-blue-600 border rounded-xl hover:bg-gray-300"
                      >
                        Gen key
                      </button>
                    </td>
                    <td className="px-4 py-4">
                      {store['symbol']} - {store['network']}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  )
}

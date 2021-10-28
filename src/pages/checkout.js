import { ethers } from 'ethers'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useCallback, useEffect, useState } from 'react'
import Web3Modal from 'web3modal'

import topPayLogo from '../../public/images/logo-rgb.jpg'

const Checkout = () => {
  const router = useRouter()
  const [paymentInfo, setPaymentInfo] = useState(null)
  const [loading, setLoading] = useState(true)
  const [processing, setProcessing] = useState(false)
  const [token, setToken] = useState(false)
  const [contract, setContract] = useState(false)

  const { payment_id } = router.query
  const getPaymentInfo = useCallback(async () => {
    if (payment_id) {
      const response = await fetch(`/api/payment?payment_id=${payment_id}`, {
        method: 'GET'
      })
      const data = await response.json()
      setPaymentInfo(data.result)
      getTokenInfo(data.result['price_currency'], data.result['token_network'])
      getContractInfo(data.result['token_network'])

      setLoading(false)
    }
  }, [payment_id])

  const getContractInfo = async network => {
    const response = await fetch(`/api/contracts?network=${network}`)
    const data = await response.json()
    if (data) setContract(data)
  }

  const getTokenInfo = async (symbol, network) => {
    const response = await fetch(
      `/api/tokens?symbol=${symbol}&network=${network}`
    )
    const { result } = await response.json()

    if (result && result.length > 0) setToken(result[0])
  }

  useEffect(() => {
    getPaymentInfo()
  }, [getPaymentInfo])

  const handleCheckout = async () => {
    setProcessing(true)
    try {
      const web3Modal = new Web3Modal({ theme: 'dark' })
      const connection = await web3Modal.connect()
      const provider = new ethers.providers.Web3Provider(connection)
      const signer = provider.getSigner()

      const tokenContract = new ethers.Contract(
        token.address,
        JSON.parse(token.abi).abi,
        signer
      )

      const txRespone = await tokenContract.approve(
        contract.address,
        ethers.utils.parseUnits(paymentInfo.price_amount.toString(), 18)
      )
      const approved = await txRespone.wait()
      if (approved) {
        const paymentContract = new ethers.Contract(
          contract.address,
          contract.abi,
          signer
        )

        const txContract = await paymentContract.clientPay(
          token.address,
          paymentInfo['receive_address'],
          ethers.utils.parseUnits(paymentInfo.price_amount.toString(), 18),
          paymentInfo.payment_id
        )
        const result = await txContract.wait()
        if (result)
          setPaymentInfo(prevState => ({
            ...prevState,
            payment_status: 'completed'
          }))
      }
    } catch (error) {
      alert(error.message)
    } finally {
      setProcessing(false)
    }
  }

  return (
    <>
      <Head>
        <title>TopPay - Checkout</title>
      </Head>

      <main>
        <div className="w-full py-8 my-20 bg-white rounded-lg shadow-lg px-14">
          <div className="flex justify-center -mt-16">
            <div className="w-32 h-32 rounded-full border-8 border-[#F9FAFB]">
              <Image
                src={topPayLogo}
                alt="TopPay"
                className="object-cover w-20 h-20 rounded-full "
              />
            </div>
          </div>

          {(loading || !paymentInfo) && (
            <>
              <div className="bg-gray-200 h-52 sm:h-full sm:w-72 rounded-xl animate-pulse"></div>
              <div className="flex flex-col flex-1 gap-5 sm:p-2">
                <div className="flex flex-col flex-1 gap-3">
                  <div className="w-full bg-gray-200 animate-pulse h-14 rounded-2xl"></div>
                  <div className="w-full h-3 bg-gray-200 animate-pulse rounded-2xl"></div>
                  <div className="w-full h-3 bg-gray-200 animate-pulse rounded-2xl"></div>
                  <div className="w-full h-3 bg-gray-200 animate-pulse rounded-2xl"></div>
                  <div className="w-full h-3 bg-gray-200 animate-pulse rounded-2xl"></div>
                </div>
              </div>
            </>
          )}

          {paymentInfo && (
            <>
              <div className="py-2 mb-2 ">
                <h2 className="my-2 text-3xl font-semibold text-center text-blue-800 uppercase">
                  {paymentInfo['store_name']}
                </h2>
                <p className="mt-3 text-sm font-bold tracking-wide text-center text-gray-600">
                  Need complete before: {paymentInfo['payment_end_time']}
                </p>
              </div>
              <div className="flex justify-between mb-8">
                <div className="">
                  <div className="items-center mb-2 md:mb-1 md:flex">
                    <label className="block w-48 text-sm font-bold tracking-wide text-gray-800 uppercase">
                      Payment No.
                    </label>
                    <span className="hidden inline-block mr-4 md:block">:</span>
                    <div className="flex-1">
                      <div className="w-48 px-4 py-2 leading-tight text-gray-700 bg-gray-200 border-2 border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-blue-500">
                        {paymentInfo['payment_id']}
                      </div>
                    </div>
                  </div>
                  <div className="items-center mb-2 md:mb-1 md:flex">
                    <label className="block w-48 text-sm font-bold tracking-wide text-gray-800 uppercase">
                      Payment Date.
                    </label>
                    <span className="hidden inline-block mr-4 md:block">:</span>
                    <div className="flex-1">
                      <div className="w-48 px-4 py-2 leading-tight text-gray-700 bg-gray-200 border-2 border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-blue-500">
                        {paymentInfo['payment_time']}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-between mb-8">
                <div className="">
                  <div className="items-center mb-2 md:mb-1 md:flex">
                    <label className="block w-48 text-sm font-bold tracking-wide text-gray-800 uppercase">
                      Store order No.
                    </label>
                    <span className="hidden inline-block mr-4 md:block">:</span>
                    <div className="flex-1">
                      <div className="w-48 px-4 py-2 leading-tight text-gray-700 bg-gray-200 border-2 border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-blue-500">
                        {paymentInfo['order_id']}
                      </div>
                    </div>
                  </div>
                  <div className="items-center mb-2 md:mb-1 md:flex">
                    <label className="block w-48 text-sm font-bold tracking-wide text-gray-800 uppercase">
                      Amount
                    </label>
                    <span className="hidden inline-block mr-4 md:block">:</span>
                    <div className="flex-1">
                      <div className="w-48 px-4 py-2 leading-tight text-gray-700 bg-gray-200 border-2 border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-blue-500">
                        {paymentInfo['price_amount']}
                      </div>
                    </div>
                  </div>
                  <div className="items-center mb-2 md:mb-1 md:flex">
                    <label className="block w-48 text-sm font-bold tracking-wide text-gray-800 uppercase">
                      currency
                    </label>
                    <span className="hidden inline-block mr-4 md:block">:</span>
                    <div className="flex-1">
                      <div className="w-48 px-4 py-2 leading-tight text-gray-700 bg-gray-200 border-2 border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-blue-500">
                        {paymentInfo['price_currency']} -{' '}
                        {paymentInfo['token_network']}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center mt-4">
                <button
                  className="flex items-center justify-center w-full p-2 text-xl font-medium text-white uppercase bg-blue-600 disabled:opacity-50"
                  onClick={handleCheckout}
                  disabled={
                    processing ||
                    paymentInfo['payment_status'] === 'failed' ||
                    paymentInfo['payment_status'] === 'completed'
                  }
                >
                  {processing && (
                    <svg
                      className="w-5 h-5 mr-3 -ml-1 text-white animate-spin"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                  )}
                  {paymentInfo['payment_status'] == 'completed'
                    ? 'Completed'
                    : paymentInfo['payment_status'] === 'waiting'
                    ? processing
                      ? 'Processing ...'
                      : 'Complete checkout'
                    : 'Payment expired'}
                </button>
              </div>
            </>
          )}
        </div>
        <div className="flex justify-center ">
          Powered by{' '}
          <a
            target="_blank"
            href="https://toppay.store"
            rel="noreferrer"
            className="ml-1 text-blue-600"
          >
            Top Pay
          </a>
        </div>
      </main>
    </>
  )
}

Checkout.layout = 'L2'
export default Checkout

/* eslint-disable react-hooks/rules-of-hooks */
import clsx from 'clsx'
import Head from 'next/head'
import { useState } from 'react'
import globalStyles from '@/styles/common/global.module.scss'
import styles from '@/styles/payment.module.scss'

export default function payments() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [selectedCoins, updateCoins] = useState([])

  const onSelectCoin = coin => {
    selectedCoins.some(item => item === coin)
      ? updateCoins(selectedCoins.filter(item => item !== coin))
      : updateCoins([...selectedCoins, coin])
  }

  const [setUpMyOwnCoin, updateSetUpMyOwnCoin] = useState(false)
  const [contractAddress, updateContractAddress] = useState(
    '0x31471E0791fCdbE82fbF4C44943255e923F1b794'
  )
  const [contractABI, updateContractABI] =
    useState(`[{"inputs":[],"payable":false,"stateMutability":"nonpayable","type
  ":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,
  "internalType":"address","name":"owner","type":"address"},{"
  indexed":true,"internalType":"address","name":"spender","ty.....`)

  return (
    <>
      <Head>
        <title>TopPay - Payments</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className={clsx([styles.payment__container])}>
        <div>
          <h1 className={clsx([globalStyles.h1])}>Payments Senting</h1>
          {/* Popular Coin */}
          <div className={clsx([styles.payment__option_container])}>
            <div className={clsx([styles.payment__option_explanation])}>
              <h3 className={clsx([styles.option__title])}>Popular coin</h3>
              <p className={clsx([styles.option__description])}>
                Unique ID used for creation of payments and monitoring their
                status.
              </p>
            </div>
            {/* Choose Coin */}
            <div className={clsx([styles.payment__form__options])}>
              <span
                className={clsx({
                  [styles.option__coin]: true,
                  [styles.selected]: selectedCoins.indexOf('BTC') > -1
                })}
                onClick={() => onSelectCoin('BTC')}
              >
                BTC
              </span>
              <span
                className={clsx({
                  [styles.option__coin]: true,
                  [styles.selected]: selectedCoins.indexOf('ETH') > -1
                })}
                onClick={() => onSelectCoin('ETH')}
              >
                ETH
              </span>
              <span
                className={clsx({
                  [styles.option__coin]: true,
                  [styles.selected]: selectedCoins.indexOf('LTC') > -1
                })}
                onClick={() => onSelectCoin('LTC')}
              >
                LTC
              </span>
            </div>
          </div>
          {/* Stable Coin */}
          <div className={clsx([styles.payment__option_container])}>
            <div className={clsx([styles.payment__option_explanation])}>
              <h3 className={clsx([styles.option__title])}>Stable coin</h3>
              <p className={clsx([styles.option__description])}>
                This is the setup to sync orders from your store
              </p>
            </div>
            {/* Choose Coin */}
            <div className={clsx([styles.payment__form__options])}>
              <span
                className={clsx({
                  [styles.option__coin]: true,
                  [styles.selected]: selectedCoins.indexOf('USDTTRC20') > -1
                })}
                onClick={() => onSelectCoin('USDTTRC20')}
              >
                USDTTRC20
              </span>
              <span
                className={clsx({
                  [styles.option__coin]: true,
                  [styles.selected]: selectedCoins.indexOf('TUSD') > -1
                })}
                onClick={() => onSelectCoin('TUSD')}
              >
                TUSD
              </span>
              <span
                className={clsx({
                  [styles.option__coin]: true,
                  [styles.selected]: selectedCoins.indexOf('DAI') > -1
                })}
                onClick={() => onSelectCoin('DAI')}
              >
                DAI
              </span>
            </div>
          </div>
          {/* Own coin */}
          <div className={clsx([styles.payment__option_container])}>
            <div className={clsx([styles.payment__option_explanation])}>
              <h3 className={clsx([styles.option__title])}>Own coin</h3>
              <p className={clsx([styles.option__description])}>
                This is the setup to sync orders from your store
              </p>
            </div>
            {/* Choose Coin */}
            <div
              className={clsx([
                styles.payment__form__options,
                styles.form__set_up_coin
              ])}
            >
              <div className={clsx([styles.option__checkbox])}>
                <input
                  name="setUpCoin"
                  type="radio"
                  id="i-dont-have-my-own-coin"
                  checked={setUpMyOwnCoin === false}
                  onClick={() => updateSetUpMyOwnCoin(false)}
                />
                <label htmlFor="i-dont-have-my-own-coin">
                  I don’t have my own coin
                </label>
              </div>
              <div className={clsx([styles.option__checkbox])}>
                <input
                  name="setUpCoin"
                  type="radio"
                  id="i-want-to-setup-my-own-coin"
                  checked={setUpMyOwnCoin === true}
                  onClick={() => updateSetUpMyOwnCoin(true)}
                />
                <label htmlFor="i-want-to-setup-my-own-coin">
                  I want to setup my own coin
                </label>
              </div>
              <div
                className={clsx([
                  styles.input__wrapper,
                  styles.option__contract_address
                ])}
              >
                <label htmlFor="contract-address">Contract Address</label>
                <input
                  id="contract-address"
                  placeholder="input here"
                  value={contractAddress}
                  onChange={e => updateContractAddress(e.target.value)}
                />
              </div>
              <div
                className={clsx([
                  styles.input__wrapper,
                  styles.option__contract_api
                ])}
              >
                <label htmlFor="contract-abi">Contract ABI</label>
                <textarea
                  name="description"
                  defaultValue={contractABI}
                  onChange={e => updateContractABI(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className={clsx(['flex gap-2 justify-end mt-5'])}>
            <button className={clsx([styles.btn, styles.btn__discard])}>
              Discard
            </button>
            <button className={clsx([styles.btn, styles.btn__save])}>
              Save
            </button>
          </div>
        </div>
      </section>
    </>
  )
}

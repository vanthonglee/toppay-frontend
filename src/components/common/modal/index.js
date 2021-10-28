import clsx from 'clsx'
import React, { useEffect, useRef, useState } from 'react'

import styles from './modal.module.scss'
import Portal from './portal'

export const PortalModal = ({
  show,
  locked = false,
  name,
  onClose,
  children
}) => {
  const modal = useRef(null)
  const [active, setActive] = useState(false)

  const [isBrowser, setIsBrowser] = useState(false)
  useEffect(() => {
    setIsBrowser(true)
  }, [])

  useEffect(() => {
    if (isBrowser) {
      const { current } = modal

      const transitionEnd = () => setActive(show)

      const keyHandler = e => !locked && [27].indexOf(e.which) >= 0 && onClose()

      const clickHandler = e => {
        !locked && e.target === current && onClose()
      }

      if (current) {
        current.addEventListener('transitionend', transitionEnd)
        current.addEventListener('click', clickHandler)
        window.addEventListener('keyup', keyHandler)
      }

      if (show) {
        window.setTimeout(() => {
          document.activeElement.blur()
          setActive(show)
          // document.querySelector('#root').setAttribute('inert', 'true')
        }, 10)
      }

      return () => {
        if (current) {
          current.removeEventListener('transitionend', transitionEnd)
          current.removeEventListener('click', clickHandler)
        }

        // document.querySelector('#root').removeAttribute('inert')
        window.removeEventListener('keyup', keyHandler)
      }
    }
  }, [show, locked, onClose, isBrowser])

  return (
    <React.Fragment>
      {show || active ? (
        <Portal className="modal-portal">
          <div
            ref={modal}
            className={clsx([
              styles.modal,
              name,
              show && active ? styles.active : ''
            ])}
          >
            <div className={clsx([styles.modal__container])}>
              <div className={clsx([styles.modal__header])}>
                <h3 className={styles.modal__title}>Choose your integration</h3>
                <span
                  onClick={onClose}
                  className={clsx([styles.icon__close, 'ml-3'])}
                >
                  {' '}
                  &times;
                </span>
              </div>
              <hr />

              <div className={clsx([styles.modal__content])}>{children}</div>
            </div>
          </div>
        </Portal>
      ) : null}
    </React.Fragment>
  )
}

export default PortalModal

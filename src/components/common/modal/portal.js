import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'

export default function Portal({ children, parent, className }) {
  const [isBrowser, setIsBrowser] = useState(false)
  useEffect(() => {
    setIsBrowser(true)
  }, [])

  const el = React.useMemo(() => document.createElement('div'), [])
  React.useEffect(() => {
    const target = parent && parent.appendChild ? parent : document.body
    const classList = ['portal-container']
    if (className) className.split(' ').forEach(item => classList.push(item))
    classList.forEach(item => el.classList.add(item))
    target.appendChild(el)
    return () => {
      target.removeChild(el)
    }
  }, [el, parent, className])

  if (isBrowser) {
    return ReactDOM.createPortal(children, el)
  } else {
    return null
  }
}

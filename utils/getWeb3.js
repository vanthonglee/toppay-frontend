import { ethers } from 'ethers'

const getWeb3 = async () => {
  // Wait for loading completion to avoid race conditions with web3 injection timing.
  if (window.ethereum) {
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    try {
      // Request account access if needed
      await window.ethereum.request({ method: 'eth_requestAccounts' })
      // Acccounts now exposed
      return provider
    } catch (error) {
      console.error(error)
    }
  }
  // Fallback to localhost; use dev console port by default...
  else {
    console.log('No web3 instance injected, using Local web3.')
  }
}

export default { getWeb3 }

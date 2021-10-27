import namor from 'namor'

const range = len => {
  const arr = []
  for (let i = 0; i < len; i++) {
    arr.push(i)
  }
  return arr
}

const statusArray = [
  'Paid',
  'Confirm payment',
  'Cancel',
  'Paid',
  'Partially paid',
  'Awaiting payment',
  'Debt'
]
const newTransaction = () => {
  const transactionStatus = Math.round(Math.random() * 6)
  return {
    id: Math.floor(Math.random() * 1000),
    address: namor.generate({ words: 1, numbers: 0 }),
    amount: Math.floor(Math.random() * 1000),
    txID: namor.generate({ words: 1, numbers: 0 }),
    created: `${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`,
    // eslint-disable-next-line security/detect-object-injection
    status: statusArray[transactionStatus]
  }
}

export default function makeData(...lens) {
  const makeDataLevel = (depth = 0) => {
    const len = lens[depth]
    return range(len).map(d => {
      return {
        ...newTransaction(),
        subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined
      }
    })
  }

  return makeDataLevel()
}

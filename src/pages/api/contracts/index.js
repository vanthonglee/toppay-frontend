const contracts = {
  ERC20: {
    address: '0xC28d8a52322349A29d74b2EFdfddf7b910b503af',
    abi: [
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: 'address',
            name: '_from',
            type: 'address'
          },
          {
            indexed: false,
            internalType: 'address',
            name: '_to',
            type: 'address'
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: '_amount',
            type: 'uint256'
          },
          {
            indexed: false,
            internalType: 'uint32',
            name: '_orderId',
            type: 'uint32'
          }
        ],
        name: 'PaymentFail',
        type: 'event'
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: 'address',
            name: '_from',
            type: 'address'
          },
          {
            indexed: false,
            internalType: 'address',
            name: '_to',
            type: 'address'
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: '_amount',
            type: 'uint256'
          },
          {
            indexed: false,
            internalType: 'uint32',
            name: '_orderId',
            type: 'uint32'
          }
        ],
        name: 'PaymentSuccess',
        type: 'event'
      },
      {
        inputs: [
          {
            internalType: 'contract IERC20',
            name: 'token',
            type: 'address'
          }
        ],
        name: 'checkAllowance',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function'
      },
      {
        inputs: [
          {
            internalType: 'contract IERC20',
            name: 'token',
            type: 'address'
          },
          { internalType: 'address', name: '_to', type: 'address' },
          { internalType: 'uint256', name: '_amount', type: 'uint256' },
          { internalType: 'uint32', name: '_orderId', type: 'uint32' }
        ],
        name: 'clientPay',
        outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
        stateMutability: 'nonpayable',
        type: 'function'
      },
      {
        inputs: [{ internalType: 'uint32', name: '_orderId', type: 'uint32' }],
        name: 'getPaymentInfo',
        outputs: [
          {
            components: [
              { internalType: 'address', name: 'payer', type: 'address' },
              { internalType: 'uint256', name: 'amount', type: 'uint256' }
            ],
            internalType: 'struct PaymentGate.PayInfo',
            name: '',
            type: 'tuple'
          }
        ],
        stateMutability: 'view',
        type: 'function'
      },
      {
        inputs: [{ internalType: 'uint32', name: '', type: 'uint32' }],
        name: 'payments',
        outputs: [
          { internalType: 'address', name: 'payer', type: 'address' },
          { internalType: 'uint256', name: 'amount', type: 'uint256' }
        ],
        stateMutability: 'view',
        type: 'function'
      }
    ]
  },
  BEP20: {
    address: '0xFfBdaca38b225912e3a39453aCD129C70F8c20Bc',
    abi: [
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: 'address',
            name: '_from',
            type: 'address'
          },
          {
            indexed: false,
            internalType: 'address',
            name: '_to',
            type: 'address'
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: '_amount',
            type: 'uint256'
          },
          {
            indexed: false,
            internalType: 'uint32',
            name: '_orderId',
            type: 'uint32'
          }
        ],
        name: 'PaymentFail',
        type: 'event'
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: 'address',
            name: '_from',
            type: 'address'
          },
          {
            indexed: false,
            internalType: 'address',
            name: '_to',
            type: 'address'
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: '_amount',
            type: 'uint256'
          },
          {
            indexed: false,
            internalType: 'uint32',
            name: '_orderId',
            type: 'uint32'
          }
        ],
        name: 'PaymentSuccess',
        type: 'event'
      },
      {
        inputs: [
          {
            internalType: 'contract IBEP20',
            name: 'token',
            type: 'address'
          }
        ],
        name: 'checkAllowance',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function'
      },
      {
        inputs: [
          {
            internalType: 'contract IBEP20',
            name: 'token',
            type: 'address'
          },
          { internalType: 'address', name: '_to', type: 'address' },
          { internalType: 'uint256', name: '_amount', type: 'uint256' },
          { internalType: 'uint32', name: '_orderId', type: 'uint32' }
        ],
        name: 'clientPay',
        outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
        stateMutability: 'nonpayable',
        type: 'function'
      },
      {
        inputs: [{ internalType: 'uint32', name: '_orderId', type: 'uint32' }],
        name: 'getPaymentInfo',
        outputs: [
          {
            components: [
              { internalType: 'address', name: 'payer', type: 'address' },
              { internalType: 'uint256', name: 'amount', type: 'uint256' }
            ],
            internalType: 'struct PaymentGate.PayInfo',
            name: '',
            type: 'tuple'
          }
        ],
        stateMutability: 'view',
        type: 'function'
      },
      {
        inputs: [{ internalType: 'uint32', name: '', type: 'uint32' }],
        name: 'payments',
        outputs: [
          { internalType: 'address', name: 'payer', type: 'address' },
          { internalType: 'uint256', name: 'amount', type: 'uint256' }
        ],
        stateMutability: 'view',
        type: 'function'
      }
    ]
  }
}

export default function handler(req, res) {
  const { network } = req.query

  res.status(200).json(contracts[network])
}

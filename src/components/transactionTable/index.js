/* eslint-disable react/jsx-key */
import clsx from 'clsx'
import { useCallback, useMemo } from 'react'
import { useFlexLayout, useTable } from 'react-table'
import { useWindowSize } from 'react-use'
import { FixedSizeList } from 'react-window'

import makeData from './makdeData'
import styles from './transactionTable.module.scss'

const TransactionTable = () => {
  const columns = useMemo(
    // eslint-disable-next-line sonarjs/cognitive-complexity
    () => [
      {
        Header: 'ID',
        accessor: (row, i) => (i + 1) * 1000,
        width: 120
      },
      {
        Header: 'Address',
        accessor: 'address',
        width: 120,
        Cell: ({ value }) => (
          <a
            target="_blank"
            href="google.com"
            className={clsx(styles.cell__address)}
          >
            {value}
          </a>
        )
      },
      {
        Header: 'Amount',
        accessor: 'amount',
        width: 120,
        Cell: ({ value }) => <div>${value}</div>
      },
      {
        Header: 'TX ID',
        accessor: 'txID',
        width: 120,
        // eslint-disable-next-line sonarjs/no-identical-functions
        Cell: ({ value }) => (
          <a
            target="_blank"
            href="google.com"
            className={clsx(styles.cell__address)}
          >
            {value}
          </a>
        )
      },
      {
        Header: 'Created',
        accessor: 'created',
        width: 160
      },
      {
        Header: 'Status',
        accessor: 'status',
        width: 160,
        Cell: ({ value }) => {
          const changeBgColorForStatus = status => {
            return status === 'Paid'
              ? 'text-[#00ABFB] bg-[#E6FBFF] border-[#7AE2FF]'
              : status === 'Confirm payment'
              ? 'text-[#7F5345] bg-[#F2EBE4] border-[#CCC5C0]'
              : status === 'Cancel'
              ? // eslint-disable-next-line sonarjs/no-duplicate-string
                'text-[#3F51B5] bg-[#E6EBF5] border-[#8A99CF]'
              : status === 'Partially paid'
              ? 'text-[#3F51B5] bg-[#E6EBF5] border-[#8A99CF]'
              : status === 'Awaiting payment'
              ? 'text-[#13C2C2] bg-[#E6FFFB] border-[#87E8DE]'
              : status === 'Awaiting payment'
              ? 'text-[#3F51B5] bg-[#E6EBF5] border-[#8A99CF]'
              : ''
          }
          return (
            <div
              className={clsx([
                styles.circle__status,
                changeBgColorForStatus(value)
              ])}
            >
              {value}
            </div>
          )
        }
      }
    ],
    []
  )

  const data = useMemo(() => makeData(500), [])

  return <Table columns={columns} data={data} />
}

function Table({ columns, data }) {
  // Use the state and functions returned from useTable to build your UI

  const defaultColumn = useMemo(
    () => ({
      width: 150
    }),
    []
  )

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    totalColumnsWidth,
    prepareRow
  } = useTable(
    {
      columns,
      data,
      defaultColumn
    },
    useFlexLayout
  )

  const RenderRow = useCallback(
    ({ index, style }) => {
      // eslint-disable-next-line security/detect-object-injection
      const row = rows[index]
      prepareRow(row)
      return (
        <div
          {...row.getRowProps({
            style
          })}
          className={styles.tbody__tr}
        >
          {row.cells.map(cell => {
            return (
              <div
                {...cell.getCellProps()}
                className={styles.tbody__td}
                // style={{ display: 'flex', alignItems: 'center', width: '100%' }}
              >
                {cell.render('Cell')}
              </div>
            )
          })}
        </div>
      )
    },
    [prepareRow, rows]
  )

  /**
   * Get Height Of Window
   */
  const { height } = useWindowSize()

  // Render the UI for your table
  return (
    <div {...getTableProps()} className={clsx([styles['transaction__table']])}>
      <div
        className={clsx([styles['table__header'], `pr-[15px]`])}
        // style={scrollBarSize ? { paddingRight: scrollBarSize } : {}}
      >
        {headerGroups.map(headerGroup => (
          <div
            {...headerGroup.getHeaderGroupProps()}
            className={clsx([styles['tr']])}
          >
            {headerGroup.headers.map(column => (
              <div
                {...column.getHeaderProps()}
                className={clsx([styles['th']])}
              >
                {column.render('Header')}
              </div>
            ))}
          </div>
        ))}
      </div>

      <div {...getTableBodyProps()} className={clsx([styles['table__body']])}>
        <FixedSizeList
          height={height - 450}
          itemCount={rows.length}
          itemSize={48}
          width={totalColumnsWidth}
          className={clsx([styles['table__body']])}
        >
          {RenderRow}
        </FixedSizeList>
      </div>
    </div>
  )
}

export default TransactionTable

/* eslint-disable react/jsx-key */
import clsx from 'clsx'
import { useCallback, useEffect, useMemo } from 'react'
import { useFlexLayout, useTable } from 'react-table'
import { FixedSizeList } from 'react-window'

import makeData from './makdeData'
import scrollbarWidth from './scrollbarWidth'
import styles from './transactionTable.module.scss'

const TransactionTable = () => {
  const columns = useMemo(
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
        width: 160
      }
    ],
    []
  )

  const data = useMemo(() => makeData(100000), [])

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

  let scrollBarSize = 0
  if (typeof window !== 'undefined') {
    // browser code
    scrollBarSize = scrollbarWidth()
  }
  // useEffect(() => {
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // })

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
      const row = rows[index]
      prepareRow(row)
      return (
        <div
          {...row.getRowProps({
            style
          })}
          className="tr"
        >
          {row.cells.map(cell => {
            return (
              <div {...cell.getCellProps()} className="td">
                {cell.render('Cell')}
              </div>
            )
          })}
        </div>
      )
    },
    [prepareRow, rows]
  )

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
          height={400}
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

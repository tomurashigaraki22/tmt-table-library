import React, { useState, useEffect } from 'react'

export function Table({
  columns,
  data,
  initialSortColumn = '',
  initialSortDirection = 'asc',
  enableSearch = false,
  enableShadow = false,
  maxWidth = '100%',
  maxHeight = '400px',
  customStyles,
  theme = 'light',
}) {
  const [sortedData, setSortedData] = useState(data)
  const [sortConfig, setSortConfig] = useState({
    key: initialSortColumn,
    direction: initialSortDirection,
  })
  const [searchText, setSearchText] = useState('')
  const [filteredData, setFilteredData] = useState(data)

  const sortData = (key) => {
    const direction =
      sortConfig.key === key && sortConfig.direction === 'asc' ? 'desc' : 'asc'
    setSortConfig({ key, direction })

    const sortedArray = [...filteredData].sort((a, b) => {
      if (a[key] < b[key]) return direction === 'asc' ? -1 : 1
      if (a[key] > b[key]) return direction === 'asc' ? 1 : -1
      return 0
    })
    setSortedData(sortedArray)
  }

  const searchData = (text) => {
    const lowercasedText = text.toLowerCase()
    const filteredArray = data.filter((row) =>
      columns.some((column) =>
        row[column.key]?.toString().toLowerCase().includes(lowercasedText)
      )
    )
    setFilteredData(filteredArray)
  }

  useEffect(() => {
    if (searchText !== '') {
      searchData(searchText)
    } else {
      setFilteredData(data)
    }
  }, [searchText, data])

  useEffect(() => {
    setSortedData(filteredData)
  }, [filteredData])

  const getTableWrapperClassName = () => {
    let className = 'w-full overflow-hidden rounded-lg'
    className += theme === 'dark' ? ' bg-gray-800' : ' bg-white'
    if (enableShadow) className += ' shadow-lg'
    return className
  }

  const getInputClassName = () => {
    let className = 'w-full rounded-md border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
    className += theme === 'dark'
      ? ' border-gray-600 bg-gray-700 text-white'
      : ' border-gray-300 bg-white text-gray-900'
    return className
  }

  const getHeaderRowClassName = () => {
    let className = 'border-b text-left'
    className += theme === 'dark' ? ' border-gray-600' : ' border-gray-200'
    return className
  }

  const getHeaderCellClassName = () => {
    let className = 'cursor-pointer p-4 font-semibold transition-colors duration-200'
    className += theme === 'dark'
      ? ' bg-gray-700 text-white hover:bg-gray-600'
      : ' bg-gray-50 text-gray-700 hover:bg-gray-100'
    return className
  }

  const getBodyRowClassName = (rowIndex) => {
    let className = 'transition-colors duration-200'
    className += theme === 'dark'
      ? ' border-gray-600 text-gray-200 hover:bg-gray-700'
      : ' border-gray-200 text-gray-700 hover:bg-gray-50'
    if (rowIndex !== sortedData.length - 1) className += ' border-b'
    return className
  }

  const getBodyCellClassName = (rowIndex) => {
    let className = 'p-4'
    if (rowIndex === sortedData.length - 1) className += ' pb-8' // Add extra padding to the bottom of the last row
    return className
  }

  return (
    <div
      className={getTableWrapperClassName()}
      style={{ maxWidth, maxHeight, ...customStyles }}
    >
      {enableSearch && (
        <div className="p-4">
          <input
            type="text"
            placeholder="Search..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className={getInputClassName()}
          />
        </div>
      )}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className={getHeaderRowClassName()}>
              {columns.map((column) => (
                <th
                  key={column.key}
                  onClick={() => sortData(column.key)}
                  className={getHeaderCellClassName()}
                >
                  <div className="flex items-center justify-between">
                    <span>{column.title}</span>
                    {sortConfig.key === column.key && (
                      <span className="ml-2">
                        {sortConfig.direction === 'asc' ? '▲' : '▼'}
                      </span>
                    )}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {sortedData.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className={getBodyRowClassName(rowIndex)}
              >
                {columns.map((column) => (
                  <td key={column.key} className={getBodyCellClassName(rowIndex)}>
                    {row[column.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}


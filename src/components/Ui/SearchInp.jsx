import React from 'react'

import { Input } from 'antd';

const { Search } = Input;

const SearchInp = ({ setSearch }) => {
  const onSearch = (value) => {
    setSearch(value)
  }
  return (
    <div>
      <Search
        placeholder="Search any gifs..."
        allowClear
        enterButton="Search"
        size="large"
        onSearch={onSearch}
        style={{ width: "100%", margin: "10px 0" }}
      />
    </div>
  )
}

export default SearchInp
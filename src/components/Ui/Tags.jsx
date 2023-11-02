import React from 'react'

import { Space, Tag } from 'antd'

const Tags = ({ setSearch }) => {
  return (
    <Space size={[0,4]} wrap>
      <Tag onClick={() => setSearch("dog")} style={{cursor: "pointer", padding: "8px 12px" }} color="magenta">dog</Tag>
      <Tag onClick={() => setSearch("cat")} style={{cursor: "pointer", padding: "8px 12px" }} color="red">cat</Tag>
      <Tag onClick={() => setSearch("car")} style={{cursor: "pointer", padding: "8px 12px" }} color="volcano">car</Tag>
      <Tag onClick={() => setSearch("baby")} style={{cursor: "pointer", padding: "8px 12px" }} color="orange">baby</Tag>
      <Tag onClick={() => setSearch("bmw")} style={{cursor: "pointer", padding: "8px 12px" }} color="gold">bmw</Tag>
      <Tag onClick={() => setSearch("boy")} style={{cursor: "pointer", padding: "8px 12px" }} color="lime">boy</Tag>
      <Tag onClick={() => setSearch("girl")} style={{cursor: "pointer", padding: "8px 12px" }} color="green">girl</Tag>
      <Tag onClick={() => setSearch("programming")} style={{cursor: "pointer", padding: "8px 12px" }} color="blue">programming</Tag>
      <Tag onClick={() => setSearch("cooking")} style={{cursor: "pointer", padding: "8px 12px" }} color="pink">cooking</Tag>
      <Tag onClick={() => setSearch("fun")} style={{cursor: "pointer", padding: "8px 12px" }} color="cyan">fun</Tag>
      <Tag onClick={() => setSearch("shape")} style={{cursor: "pointer", padding: "8px 12px" }} color="yellow">shape</Tag>
      <Tag onClick={() => setSearch("school")} style={{cursor: "pointer", padding: "8px 12px" }} color="gray">school</Tag>
    </Space>
  )
}

export default Tags
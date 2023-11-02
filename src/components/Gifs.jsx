import React from 'react'
import { Col, Divider, Image, Row } from 'antd'

const Gifs = ({ gifs }) => {
  return (
    <div>
      <Divider orientation="left" style={{ color: "white"}}>Gifs takes minutes for that be patient !</Divider>
      <Row gutter={16}>
        {
          gifs.map((gif, i) => (
            <Col key={i} span={6} style={{ margin: "6px 0" }}>
              <Image src={gif.webp} width={gif.width} />
            </Col>
          ))
        }
      </Row>
    </div>
  )
}

export default Gifs
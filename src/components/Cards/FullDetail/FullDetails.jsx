import { Card } from 'antd'
import Meta from 'antd/es/card/Meta'
import React from 'react'
import "./FullDetails.css"

const FullDetails = ({ data }) => {
    const { image, price, title, brand, model, color, discount } = data;
    // console.log(data.discount)
    return (
        <div className='detail-card'>
            <Card
                hoverable
                style={{ width: 300 }}
                cover={<div className='img-dis'><img alt="example" className='img-dis' src={image} /><button className='discount'>Discount: {discount == undefined ? "0" : discount}%</button></div>}
            >
                <h1 className='deta-head'>Details:</h1>
                <p className='price'>${price}</p>
                <Meta title={`Model: ${model}`} />
                <p className='brand com'>Company: {brand}</p>
                <p className='specs com'>Specification: {title}</p>
                <p className='color com'>Color: {color}</p>
            </Card>
        </div>
    )
}

export default FullDetails

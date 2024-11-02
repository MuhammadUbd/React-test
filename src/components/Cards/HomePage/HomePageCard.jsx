import { Button, Card, Modal } from 'antd'
import Meta from 'antd/es/card/Meta'
import React, { useState } from 'react'
import "./HomePageCard.css"
import { useNavigate } from 'react-router-dom'

const HomePageCard = ({ data }) => {
    const navigate = useNavigate()
    const { price, title, category, image, model, brand, id } = data;
    const realbr = brand?.toUpperCase()
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <>
            <div className='homeCard-wrapper'>
                <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={<img alt="example" src={image} />}
                >
                    <div className='cardDetails'>
                        <p className='price'>${price}</p>
                        <p className='cat'>Category: {category}</p>
                        <Meta title={title} />
                        <Button type="secondary" className='view-btn' onClick={showModal}>
                            View Product
                        </Button>
                    </div>
                </Card>
            </div>
            <Modal title={`Model: ${model}`} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <p className='mod-details'>Specification: {title}</p>
                <p className='mod-details'>Price: ${price}</p>
                <p className='mod-details'>Brand: {realbr}</p>
                <p className='mod-details' onClick={() => navigate(`/category/${category}/${id}`)}><a>Details</a></p>
                <img src={image} className='small' alt="" />
            </Modal>
        </>
    )
}

export default HomePageCard

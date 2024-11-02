import { Button, Card, Modal } from 'antd';
import "./ProductCard.css"
import Meta from 'antd/es/card/Meta';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


const ProductCard = ({ value }) => {
    const navigate = useNavigate()
    const { price, title, image, id, category, model, brand } = value
    const [isModalOpen, setIsModalOpen] = useState(false);
    const realbr = brand?.toUpperCase()
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
            <div>
                <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={<img alt="example" src={image} />}
                >
                    <p className='price'>${price}</p>
                    <Meta title={title} />
                    <Button type="secondary" className='view-btn' onClick={showModal}>
                        View Product
                    </Button>
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

export default ProductCard
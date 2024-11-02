import { Carousel } from 'antd'
import React from 'react'
import "./Responsiv.css"

const Responsiv = () => {
    return (
        <div className='dumcard-wrapper'>
            <Carousel arrows infinite={false}>
                <div className='img-1'></div>
                <div className='img-2'></div>
            </Carousel>
        </div>
    )
}

export default Responsiv

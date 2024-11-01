import React, { useContext, useEffect, useState } from 'react'
import "./AllProduct.css"
// import HomePageCard from '../Cards/HomePageCard'
import { CategoryContext } from '../../context/Category'
import HomePageCard from '../Cards/HomePage/HomePageCard'

const AllProduct = () => {
    const productContext = useContext(CategoryContext)
    const [allProd, setAllProd] = useState([])
    const filterProd = () => {
        const filtered = productContext.products?.filter((item) => {
            return item.title !== "New Product";
        })
        setAllProd(filtered)
    }
    useEffect(() => {
        filterProd()
    }, [productContext])
    return (
        <>
            <h1 className='prodTitle'>Featured Products</h1>
            <div className='homeprod-wrapper'>
                {allProd?.map((prods) => {
                    return (
                        <div className='show' key={prods.id}>
                            <HomePageCard data={prods} />
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default AllProduct

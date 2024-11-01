import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProductCard from '../Cards/Product/ProductCard'
import "./CatDetails.css"
import { CategoryContext } from '../../context/Category'

const Category = () => {
  const productContext = useContext(CategoryContext)
  const { categoryName } = useParams()
  const [filter, setFilter] = useState([])
  const filteredData = () => {
    const specificProducts = productContext.products?.filter((item) => {
      return item?.category === categoryName;
    })
    setFilter(specificProducts)
  }
  const upper = categoryName.toUpperCase()
  useEffect(() => {
    filteredData()
  }, [productContext])

  return (
    <>
      <h1 className='category'>{upper}</h1>
      <div className='prodCard-wrapper'>
        {filter?.map((item) => {
          const { id } = item
          return (
            <ProductCard key={id} value={item} />
          )
        })}
      </div>
    </>
  )
}

export default Category

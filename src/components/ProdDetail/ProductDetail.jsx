import React, { useContext, useEffect, useState } from 'react'
import "./ProductDetail"
import { useParams } from 'react-router-dom'
import { CategoryContext } from '../../context/Category'
import FullDetails from '../Cards/FullDetail/FullDetails'
// import ProductCard from '../Cards/ProductCard'

const ProductDetail = () => {
  const prodCont = useContext(CategoryContext)
  const { id } = useParams()
  const [single, setSingle] = useState({})
  const obj = () => {
    const singleObj = prodCont.products?.find((item) => {
      return item.id == id
    })
    setSingle(singleObj)
  }
  useEffect(() => {
    obj()
  }, [prodCont])
  return (
    <div className='detail-card'>
      <FullDetails data={single} />
    </div>
  )
}

export default ProductDetail

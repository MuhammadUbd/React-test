import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { NewCat } from '../context/NewCategory'
// import { NewCat } from '../context/NewArr'

const Product = () => {
  const otherContext = useContext(NewCat)
  console.log(otherContext)
  return (
    <div>
      <h1>products</h1>
      <NavLink to='/newArrival'>New Arrival</NavLink>
    </div>
  )
}

export default Product
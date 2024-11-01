import { useContext, useEffect } from 'react'
import "./HomeCat.css"
import { CategoryContext } from '../../context/Category'
import CategoryCard from '../Cards/Category/CategoryCard'
// import CategoryCard from '../Cards/CategoryCard'

const HomeCat = () => {
    const newContext = useContext(CategoryContext)
    const uniqueItems = newContext.products?.filter((item, index, self) => {
        return index === self.findIndex((i) => i.category === item.category && i.name === item.name)
    });

    return (
        <div className='featuredCat-wrapper'>
            <h1 className='catTitle'>Featured Categories</h1>
            <div className='catCard'>
                {uniqueItems?.map((item) => {
                    return (
                        <CategoryCard data={item} key={item.id} />
                    )
                })}
            </div>
        </div>
    )
}

export default HomeCat

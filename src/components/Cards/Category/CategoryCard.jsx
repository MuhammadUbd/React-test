import { Card } from 'antd'
import Meta from 'antd/es/card/Meta'
import "./CategoryCard.css"
import { useNavigate } from 'react-router-dom'

const CategoryCard = ({ data }) => {
    const navigate = useNavigate()
    const { image, category } = data;
    // console.log(data)
    return (
        <div className='catCard-wrapper' onClick={() => navigate(`/category/${category}`)}>
            <Card
                hoverable
                style={{ width: 130 }}
                cover={<img alt={data.id} className='image' src={image} />}
            >
                <Meta title={category} />
            </Card>
        </div>
    )
}

export default CategoryCard

// const comparing = (prodType) => {
//     const foundItem = slicedProd.find((item) => {
//         // console.log(item)
//         return prodType === item.category.name
//     })
//     // console.log(foundItem)
//     if (foundItem) {
//         setSelected(foundItem);
//         setIsclicked(true);
//         // Pass the found item in the state when navigating
//         navigate("/chosenItem", { state: { selected: foundItem } });
//     }

// slicedProd.forEach((item) => {
//     if (prodType === item.category.name) {
//         // console.log(item)
//         setSelected(item)
//         setIsclicked(true)
//         navigate("/chosenItem")
//         // another()
//     }
// })
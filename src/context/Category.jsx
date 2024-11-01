import React, { createContext, useEffect, useState } from 'react'
import axios from "axios"

export const CategoryContext = createContext([])

const CategoryCont = ({ children }) => {
    const [data, setData] = useState([])

    const fetchData = async () => {
        try {
            const getData = await axios.get("https://fakestoreapi.in/api/products")
            setData(getData.data)
            // console.log(getData.data)
        } catch (e) {
            console.log(e)
        }
    }
    useEffect(() => {
        fetchData()
    }, [])
    return (
        <CategoryContext.Provider value={data}>
            {children}
        </CategoryContext.Provider>
        // <div>Category</div>
    )
}

export default CategoryCont
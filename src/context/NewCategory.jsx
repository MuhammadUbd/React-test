import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'


export const NewCat = createContext([])
const NewArrvival = ({ children }) => {
    const [data, setData] = useState([])
    const fetchData = async () => {
        try {
            const get = await axios.get('https://api.escuelajs.co/api/v1/products')
            setData(get.data)
        } catch (e) {
            console.log(e)
        }
    }
    useEffect(() => {
        fetchData()
    }, [])
    return (
        <NewCat.Provider value={data}>
            {children}
        </NewCat.Provider>
    )
}

export default NewArrvival 
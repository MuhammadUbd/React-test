import Header from '../components/Header/Header'
import Carosel from '../components/Carousel/Carousel'
import DummyCards from '../components/DummyCards/DummyCards'
import HomeCat from '../components/Categories/HomeCat'
import AllProduct from '../components/AllProducts/AllProduct'

const Home = () => {
    return (
        <>
            <Header />
            <Carosel />
            <DummyCards />
            <HomeCat />
            <AllProduct />
        </>
    )
}

export default Home
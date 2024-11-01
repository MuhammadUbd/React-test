import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Product from "../pages/Product";
import Category from "../components/Categories/CategoryDetail";
import AllProduct from "../components/AllProducts/AllProduct";
import ProductDetail from "../components/ProdDetail/ProductDetail";


export const routes = (
    [
        {
            path: "/",
            element: <Home />
        },
        {
            path: "/contact",
            element: <Contact />
        },
        {
            path: "/product",
            element: <AllProduct />,
        },
        {
            path: "/category/:categoryName",
            element: <Category />
        },
        {
            path: "/category/:categoryName/:id",
            element: <ProductDetail />
        }
    ]
)
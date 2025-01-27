import { Routes, Route } from "react-router-dom"
import Products from "../components/products"
import AddProduct from "../components/addProduct"
const AppRoutes = () => {
    return (
        <>

            <Routes>
                <Route path="/" element={<Products />} />
                <Route path="/addProduct/:id?" element={<AddProduct />} />
                
            </Routes>


        </>
    )
}

export default AppRoutes
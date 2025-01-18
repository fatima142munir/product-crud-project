import { Routes, Route } from "react-router-dom"
import Products from "../components/products"
import AddProduct from "../components/addProduct"
import ViewProduct from "../components/viewProduct"
const AppRoutes = () => {
    return (
        <>

            <Routes>
                <Route path="/" element={<Products />} />
                <Route path="/viewProduct" element={<ViewProduct />} />
                <Route path="/addProduct/:id?" element={<AddProduct />} />
                
            </Routes>


        </>
    )
}

export default AppRoutes
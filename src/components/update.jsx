import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';

const Update = () => {
    // const API = "https://676abb95863eaa5ac0df72f6.mockapi.io/products";
    // // const paramsId = useParams();
    // // console.log(paramsId, "params");
    // // const handleUpdate = async () => {
    // //     try {
    // //         const res = await axios.get(`${API}/${paramsId}`);
    // //         // if (res.status === 200) {
    // //         //     // navigate("/products")
    // //         // }
    // //         console.log(res.data)
    // //     } catch (error) {
    // //         console.log("didnt update")
    // //     }
    // // }

    // useEffect(() => {
    //     handleUpdate()
    // }, [])

    return (
        <>
            <div>

                <div>Update</div>
                {/* <div>
                    <form onSubmit={handleSubmit}>
                        <input type="text" onChange={handleChange} name="product_name" id="name" value={formData.product_name} placeholder="Product Name" />
                        <input type="text" onChange={handleChange} name="description" value={formData.description} id="description" placeholder="Product Description" />
                        <input type="text" onChange={handleChange} name="price" id="price" value={formData.price} placeholder="Product Price" />
                        <button type="submit">Update</button>

                    </form>
                </div> */}
            </div>
        </>
    )
}

export default Update
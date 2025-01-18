// import axios from 'axios';
// import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom';
// import { ToastContainer, toast } from 'react-toastify';

// const AddProduct = () => {
//   const API = "https://676abb95863eaa5ac0df72f6.mockapi.io/products";

//   const navigate = useNavigate();
//   // const paramsId = useParams();
//   // console.log(paramsId, "params");



//   const [formData, setFormData] = useState({
//     product_name: "",
//     price: "",
//     description: ""
//   })

//   const handleChange = (e) => {
//     const name = e.target.name;
//     const value = e.target.value;
//     setFormData({
//       ...formData,
//       [name]: value
//     })
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault()

//     try {
//       const res = await axios.post(API, formData);

//       if (res.status === 201) {
//         toast("Product Added Successfully")
//         setFormData({
//           product_name: "",
//           price: "",
//           description: ""
//         });
//         navigate("/products");

//       }

//     } catch (error) {

//     }


//   }


//   return (
//     <>
//       <div>

//         <div>Add Product</div>
//         <div>
//           <form onSubmit={handleSubmit}>
//             <input type="text" onChange={handleChange} name="product_name" id="name" value={formData.product_name} placeholder="Product Name" />
//             <input type="text" onChange={handleChange} name="description" value={formData.description} id="description" placeholder="Product Description" />
//             <input type="text" onChange={handleChange} name="price" id="price" value={formData.price} placeholder="Product Price" />
//             <button type="submit">Add Product</button>

//           </form>
//         </div>
//       </div>
//     </>
//   )
// }

// export default AddProduct


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const AddProduct = () => {
  const navigate = useNavigate();
  const { id } = useParams(); // Get the product ID from the URL params
  const [product, setProduct] = useState({
    product_name: '',
    description: '',
    price: '',
  });

  const API = "https://676abb95863eaa5ac0df72f6.mockapi.io/products";

  // Fetch product data if editing
  useEffect(() => {
    if (id) {
      axios.get(`${API}/${id}`)
        .then((res) => {
          setProduct(res.data);
        })
        .catch((error) => {
          console.error("Error fetching product:", error);
        });
    }
  }, [id]);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (id) {
        // Update product
        await axios.put(`${API}/${id}`, product);
        toast("Product updated successfully!");
      } else {
        // Add product
        await axios.post(API, product);
        toast("Product added successfully!");
      }
      navigate('/');
    } catch (error) {
      console.error("Error saving product:", error);
    }

  };

  return (
    <>
      <div className='w-full h-screen justify-center m-auto bg-pink-100'>
        <form className='w-auto h-full justify-center text-center p-10 bg-yellow-300 m-auto' onSubmit={handleSubmit}>
          <h1 className='md:text-4xl m-auto  w-full text-3xl p-5'>{id ? "Edit Product" : "Add Product"}</h1>
          <div >
            <label>Product Name:</label>
            <input
              className='w-full p-2'
              type="text"
              name="product_name"
              value={product.product_name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Description:</label>
            <textarea
            className='w-full p-2'
              name="description"
              value={product.description}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Price:</label>
            <input
            className='w-full p-2'
              type="text"
              name="price"
              value={product.price}
              onChange={handleChange}
              required
            />
          </div>
          <button className='w-full bg-pink-400 p-2 mt-5' type="submit">{id ? "Update Product" : "Add Product"}</button>
        </form>

      </div>
    </>
  );
};

export default AddProduct;

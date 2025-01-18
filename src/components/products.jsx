import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, NavLink, useNavigate, useParams } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify';
import { MdDelete } from "react-icons/md";
import { TiEdit } from "react-icons/ti";

const Products = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const API = "https://676abb95863eaa5ac0df72f6.mockapi.io/products";
  const navigate = useNavigate();

  const getProducts = async () => {
    try {
      const res = await axios.get(API);
      // console.log(res)
      if (res.status === 200) {
        setLoading(false);
        setData(res.data);

      }
      setData(res.data)

    } catch (error) {
      const errorData = `Data ${error.response.data}`;
      setError(errorData);
      setLoading(false);

    }
  }




  const handleDelete = async (id) => {
    const userConfirmed = window.confirm("Are you sure you want to delete this Product?");

    if (userConfirmed) {
      try {
        const res = await axios.delete(`${API}/${id}`);
        if (res.status === 200) {
          toast("Item deleted successfully!");
          getProducts();
        }
      } catch (error) {
        console.error("Error in deleting the Product:", error);
        alert("Failed to delete the Product!");
      }
    } else {
      alert("Deletion cancelled.");
    }
  };


  const handleUpdate = (id) => {
    navigate(`/addProduct/${id}`);
  };

  useEffect(() => {
    getProducts()
  }, [])


  if (loading) {
    return (
      <div className='min-h-screen m-auto pt-[20%] text-5xl bg-red-800 flex justify-center'>
        <div> Please Wait... </div>
        <div> Loading</div>
      </div>


    )
  }
  if (error) {
    return <h1>{error}</h1>
  }

  return (
    <>
      <div className=' m-auto justify-center items-center w-full flex bg-yellow-400 '>

        <div>
          <div className='rounded-lg bg-red-700 py-2 px-2 sm:w-52 text-center mx-auto my-9'>
            <button ><NavLink to={"/addProduct"}>Add Product</NavLink>
            </button>
            </div>
          <table className='w-auto lg:text-3xl '>
            <thead className='bg-purple-500 md:h-14 '>
              <tr className='text-center h-auto  items-center flex justify-center flex-wrap'>
                <th className='w-1/12'>Sr#</th>
                <th className='w-2/12'>Product</th>
                <th className='w-5/12'>Description</th>
                <th className='w-2/12'>Price</th>
                <th className='w-1/12'>Edit</th>
                <th className='w-1/12'>Delete</th>
              </tr>
            </thead>
            <tbody>
              {
                data.map((item, index) => {
                  return (
                    <tr className='text-center justify-center flex flex-wrap md:h-44 h-auto border-b-2 p-4'  key={index}>
                      <td className='w-1/12'>{index + 1}</td>
                      <td className='w-2/12'>{item.product_name}</td>
                      <td className='w-5/12'>{item.description}</td>
                      <td className='w-2/12'>{"$" + item.price}</td>
                      <td className='w-1/12'>
                        <button onClick={() => handleUpdate(item.id)}> <TiEdit className='md:w-10 md:h-10' /> </button>
                      </td>
                      <td className='w-1/12'>
                        <button onClick={() => handleDelete(item.id)}> <MdDelete className='md:w-10 md:h-10'/> </button>
                      </td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>


        </div>
      </div>
    </>
  )
}

export default Products
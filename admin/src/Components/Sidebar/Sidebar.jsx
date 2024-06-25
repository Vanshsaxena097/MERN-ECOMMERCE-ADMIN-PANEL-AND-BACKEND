import React from 'react'
import './Sidebar.css'
import { Link } from "react-router-dom";
import listp from '../../assets/Product_list_icon.svg'
import addpro from '../../assets/Product_Cart.svg'
const Sidebar = () => {
  return (
    <div className='Sidebar'>
        <Link to={'/addproduct'} style={{textDecoration:"none"}}>
        <div className="sidebar-item">
            <img src={addpro} alt="" />
            <p>Add Product</p>
        </div>
        </Link>
        <Link to={'/listproduct'} style={{textDecoration:"none"}}>
        <div className="sidebar-item">
            <img src={listp} alt="" />
            <p>Product List</p>
        </div>
        </Link>


    </div>
  )
}

export default Sidebar
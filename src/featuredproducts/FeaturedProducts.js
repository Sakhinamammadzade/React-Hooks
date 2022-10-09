import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../featuredproducts/products.scss'

function FeaturedProducts(){
  const[products,setProducts]=useState([])

  useEffect(()=>{
    fetchProducts()
  },[])
  const fetchProducts=()=>{
    axios
    .get('https://shoppingapiacme.herokuapp.com/shopping')
    .then((response)=>{
      console.log(response)
      setProducts(response.data)
    })
    .catch((error)=>{
    console.log(error);
    })
  // fetch("https://shoppingapiacme.herokuapp.com/shopping")
  // .then((x)=>x.json()).then((res)=>setProducts(res))
    
  }
  return (
    <div>
      <h1>Featured Products</h1>
      <div className="item-container">
        {
          products.map((product,index)=>(
            <div key={index}> 
                 <div className='card'>
                   <img src={product.image} alt="" />
                   <h3>{product.brand}</h3>
                   <p>{product.item}</p>
                 </div>
            </div>
          ))
        }
      </div>



    </div>
  )

}


export default FeaturedProducts
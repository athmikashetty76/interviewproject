import React, { useEffect, useState } from "react";
import {  useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CiSearch,CiHeart,CiShoppingCart   } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa6";
import { emptyCart } from "../utils/images";
import ItemCard from "./ItemCard";
import { BiAlignRight } from "react-icons/bi";
import { paginationItems } from "../constants";

const Cart = () => {
 
  const products = useSelector((state) => state.orebiReducer.products);
  const [totalAmt, setTotalAmt] = useState("");
  const [shippingCharge, setShippingCharge] = useState("");
  useEffect(() => {
    let price = 0;
    products.map((item) => {
      price += item.price * item.quantity;
      return price;
    });
    setTotalAmt(price);
  }, [products]);
  useEffect(() => {
    if (totalAmt <= 200) {
      setShippingCharge(30);
    } else if (totalAmt <= 400) {
      setShippingCharge(25);
    } else if (totalAmt > 401) {
      setShippingCharge(20);
    }
  }, [totalAmt]);
  return (
    <div className="max-w-container relative t-10 mx-auto px-4">
     <div className=" relative top-5  left-4 border-2 border-black-500 h-10 w-3/4 flex justify-between">
      <div className="border-gray border-r-2   ">
      <BiAlignRight />
      </div>
      <div className="relative right-8 "> 
       <p className="relative right-80">  Shop here</p>
      </div>
     <div className="flex gap-4   items-center ">
      <div className=""><CiSearch /></div>
     <div> <FaRegUser /></div>
    
    <div> <CiHeart /></div>
    <div  > <CiShoppingCart /><span class="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-purple-600 rounded-full">{products.length}</span></div>
     
     </div>
       
     </div>
     <div className="relative ">
     <Link to="/"> <p className="relative text-3xl top-6 left-6">Shopping Cart</p></Link>
     </div>
     <div>
      {products.length > 0 ? (
        <div className="pb-20 relative top-4 flex justify-between">
          <div className=" h-20 bg-[#F5F7F7] text-primeColor hidden lgl:grid grid-cols-5 place-content-center px-6 text-lg font-titleFont font-semibold">
            <h2 className="col-span-2">Product</h2>
            <h2>Price</h2>
            <h2>Quantity</h2>
            <h2>Sub Total</h2>
          </div>
          <div className="mt-5" >
            {products.map((item) => (
              <div key={item._id}>
                <ItemCard item={item} />
              </div>
            ))}
          </div>

         

          
          <div className="max-w-7xl gap-4 flex justify-end mt-4">
            <div className="w-96 flex flex-col gap-4">
            
              <div>
              <p className="flex items-center justify-between border-[1px] border-gray-400 border-b-0  py-1.5 text-3xl px-4 font-medium">
                  Order Summary
                 
                </p>
                <p className="flex items-center justify-between  border-gray-400 border-[1px] border-t-0 py-1.5 text-lg px-4 font-medium">
                  Subtotal
                  <span className="font-semibold tracking-wide font-titleFont">
                    ${totalAmt}
                  </span>
                </p>
                <p className="flex items-center justify-between border-[1px] border-gray-400 border-t-0 py-1.5 text-lg px-4 font-medium">
                  Shipping Charge
                  <span className="font-semibold tracking-wide font-titleFont">
                    ${shippingCharge}
                  </span>
                </p>
                <p className="flex items-center justify-between border-[1px] border-gray-400 py-1.5 text-lg px-4 font-medium">
                  Total
                  <span className="font-bold tracking-wide text-lg font-titleFont">
                    ${totalAmt + shippingCharge}
                  </span>
                </p>
                <p className="flex items-center justify-between border-[1px] border-gray-400 bg-black text-white py-1.5 text-3xl px-4 font-medium">
                  PROCEED TO CHECKOUT
                
                </p>
              </div>
            
            </div>
          </div>
        </div>
      ) : (
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="flex flex-col mdl:flex-row justify-center items-center gap-4 pb-20"
        >
          <div>
            <img
              className="w-80 rounded-lg p-4 mx-auto"
              src={emptyCart}
              alt="emptyCart"
            />
          </div>
          <div className="max-w-[500px] p-4 py-8 bg-white flex gap-4 flex-col items-center rounded-md shadow-lg">
            <h1 className="font-titleFont text-xl font-bold uppercase">
              Your Cart feels lonely.
            </h1>
            <p className="text-sm text-center px-10 -mt-2">
              Your Shopping cart lives to serve. Give it purpose - fill it with
              books, electronics, videos, etc. and make it happy.
            </p>
            <Link to="/shop">
              <button className="bg-primeColor rounded-md cursor-pointer hover:bg-black active:bg-gray-900 px-8 py-2 font-titleFont font-semibold text-lg text-gray-200 hover:text-white duration-300">
                Continue Shopping
              </button>
            </Link>
          </div>
        </motion.div>
      )}
    </div>
    <div>
    <p className="relative text-3xl ">You may also like</p>
    </div>
    <div className="flex">
     
    {
    paginationItems.slice(0,4).map((v,i)=>(
      
      <div className="bg-white rounded-lg shadow-lg p-6 m-4 max-w-sm ">
        <h1 className="text-lg font-bold ">{v.productName}</h1>
        <div className="mt-4">

        
        <p className="text-gray-500">${v.price}</p>
      </div>
         <div className="relative top-5"> <CiHeart /></div>

      <img className="w-45 h-43 mx-auto" src={v.img} alt={v.productName} />
      

     
      
      
     
    </div>

    ))
    }

    </div>
    <div  className="border-2 border-gray "> 
      <div className="border-2 border-b p-10 flex justify-between">
       <div>
        <h3 className=" text-3xl">Subscribe</h3>
        <p>Get Flat 60% on every items</p>
       </div>
      

       <div>
       <div className="relative w-200 lg:w-[600px] h-[50px] text-base text-primeColor bg-white flex items-center px-6 rounded-xl  gap-2">
 
 <input
   type="search"
   className="relative m-0 -mr-0.5 block min-w-0 flex-auto rounded-l shadow bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
   placeholder="Search"
   aria-label="Search"
   aria-describedby="button-addon3" />


 <button
   className="relative z-[2] rounded-r border-2 border-primary px-6 py-2 text-xs font-medium uppercase text-primary transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 bg-black text-white"
   type="button"
   id="button-addon3"
   data-te-ripple-init>
   Search
 </button>
</div>
<div className="relative left-7">
        Shop here you will get more amazing items enjoy the browsing
       </div>


       </div>

        </div>
    <div className=" relative t-7 grid w-full grid-cols-2 left-8 p-5  ">
      <div>
        <ul>
        <li>
                <h3 className="text-2xl">Leather Like Wood</h3>
                
                <p>898635789</p>
                <p>shettyswathi32@gmail.com</p>
                

            </li>
        </ul>
      </div>
          <div>
            <ul className="flex gap-10 justify-evenly">
            <li className="block">
                <h3>Categories</h3>
                <p>Baby Bags</p>
                <p>Backpack</p>
                <p>Beach Bags</p>
                <p>Cluches</p>

            </li>
            <li>
                <h3>Information</h3>
                <p>SpecialOffers</p>
                <p>New Products</p>
                <p>BestSeller</p>
                <p>Contact Us</p>

            </li>
            <li>
                <h3>MyAccount</h3>
                <p>My Orders</p>
                <p>My Address</p>
                <p>My Personal info</p>
                <p>My credit slips </p>

            </li>
          
            
             </ul>
          </div>
          
         
      <div >
        <div className="text-sm text-gray-500 font-semibold py-1">
          Copyright © 2021 Notus JS by Creative Tim
           </div>
      </div>
    
           
        
          <div>
          
          </div>
          <div>
           
          </div>
        </div>
      
        </div>
    </div>
  );
};

export default Cart;

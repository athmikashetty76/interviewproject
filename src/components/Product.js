import React from "react";

import { FaShoppingCart } from "react-icons/fa";

import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { addToCart } from "../redux/orebiSlice";
import { offer_discount } from "../utils/images";
const Product = (props) => {
  const dispatch = useDispatch();

 

 
  return (
    <div className="bg-white text-xl rounded-lg shadow-lg p-8 m-7 max-w-sm">
    <img className="w-45 h-43 mx-auto" src={props.img} alt={props.productName} />
    <img className="w-10 h-10 relative bottom-100" src={offer_discount} alt={props.productName} />

    <div className="mt-4">
      <h1 className="text-xl font-bold">{props.productName}</h1>
      
    </div>
    <p className="text-xl mt-4">{props.des}</p>
    <p className="text-gray-black">${props.price}</p>
    <div className="mt-4 flex justify-between">
    <Link to="/cart"><button className="flex bg-blue-500 text-white px-4 py-2 rounded-lg"   onClick={() =>
                dispatch(
                  addToCart({
                    _id: props._id,
                    name: props.productName,
                    quantity: 1,
                    image: props.img,
                    badge: props.badge,
                    price: props.price,
                    colors: props.color,
                  })
                )
              }>
         
             
              Add to Cart
              <span className="">
                <FaShoppingCart />
              </span>
            
          
        </button>
        </Link>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
        View details
      </button>
    </div>
  </div>
   
  );
};

export default Product;

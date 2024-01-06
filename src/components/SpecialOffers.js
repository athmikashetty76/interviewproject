import React from "react";

import Product from "./Product";
import { paginationItems } from "../constants";

const SpecialOffers = () => {
  return (
    <div>
      <div className="bg-white text-black shadow relative top-10 left-10 w-100">Featured Products</div>
    <div className="m-2 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 mdl:gap-2 lg:gap-2">
    {paginationItems &&
        paginationItems.map((item) => (
          <div key={item._id} className="w-full">
            <Product
              _id={item._id}
              img={item.img}
              productName={item.productName}
              price={item.price}
              color={item.color}
              badge={item.badge}
              des={item.des}
            />
          </div>
        ))}
    </div>
    </div>
  );
};

export default SpecialOffers;

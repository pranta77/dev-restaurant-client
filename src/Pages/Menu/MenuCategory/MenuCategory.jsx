import React from "react";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import Cover from "../../Shared/Cover/Cover";
import { Link } from "react-router-dom";

const MenuCategory = ({ items, title, img }) => {
  return (
    <div className="pt-10">
      {title && (
        <Cover
          img={img}
          title={title}
          detail="would you like to try a dish"
        ></Cover>
      )}
      <div className="grid md:grid-cols-2 gap-10 my-20">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <Link to={`/order/${title}`}>
        <button className="btn btn-outline border-0 border-slate-950 border-b-4 mt-4 text-white">
          Order Now
        </button>
      </Link>
    </div>
  );
};

export default MenuCategory;

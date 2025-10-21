import React, { use } from "react";
import { NavLink } from "react-router";
import './AllCategories.css'

const caterogyPromise = fetch("/categories.json").then((res) => res.json());
const AllCategories = () => {
  const category = use(caterogyPromise);
  return (
    <div>
      <h2 className="font-bold"> All Categories</h2>
      <div className="Allcategory grid grid-cols-1">
        {category.map((SingleCategory) => (
          <NavLink
            className="my-3 bg-white shadow-none border-0 hover:bg-base-300 "
            to={`/caterogy/"${SingleCategory.id}`}
            key={SingleCategory.id}
          >
            {SingleCategory.name}{" "}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default AllCategories;

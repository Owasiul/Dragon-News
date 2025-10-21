import React, { Suspense } from "react";
import AllCategories from "../AllCategories/AllCategories";

const LeftAside = () => {
  return (
    <div>
      <Suspense
        fallback={<span className="loading loading-bars loading-xl"></span>}
      >
        <AllCategories></AllCategories>
      </Suspense>
    </div>
  );
};

export default LeftAside;

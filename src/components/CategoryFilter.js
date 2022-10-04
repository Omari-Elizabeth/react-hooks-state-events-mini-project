import React from "react";

function CategoryFilter({categories, filterCategory}) {
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {categories.map((category)=>{
        return (
          <button key={category} onClick={(e) => { filterCategory(category);
              e.currentTarget.classList.add("selected");
            }}
          >
            {category}
          </button>
        )
      })}
    </div>
  );
}

export default CategoryFilter;

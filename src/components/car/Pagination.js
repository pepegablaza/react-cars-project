import React from "react";
import { paginationStore } from "./stores/PaginationStore";

const Pagination = () => {
  return (
    <div className="numbers-container">
      {paginationStore.numbers.map((number, index) => {
        return (
          <button
            onClick={() => paginationStore.onClick(number)}
            className={
              paginationStore.activeClass.active === number
                ? "btn btn-active"
                : "btn"
            }
            key={index}
          >
            {number}
          </button>
        );
      })}
    </div>
  );
};

export default Pagination;

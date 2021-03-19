import React from "react";

const Pagination = ({ charactersPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / charactersPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination_section">
      {pageNumbers.map((number) => (
        <ul onClick={() => paginate(number)} key={number}>
          {number}
        </ul>
      ))}
    </div>
  );
};

export default Pagination;

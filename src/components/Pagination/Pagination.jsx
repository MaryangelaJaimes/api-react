import "./Pagination.css";
import ReactPaginate from "react-paginate";

const Pagination = ({ info, pageNumber, setPageNumber }) => {
  return (
    <ReactPaginate
      className="pagination justify-content-center gap-2 my-auto mt-5 pb-5"
      nextLabel="Siguiente"
      previousLabel="Anterior"
      nextClassName="btn"
      previousClassName="btn"
      pageClassName="page-item"
      pageLinkClassName="page-link"
      activeClassName="active"
      onPageChange={(data) => {
        setPageNumber(data.selected + 1);
      }}
      forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
      pageCount={info?.pages}
    />
  );
};

export default Pagination;

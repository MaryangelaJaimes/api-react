import "./Search.css";
const Search = ({ setSearch, setPageNumber }) => {
  return (
    <form className="search-form" onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        className="search-input"
        placeholder="Buscar personaje"
        onChange={(e) => {
          setPageNumber(1);
          setSearch(e.target.value);
        }}
      />
    </form>
  );
};

export default Search;

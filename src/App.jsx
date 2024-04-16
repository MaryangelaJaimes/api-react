import { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import Cards from "./components/Cards/Cards";
import Pagination from "./components/Pagination/Pagination";
import Search from "./components/Search/Search";
import MyApi from "./components/MyApi/MyApi";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [search, setSearch] = useState("");
  const [getData, setGetData] = useState([]);
  const url = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await MyApi(url);
        const sortedResults = response.results.sort((a, b) =>
          a.name > b.name ? 1 : -1
        );
        setGetData({ ...response, results: sortedResults });
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [url]);

  return (
    <>
      <Header />
      <Search setSearch={setSearch} setPageNumber={setPageNumber} />
      <div className="container">
        <div className="row">
          <Cards results={getData.results} />
        </div>
      </div>
      <Pagination
        info={getData.info}
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
      />
    </>
  );
};

export default App;

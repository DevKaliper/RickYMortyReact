import { useState, useEffect } from "react";
import ResponsiveDrawer from "./components/ResponsiveDrawer";
import Loading from "./components/Loading";

function App() {
  const [page, setPage] = useState(1);
  const [character, setCharacter] = useState([]);
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState(null);
  const handlePage = (e) => {
    console.log(page);
    setPage(e.target.innerText);
  };

  const handleStatus =(e)=>{
    
    setStatus(e.target.innerText)

  }

  useEffect(() => {
    let url = "https://rickandmortyapi.com/api/character/?page=";
    if (!status) {
      fetch(`${url}${page}`)
        .then((response) => response.json())
        .then((data) => {
          setCharacter(data.results);
          console.log(data);

          setLoading(false);
        });
    } else {
      fetch(`${url}${page}&status=${status}`)
        .then((response) => response.json())
        .then((data) => {
          setCharacter(data.results);
          console.log(data);

          setLoading(false);
        });
    }
  }, [page, status]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <ResponsiveDrawer
          handlePage={handlePage}
          page={page}
          character={character}
          handleStatus={handleStatus}
        />
      )}
    </>
  );
}

export default App;

import {useState} from "react";
import {useDispatch} from "react-redux";
import {addDigimonThunk} from "../../store/modules/digimons/thunks";

const Search = () => {
  const [digimonName, setDigimonName] = useState("");
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();

  const handleSearch = () => {
    setError(false);
    dispatch(addDigimonThunk(digimonName, setError, setIsLoading));
    setDigimonName("");
  };
  return (
    <>
      <h2>Procure pelo seu Digimon!</h2>
      <div>
        <input
          placeholder="Procure seu Digimon"
          value={digimonName}
          onChange={(e) => setDigimonName(e.target.value)}
        ></input>
      </div>
      <div>{error && <span>Digimon não encontrado</span>}</div>
      <div>{isLoading && <span>Carregando</span>}</div>
      <div>
        <button disabled={!digimonName} onClick={handleSearch}>
        Pesquisar
        </button>
      </div>
    </>
  );
};

export default Search;

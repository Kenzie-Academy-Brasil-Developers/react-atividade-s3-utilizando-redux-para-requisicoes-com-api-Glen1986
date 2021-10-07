import {useState} from "react";
import {useDispatch} from "react-redux";
import {addDigimonThunks} from "../../store/modules/digimons/thunks";

const Search = () => {
  const [digimonName, setDigimonName] = useState("");
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false)

  const dispatch = useDispatch();

  const handleSearch = () => {
    setError(false)
    dispatch(addDigimonThunks(digimonName, setError, setIsLoading))
  }
  return (
    <div>
      <h2>Procure pelo seu Digimon!</h2>
      <div>
        <input
          value={digimonName}
          onChange={(event) => setDigimonName(event.target.value)}
          placeholder="Procure seu Digimon"
        ></input>
      </div>
      <div>{error && <span>Digimon nao encontrado</span>}</div>
      <div>{isLoading && <span>Carregando</span>}</div>
      <button disabled={!digimonName} onClick={handleSearch}>Pesquisar</button>
    </div>
  );
};

export default Search

import axios from 'axios';
import {addDigimon} from './actions';

export const addDigimonThunk =
  (digimonName, setError, setIsLoading) => (dispatch) => {
    setIsLoading(true);
    axios
      .get(`https://digimon-api.vercel.app/api/digimon/${digimonName}/`)
      .then((res) => {
        dispatch(addDigimon(res.data.name));
        setIsLoading(false);
      })
      .catch((e) => {
        setError(true);
        setIsLoading(false);
      })
  }

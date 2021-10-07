import axios from 'axios';
import {addDigimon} from './actions';

export const addDigimonThunks =
  (digimonName, setError, setIsLoading) => (dispatch) => {
    setIsLoading(true);
    axios
      .get(`https://digimon-api.vercel.app/api/digimon/${digimonName}`)
      .then((res) => {
        dispatch(addDigimon(res.data.name));
      })
      .catch((e) => {
        console.log(e);
        setError(true);
        setIsLoading(false);
      })
  }

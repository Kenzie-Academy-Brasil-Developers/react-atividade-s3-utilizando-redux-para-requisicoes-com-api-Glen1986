
import {useSelector} from "react-redux";

const Digimons = () => {

  const {digimons} = useSelector((store) => store)
  return (
    <div>
      <h2>Digimons</h2>
      <ul>
        {digimons.map((digimon, index) => (<li key={index}>{digimon.name}</li>))}
      </ul>
    </div>
  )
}

export default Digimons

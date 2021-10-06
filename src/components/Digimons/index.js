
import {useSelector} from "react-redux"

const Digimons = () => {

  const {digimons} = useSelector((state) => state)
  return (
    <div>
      <h2>Digimons</h2>
      <ul>
        {digimons.map((digimon, index) => (<li key={index}>{digimon}</li>))}
        <li></li>
      </ul>
    </div>
  )
}

export default Digimons
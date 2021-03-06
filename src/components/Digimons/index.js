import {useSelector} from "react-redux";

const Digimons = () => {
  const {digimons} = useSelector((store) => store);

  return (
    <>
      <h2>Digimons</h2>
      <ul>
        {digimons.map((digimon, index) => (<li key={index}>{digimon}</li>
        ))}
      </ul>
    </>
  )
}

export default Digimons;

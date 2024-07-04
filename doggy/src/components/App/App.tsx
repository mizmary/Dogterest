import Header from "../Header/Header.tsx";
import Card from "../Card/Card.tsx";
import { useFetch } from "../../hooks/useFetch.ts";
import "./App.css";
// import CardsLayout from "../CardsLayout/CardsLayout.tsx";

export default function App() {
  const {dogs, loading, error} = useFetch()
  console.log(dogs)
  
  return (
    <div>
      <Header />
      <div className="grid-container">
        { loading && <span className="text-loading">Loading...</span>}
        { error && <span className="text-error"> {error} </span>}
        { dogs.map( (dog) => ( <Card dog = {dog} key={dog.id}/> ))}
        {/* <CardsLayout dogs = {dogs}/> */}
      </div> 
    </div>
  );
}
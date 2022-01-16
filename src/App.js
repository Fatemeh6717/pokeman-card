import classes from "./App.module.css";
import { useEffect, useState } from "react";
import PokemanCard from "./Components/PokemanCard";
import Loading from "./Components/UI/Loading";
import { useParams } from "react-router-dom";

function App() {
  let idNum;
  let url;
  let params = useParams();
  const [hasError, setHasError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [pokemanData, setPokemanData] = useState({
    id: null,
    name: "",
    type1: "",
    type2: "",
    imgSrc: "",
    stats: [{ basestat: null, name: "" }],
  });

  useEffect(async () => {
    setHasError(null);
    setIsLoading(true);
    if (params.id == null) {
      idNum = Math.floor(Math.random() * 495) + 1;
      url = "https://pokeapi.co/api/v2/pokemon/" + idNum;
    } else if (params.id !== null) {
      idNum = params.id;
      url = "https://pokeapi.co/api/v2/pokemon/" + idNum;
    }

    try {
      fetch(url)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Something went wrong");
          }
          return response.json();
        })
        .then((data) => {
          let PokemanInfo = {};
          if (data.types.length == 1) {
            PokemanInfo = {
              id: +idNum,
              name: data.name,
              type1: data.types[0].type.name,
              imgSrc: data.sprites.front_default,
              stats: [
                ...data.stats.map((item) => {
                  return { basestat: item.base_stat, name: item.stat.name };
                }),
              ],
            };
          } else {
            PokemanInfo = {
              id: +idNum,
              name: data.name,
              type1: data.types[0].type.name,
              type2: data.types[1].type.name,
              imgSrc: data.sprites.front_default,
              stats: [
                ...data.stats.map((item) => {
                  return { basestat: item.base_stat, name: item.stat.name };
                }),
              ],
            };
          }
          setPokemanData({ ...PokemanInfo });
          setIsLoading(false);
        });
    } catch (error) {
      setHasError(error.message);
      console.log(hasError);
    }
  }, []);

  return (
    <div className={classes.App}>
      {!isLoading && <PokemanCard cardInfo={pokemanData} />}
      {isLoading && <Loading />}
    </div>
  );
}

export default App;

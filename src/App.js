import classes from "./App.module.css";
import { useEffect, useState } from "react";
import PokemanCard from "./Components/PokemanCard";
import {  useParams } from "react-router-dom";

function App() {
  let params = useParams();

    const [pokemanData, setPokemanData] = useState({
    id: null,
    name: "",
    type1: "",
    type2: "",
    imgSrc: "",
    stats: [{ basestat: null, name: "" }],
  });
  const [idNum,setIdNum]=useState();

 
  useEffect(()=>{

    if(params.Id === undefined){
      setIdNum(Math.floor(Math.random() *495) +1);
      console.log(params.Id);}
     else if(params.Id !== undefined){
       console.log(params.Id);
     setIdNum(+params.Id) ;
     }},[params.Id]);

  useEffect(
   
    async () => {
      try { fetch("https://pokeapi.co/api/v2/pokemon/"+idNum)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const PokemanInfo = {
        id:  +idNum,
        name: data.name,
        type1: data.types[0].type.name,
        type2: data.types[1].type.name,
        imgSrc: data.sprites.front_default,
        stats: [
          ...data.stats.map((item) => {
            return { basestat: item.base_stat, name: item.stat.name };
          }),
        ]
      };

      setPokemanData({ ...PokemanInfo });
    
    });}
    catch (error) {
       console.error(error);
      
    }

  }, [idNum]);

  useEffect(()=>{

    if(params.Id == null){
      setIdNum(Math.floor(Math.random() *495) +1);}
     else if(params.Id != null){
     setIdNum(params.Id) ;
     }},[params.Id]);




  return (
   
    <div className={classes.App}>
      <PokemanCard cardInfo={pokemanData}/>
   
    </div>
  );
}

export default App;

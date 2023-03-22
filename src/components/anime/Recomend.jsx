import { useEffect, useState } from "react";


import { animeRecomend } from "../../data/dataAnime"

import Row from "react-bootstrap/Row";
import Spinner from 'react-bootstrap/Spinner';
import AnimeItem from "./AnimeItem";

function Recomend() {

    const [load, setLoad] = useState(false)
    
    const [arrayAnimes, setArrayAnimes] = useState([]);




    useEffect(() => {
        animeRecomend().then((res) => {
          setArrayAnimes(res.data);

        }).finally(()=>{setLoad(true)});
      }, []);

    if (load==true) {
        return (
    <Row>
        {arrayAnimes.map((obj) => {
          // return <RecomendItem key={obj.entry.mal_id} data={obj} ></RecomendItem>;

           return <AnimeItem key={obj.entry.mal_id} data={obj.entry} ></AnimeItem>

          
          
        })}
      </Row>
      
    )
    }else{
        return (
        <div className="d-flex justify-content-center m-5">
          <Spinner animation="border" role="status">
    <span className="visually-hidden">Loading...</span>
  </Spinner></div>
  )
        
        
    }
  
}

export default Recomend
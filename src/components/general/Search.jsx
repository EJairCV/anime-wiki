import { useParams } from "react-router-dom"
import { buscarAnime } from "../../data/dataAnime"
import { useEffect, useState } from "react"
import Row from "react-bootstrap/Row";
import Pagination from "react-bootstrap/Pagination";
import Spinner from "react-bootstrap/Spinner";

import AnimeItem from "../anime/AnimeItem";

function Search() {
  const params = useParams()
  const [data, setData]= useState()
  const [load , setLoad ]= useState(false)

  const handleClickPagination = (pag) => {
    buscarAnime(params,pag).then((res) => {
      
      setData(res);
      console.log(res);
    });
  };

  useEffect(() => {
    console.log(params.busqueda)
    buscarAnime(params,1)
    .then((res)=>{console.log(res); setData(res)})
    .finally(()=>{setLoad(true)})
    
  }, [params])
  


  if (load==true) {

    if (data.data.length ==0) {
      return (<h1 className="d-flex justify-content-center m-5">No se encontraron resultados</h1>)
    }else{

      return (
      <>
      <Pagination className="d-flex justify-content-center justify-content-lg-start mt-3">
        <Pagination.First
          onClick={() => {
            handleClickPagination(1);
          }}
        />
        <Pagination.Prev
          onClick={() => {
            handleClickPagination(data.pagination.current_page - 1);
          }}
        />
        <Pagination.Item active>{data.pagination.current_page}</Pagination.Item>
        {data.pagination.current_page == data.pagination.last_visible_page ? (
            <Pagination.Next disabled></Pagination.Next>
          ) : (
            <Pagination.Next
              onClick={() => {
                handleClickPagination(data.pagination.current_page + 1);
              }}
            ></Pagination.Next>
          )}
        <Pagination.Last
          onClick={() => {
            handleClickPagination(data.pagination.last_visible_page);
          }}
        />
      </Pagination>
      <Row>
        {data.data.map((obj)=>{
        return (<AnimeItem key={obj.mal_id} data={obj}></AnimeItem>)
      })}
      </Row>
      <Pagination className="d-flex justify-content-center justify-content-lg-start mt-3">
        <Pagination.First
          onClick={() => {
            handleClickPagination(1);
          }}
        />
        <Pagination.Prev
          onClick={() => {
            handleClickPagination(data.pagination.current_page - 1);
          }}
        />
        <Pagination.Item active>{data.pagination.current_page}</Pagination.Item>
        {data.pagination.current_page == data.pagination.last_visible_page ? (
            <Pagination.Next disabled></Pagination.Next>
          ) : (
            <Pagination.Next
              onClick={() => {
                handleClickPagination(data.pagination.current_page + 1);
              }}
            ></Pagination.Next>
          )}
        <Pagination.Last
          onClick={() => {
            handleClickPagination(data.pagination.last_visible_page);
          }}
        />
      </Pagination>
      </>
      
      
    )
    }

    
  }else{
    return (<Spinner animation="border" role="status">
    <span className="visually-hidden">Loading...</span>
  </Spinner>)
  }
}

export default Search
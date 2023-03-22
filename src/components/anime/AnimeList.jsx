import { useEffect, useState } from "react";
import { animeAll, animeNavegate } from "../../data/dataAnime";

import AnimeItem from "./AnimeItem";

import Row from "react-bootstrap/Row";
import Pagination from "react-bootstrap/Pagination";
import Spinner from "react-bootstrap/Spinner";

function AnimeList() {
  const [data, setData] = useState({});

  const [arrayAnimes, setArrayAnimes] = useState([]);

  const [pag, setPag] = useState(1);

  const [load, setLoad] = useState(false);

  const handleClickPagination = (pag) => {
    animeAll(pag).then((res) => {
      setArrayAnimes(res.data);
      setData(res);
      console.log(res);
    });
  };

  useEffect(() => {
    animeAll(1)
      .then((res) => {
        setArrayAnimes(res.data);
        setData(res);
        console.log(res);
      })
      .finally(() => {
        setLoad(true);
      });
  }, []);

  if (load == true) {
    return (
      <>
        <Pagination className="d-flex justify-content-center justify-content-lg-start mt-4">
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
          <Pagination.Item active>
            {data.pagination.current_page}
          </Pagination.Item>

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
        <Row className="justify-content-md-center">
          {arrayAnimes.map((obj) => {
            return <AnimeItem key={obj.mal_id} data={obj}></AnimeItem>;
          })}
        </Row>
        <Pagination className="d-flex justify-content-center justify-content-lg-start mt-3 mb-5">
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
          <Pagination.Item active>
            {data.pagination.current_page}
          </Pagination.Item>
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
    );
  } else {
    return (
      <div className="d-flex justify-content-center m-5">
          <Spinner animation="border" role="status">
    <span className="visually-hidden">Loading...</span>
  </Spinner></div>
    );
  }
}

export default AnimeList;

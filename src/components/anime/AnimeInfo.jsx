import { getAnime } from "../../data/dataAnime";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { Spinner } from "react-bootstrap";
import Table from "react-bootstrap/Table";

function AnimeInfo() {
  const params = useParams();

  const [dataAnime, setDataAnime] = useState({});

  const [load, setLoad] = useState(false);

  useEffect(() => {
    getAnime(params.id)
      .then((res) => {
        setDataAnime(res.data);
        console.log(res.data);
      })
      .finally(setLoad(true));
  }, []);

  if (load == true) {
    return (
      <>
        <h1 className="mt-2">{dataAnime.title}</h1>
        <div className="d-flex flex-wrap justify-content-around ">
          <div className="my-3 " >
            {typeof dataAnime.images == "undefined" ? (
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            ) : (
              <img className="rounded shadow-lg" src={dataAnime.images.jpg.image_url}></img>
            )}
          </div>
          {typeof dataAnime.trailer == "undefined" ? (
            ""
          ) : dataAnime.trailer.embed_url == null ? (
            ""
          ) : (
            <iframe
              className="my-3 rounded shadow-lg"
              width="560"
              height="315"
              src={dataAnime.trailer.embed_url}
              title="YouTube video player"
              allow="accelerometer  ; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          )}
        </div>

        <Table>
          <tbody>
            <tr>
              <td>Titulo</td>

              <td>{dataAnime.title}</td>
            </tr>
            <tr>
              <td>Synopsis</td>
              <td>{dataAnime.synopsis}</td>
            </tr>
            <tr>
              <td>Tipo</td>
              <td>{dataAnime.type}</td>
            </tr>
            <tr>
              <td>Emisión</td>
              <td>
                {typeof dataAnime.airing == "undefined"
                  ? ""
                  : dataAnime.aired.string}
              </td>
            </tr>
            <tr>
              <td>Episódios</td>
              <td>{dataAnime.episodes}</td>
            </tr>
            <tr>
              <td>Rating</td>
              <td>{dataAnime.rating}</td>
            </tr>

            {typeof dataAnime.theme == "undefined" ? (
              ""
            ) : (
              <>
                <tr>
                  <td>Opening</td>
                  <td>
                    {dataAnime.theme.openings.map((e) => {
                      return <li key={e}>{e}</li>;
                    })}
                  </td>
                </tr>
                <tr>
                  <td>Ending</td>
                  <td>
                    {dataAnime.theme.endings.map((e) => {
                      return <li key={e}>{e}</li>;
                    })}
                  </td>
                </tr>
              </>
            )}
          </tbody>
        </Table>
      </>
    );
  } else {
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }
}

export default AnimeInfo;

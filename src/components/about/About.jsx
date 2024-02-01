import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const [movie, setMovie] = useState(null);
  const [desc, setDesc] = useState("");
  const navigate = useNavigate();
  const getMovie = () => {
    const storedMovie = sessionStorage.getItem("movie");
    if (storedMovie) {
      const parsedMovie = JSON.parse(storedMovie);
      setMovie(parsedMovie);
      getSummary(parsedMovie);
    }
  };

  const getSummary = (mov) => {
    let str = mov.summary;
    let l = str.length;
    let STR = str.substring(3, l - 4);
    // console.log(str);
    console.log(STR);
    setDesc(STR);
  };

  useEffect(() => {
    getMovie();
  }, []);
  return (
    <>
      {movie ? (
        <>
        <div className="movie-container">
          <div className="poster">
            {movie.image ? <img src={movie.image.medium} alt="" /> : <p>NA</p>}
          </div>
          <div className="text">
            <h2 style={{ fontSize: "40px", color: "pink", margin: '0' }}>{movie.name}</h2>
            <p>{desc}</p>
          </div>
          <div className="details">
            <div>
              Language:{" "}
              {movie.language ? <b className="light">{movie.language}</b> : NA}
            </div>
            <div>
              Ratings:{" "}
              {movie.rating.average ? (
                <b className="light">{movie.rating.average}</b>
              ) : (
                <>NA</>
              )}
            </div>
            <div>
              Avg Runtime:{" "}
              {movie.averageRuntime ? (
                <b className="light">{movie.averageRuntime}min</b>
              ) : (
                <>NA</>
              )}
            </div>
            <div>
              Genres:{" "}
              {movie.genres ? (
                movie.genres.map((item) => <b className="light">{item} </b>)
              ) : (
                <>NA</>
              )}
            </div>
            <div>
              Premiered:{" "}
              {movie.premiered ? (
                <b className="light">{movie.premiered}</b>
              ) : (
                <>NA</>
              )}
            </div>
            <div>
              Schedule:{" "}
              {movie.schedule.days ? (
                <b className="light">
                  {movie.schedule.days.map((item) => item)}
                </b>
              ) : (
                <>NA</>
              )}
              <br />
              time:{" "}
              {movie.schedule.time ? (
                <b className="light">{movie.schedule.time}</b>
              ) : (
                <>NA</>
              )}
            </div>
            <div>
              Status:{" "}
              {movie.status ? (
                <b className="light">{movie.status}</b>
              ) : (
                <p>NA</p>
              )}
            </div>
            <div>
              Ended:{" "}
              <b className="light">{movie.ended ? <> yes</> : <> no</>}</b>
            </div>
            <div></div>
          </div>
        </div>
        {(movie.status !== 'In Development')?<button onClick={()=> navigate('/book')}>Book Show</button>:<h2>In development</h2>}
        
        </>
      ) : (
        <h1>Please Chose A Movie</h1>
      )}
    </>
  );
};

export default About;

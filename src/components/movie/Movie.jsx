import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Movie = () => {
  const [data, setData] = useState();
  const [movie, setMovie] = useState();
  const navigate = useNavigate();
  const fetchData = async () => {
    try {
      const res = await axios("https://api.tvmaze.com/search/shows?q=all");
      setData(res.data);
      // console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const selectMovie = (selectedMovie) => {
    // console.log(selectedMovie);
    sessionStorage.setItem("movie", JSON.stringify(selectedMovie));
    navigate("./about");
  };
  return (
    <>
      <h1>Movies</h1>
      <div className="container">
        {data &&
          data.map((item) => (
            <div className="item" key={item.id}>
              <div
                className="light"
                style={{ fontWeight: "bold", fontSize: "20px" }}
              >
                {item.show.name}
              </div>
              <div className="bannerContainer">
                {item.show.image && item.show.image.medium ? (
                  <img
                    className="banner"
                    src={item.show.image.medium}
                    alt={item.show.name}
                  />
                ) : (
                  <h2>poster not uploaded</h2>
                )}
              </div>
              <div className="brief">
                <div>
                  Language: <b>{item.show.language}</b>
                </div>
                <div>
                  Avg Runtime:{" "}
                  {item.show.averageRuntime ? (
                    <b>{item.show.averageRuntime}</b>
                  ) : (
                    <b>0</b>
                  )}{" "}
                  min
                </div>
                <div>
                  Status: <b>{item.show.status}</b>
                </div>
                <button
                  style={{ width: "50%" }}
                  onClick={() => selectMovie(item.show)}
                >
                  About
                </button>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default Movie;

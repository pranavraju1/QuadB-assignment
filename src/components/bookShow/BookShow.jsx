import React, { useEffect, useState } from "react";

const BookShow = () => {
  const [user, setUser] = useState({ name: "", email: "" });
  const [movie, setMovie] = useState(null);
  const [USER, setUSER] = useState(null);

  const getMovie = () => {
    setMovie(() => JSON.parse(sessionStorage.getItem("movie")));
  };

  const getUser = () =>{
    const storedUser = JSON.parse(sessionStorage.getItem("user"));
    setUSER(storedUser);
  }
  useEffect(() => {
    getMovie();
    getUser();
  }, []);

  const handleForm = (e) => {
    e.preventDefault();
    console.log(user);
    sessionStorage.setItem("user", JSON.stringify(user));
    setUSER(user);
    setUser({ name: "", email: "" });
  };

  return (
    <div className="formcontainer">
      {movie && (
        <>
          <h1>{movie.name}</h1>
          <img src={movie.image.medium} alt="" />
          <h3 style={{ color: "grey" }}>
            Language: {movie.language} - Avg Runtime: {movie.averageRuntime}{" "}
            mins - Rating: {(movie.rating.average)?(movie.rating.average):('N/A')}
          </h3>
        </>
      )}
      {(USER) ? (
        <>
          <h3>Name: {USER.name}</h3>
          <h3>Emali: {USER.email}</h3>
        </>
      ) : (
        <form onSubmit={handleForm}>
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={user.name}
            onChange={(e) => setUser({ ...user, name: e.target.value })}
          />
          <input
            type="text"
            placeholder="Email"
            name="email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
          <button type="submit">Book</button>
        </form>
      )}
    </div>
  );
};

export default BookShow;

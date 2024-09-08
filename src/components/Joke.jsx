import { useState } from "react";
const Joke = () => {
  const [joke, setJoke] = useState("");

  const fetchJoke = () => {
    fetch("https://v2.jokeapi.dev/joke/Any?type=single")
      .then((response) => response.json())
      .then((data) => setJoke(data.joke));
  };
  return (<>
    <div className="joke-container">
      <div className="output">
        <p>{joke}</p>
      </div>
    </div>
    <button className="button"  onClick={fetchJoke}>
        <p>Generate Joke</p>
    </button>
    </>
  );
};

export default Joke;

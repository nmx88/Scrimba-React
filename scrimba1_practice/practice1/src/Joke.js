import React from "react";
import "./Joke.css";

function Joke(props) {

  return (
    <div className="joke-container">
      <div style={{margin: "10px 10px 10px 10px", padding: "10px 10px 10px 10px", }}>
        <p className="joke-header" style={{ fontFamily: "ComicSansMs", fontSize: "150%", color: "rgba(255,10,45)"  }}>
          Joke
        </p>

        <p className="question" style={{display: props.question ? "block" : "none"}}>Question: {props.question}</p>
        <p className="answer">Answer: {props.punchLine}</p>
        <hr />
      </div>
    </div>
  );
}

export default Joke;

import React from "react";
import "./Results.css";

export default function Results(props) {
  console.log(props.results);
  if (props.results) {
    return (
      <div className="Results">
        <h1>{props.results.word}</h1>
        <h3>{props.results.meanings[0].definition}</h3>
      </div>
    );
  } else {
    return null;
  }
}

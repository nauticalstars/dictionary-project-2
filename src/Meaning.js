import React from "react";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      <h2>{props.meaning.definition}</h2>
      <em>{props.meaning.example}</em>
    </div>
  );
}

import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      <h2>Definition: {props.meaning.definition}</h2>
      <h2>Example: {props.meaning.example}</h2>
      <Synonyms synonyms={props.meaning.synonyms} />
    </div>
  );
}

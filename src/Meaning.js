import React from "react";
import Synonyms from "./Synonyms";
import Example from "./Example";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      <div className="definition">{props.meaning.definition}</div>
      <div className="example">
        <Example example={props.meaning.example} />
      </div>
      <div>
        <Synonyms synonyms={props.meaning.synonyms} />
      </div>
    </div>
  );
}

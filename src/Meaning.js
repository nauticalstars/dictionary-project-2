import React from "react";
import Synonyms from "./Synonyms";
import Example from "./Example";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      <h2>
        <strong>Definition:</strong> {props.meaning.definition}
      </h2>
      <h2>
        <Example example={props.meaning.example} />
      </h2>
      <Synonyms synonyms={props.meaning.synonyms} />
    </div>
  );
}

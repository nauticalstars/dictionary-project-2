import React from "react";

export default function Synonyms(props) {
  if (props.synonyms) {
    return `Synonyms: ${props.synonyms}`;
  } else {
    return null;
  }
}

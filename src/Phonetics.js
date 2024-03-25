import React from "react";

export default function Phonetics(props) {
  console.log(props);
  if (props.props) {
    return `${props.props}`;
  } else {
    return null;
  }
}

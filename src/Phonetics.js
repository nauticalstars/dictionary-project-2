import React from "react";
export default function Phonetics(props) {
  if (props.props) {
    return `${props.props}`;
  } else {
    return null;
  }
}

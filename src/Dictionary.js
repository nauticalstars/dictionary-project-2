import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";
export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState("");

  function handleResponse(response) {
    console.log(response);
    setResults(response.data);
  }
  function search(event) {
    event.preventDefault();
    let apiKey = "89045e8b02ffo7bc061tb52f38ead08c";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }
  function keywordChange(event) {
    setKeyword(event.target.value);
  }
  return (
    <div className="dictionary">
      <form onSubmit={search}>
        <input type="search" onChange={keywordChange} />
      </form>
      <Results results={results} />
    </div>
  );
}

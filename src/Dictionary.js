import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState("");
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState("");

  function handleDictionaryResponse(response) {
    setResults(response.data);
  }

  function handlePhotosresponse(response) {
    setPhotos(response.data.photos);
  }

  function search() {
    let apiKey = "89045e8b02ffo7bc061tb52f38ead08c";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    let photoKey = "89045e8b02ffo7bc061tb52f38ead08c";
    let photoUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${photoKey}`;
    axios.get(photoUrl).then(handlePhotosresponse);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function keywordChange(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="dictionary">
        <section>
          <h1>What are you looking for?</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              onChange={keywordChange}
              defaultValue={props.defaultKeyword}
            />
          </form>

          <div className="hint">
            Suggested words: hedgehog, computer, cat...
          </div>
        </section>
        <Results results={results} />
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}

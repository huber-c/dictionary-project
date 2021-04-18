import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";
import Photos from "./Photos";

export default function Dictionary() {
  let [entry, setEntry] = useState("");
  let [results, setResults] = useState(null);
  let [photos, setPhotos] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function handlePixabayResponse(response) {
    setPhotos(response.data.hits);
  }

  function search(event) {
    event.preventDefault();

    //https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${entry}`;
    axios.get(apiUrl).then(handleResponse);
    let pixabayApiKey = "21219677-e437494d5d8ae28cf2eb1cfab";
    let pixabayApiUrl = `https://pixabay.com/api/?key=21219677-e437494d5d8ae28cf2eb1cfab&q=${entry}&image_type=photo&api_key=${pixabayApiKey}&per_page=9`;
    axios.get(pixabayApiUrl).then(handlePixabayResponse);
  }

  function updateEntryChange(event) {
    setEntry(event.target.value);
  }

  return (
    <div>
      <div className="Dictionary text-center">
        <h1>What would you like to look up?</h1>
        <form onSubmit={search}>
          <input
            className="dictionary-input"
            type="search"
            onChange={updateEntryChange}
            autoFocus={true}
          />
        </form>
        <div className="hint">
          <small>You can search for: meadow, water, clock...</small>
        </div>
      </div>
      <Results results={results} />
      <Photos photos={photos} />
    </div>
  );
}

import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary() {
  let [entry, setEntry] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function search(event) {
    event.preventDefault();

    //https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${entry}`;
    console.log(apiUrl);
    axios.get(apiUrl).then(handleResponse);
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
    </div>
  );
}

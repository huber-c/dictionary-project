import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
  let [entry, setEntry] = useState("");

  function handleResponse(response) {
    console.log(response.data[0]);
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
    <div className="Dictionary text-center">
      <form onSubmit={search}>
        <input type="search" onChange={updateEntryChange} autoFocus={true} />
      </form>
    </div>
  );
}
import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  let [entry, setEntry] = useState("");

  function search(event) {
    event.preventDefault();
    alert(`Searching for ${entry} definition`);
  }

  function updateEntryChange(event) {
    console.log(event.target.value);
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

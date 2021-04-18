import React from "react";
import "./Phonetic.css";
import ReactAudioPlayer from "react-audio-player";

export default function Phonetic(props) {
  return (
    <div className="Phonetic">
      <h6>Pronunciation:</h6>
      <ReactAudioPlayer src={props.phonetic.audio} controls />
      <br />
      <span className="text">{props.phonetic.text}</span>
    </div>
  );
}
// <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
// Listen
// </a>

import React from "react";
import ReactAudioPlayer from "react-audio-player";
import ReactDOM from "react-dom";

export default function Phonetic(props) {
  return (
    <div className="Phonetic">
      <ReactAudioPlayer src={props.phonetic.audio} onCanPlay controls />
      <a href={props.phonetic.audio} target="_blank">
        Listen
      </a>
      <br />
      {props.phonetic.text}
    </div>
  );
}

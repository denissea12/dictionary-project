import React from "react";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      <br />
      <h3>{props.meaning.definition}</h3>
      <br />
      <h3>{props.meaning.example}</h3>
    </div>
  );
}

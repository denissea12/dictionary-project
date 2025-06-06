import React from "react";
import Meaning from "./Meaning";
import "./Results.css";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Result">
        <section>
          <h2>{props.results.word}</h2>
          <div className="phonetic">{props.results.phonetic}</div>
        </section>
        {props.results.meanings.map(function (meaning, index) {
          return (
            <section key={index}>
              {" "}
              <Meaning meaning={meaning} />
            </section>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}

import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState(null);

  function handleResponse(response) {
    console.log(response.data.meanings[0]);
  }

  function search(event) {
    event.preventDefault();
    alert(`Searching for ${keyword} definition`);
  }
  let apiKey = "3d5bfbffo3ac0fea0f4a244a4b9t3ca4";
  let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
  axios.get(apiUrl).then(handleResponse);

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" onChange={handleKeywordChange} />
        <input type="submit" />
      </form>
    </div>
  );
}

import "./App.css";
import logo from "./logo.png";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="app-header">
          <img src={logo} className="app-logo" alt="logo" />
        </header>
        <main>
          <Dictionary defaultKeyword="sunrise" />
        </main>
      </div>
      <footer className="App-footer">
        Coded by Denisse Ramirez, open sourced on{" "}
        <a href="https://github.com/shecodesio/dictionary-project/blob/main/_snapshot/api/src/Dictionary.js">
          Github
        </a>
      </footer>
    </div>
  );
}

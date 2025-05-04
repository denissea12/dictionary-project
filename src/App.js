import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="app-header"></header>
        <main>
          <Dictionary />
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

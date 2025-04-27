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
        <footer className="App-footer">Coded by SheCodes</footer>
      </div>
    </div>
  );
}

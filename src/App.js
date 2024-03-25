import "./App.css";
import Dictionary from "./Dictionary";
import Results from "./Results";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"></header>
        <main>
          <Dictionary defaultKeyword="hedgehog" />
          <Results />
        </main>

        <footer className="app-footer">
          <small>
            Coded by Daria Mikita and is{" "}
            <a
              href="https://github.com/nauticalstars/dictionary-project-2"
              className="text-decoration-none"
              target="_blank"
              rel="noreferrer"
            >
              open sourced
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}

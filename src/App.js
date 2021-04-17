import logo from "./logo.svg";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="text-center footer">
          <small>
            Coded by{" "}
            <a
              href="https://github.com/huber-c/dictionary-project"
              target="_blank"
              rel="noreferrer"
            >
              Carina
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}

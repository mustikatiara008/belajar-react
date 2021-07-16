import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Dosen <code>Impian</code> ?
        </p>
        <a
          className="App-link"
          href="https://www.youtube.com/c/WebProgrammingUNPAS"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open!
        </a>
      </header>
    </div>
  );
}

export default App;

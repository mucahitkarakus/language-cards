import resim from "./assets/react.svg";
import {language} from "./data";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div>
        <img src={resim} alt="sa" className="react-logo" />
      </div>
      <div>
        <h2>Language</h2>
      </div>
    </div>
  );
}

export default App;

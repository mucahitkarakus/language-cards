import resim from "./assets/react.svg";
import {languages} from "./data";
import "./App.css";
import Card from "./componenets/Cards.js"

function App() {
  return (
    <div className="App">
      <div>
        <img src={resim} alt="sa" className="react-logo" />
      </div>
      <div className="down">
        <h2>Language</h2>
        <div className="map">
          {languages.map((language, index) => {
            return(
              <div>
                <Card key={index}{...language}/>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
}

export default App;

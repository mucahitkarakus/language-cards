import resim from "./assets/react.svg";
import {languages} from "./data";
import "./App.css";
import Card from "./componenets/Cards.js"

function App() {
  return (
    <div>
      <div>
        <img src={resim} alt="sa" className="reactlogo" />
      </div>
      <div className="down-container">
        <h2 className="h2">Language</h2>
        <div className="main-container">
          {languages.map((language, index) => {
            return(
              <div className="container">
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

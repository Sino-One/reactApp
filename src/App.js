import './App.css';
import Item from "./Item";
import {useState} from "react";

function App() {

    const [monState, setMonState] = useState(10);

    const click = () => {
        setMonState(monState*2);
    }

  return (
    <div className="App">
      <h1>Hello : {monState}</h1>
        <br/>
        <br/>
        <button onClick={click}>Click Me</button>
    </div>
  );
}

export default App;

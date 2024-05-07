import './App.css';
import StartScreen from './components/StartScreen';
import { useCallback, useEffect, useState } from "react";
import Game from "./components/Game";
import GameOver from "./components/GameOver";

// data
import { wordsList } from "./data/words";

const stages = [
  { id: 1, name: "start" },
  { id: 2, name: "game" },
  { id: 3, name: "end" },
];


function App() {
	const [gameStage, setGameStage] = useState(stages[0].name);
  return (
    <div className="App">
      {gameStage === "start" &&< StartScreen/>}
      {gameStage === "game" &&< Game/>}
      {gameStage === "end" &&< GameOver/>}
    </div>
  );
}

export default App;

import '../assets/Game.css';

function Game({retry}) {
  return (
    <div>
      <h1>Game</h1>
			<button onClick={retry}>Resetar jogo</button>
    </div>
  );
}

export default Game;
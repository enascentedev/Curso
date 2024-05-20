import '../assets/Game.css';

function Game({ retry }) {
	return (
		<div className="game">
			<p className="points">
				<span>Pontuação</span>:
			</p>
			<h1>Advinhe a palavra:</h1>
			<h3 className="tip">
				Dica sobre a palavra: <span></span>
			</h3>
			<p>você ainda tem x dicas</p>

			<div className="wordContainer">
				<span className="letter" >
				</span>
				<span className="blankSquare"></span>
			</div>
			<div className="letterContainer">
				<p>Tente adivnhar uma letra da palavra:</p>
				<form >
					<input type="text" name="letter" maxLength="1" required/>
					<button>Jogar!</button>
				</form>
			</div>
			<div className="wrongLettersContainer">
				<p>Letras já utilizadas:</p>
				<span > </span>
			</div>
		</div>
	);
}

export default Game;
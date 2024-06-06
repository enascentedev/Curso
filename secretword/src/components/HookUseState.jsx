import { useState } from "react";

export const HookUseState = () => {

	const [nome, setNome] = useState("emanuel");
 
	const chanceNome= () =>{
		setNome("emanuelNascente")
	}

	return (
		<div>
			<h2>{nome}</h2>
			<button onClick={chanceNome} >trocar nome</button>
		</div>
	);
};

export default HookUseState;

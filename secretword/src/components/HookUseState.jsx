import { useState } from "react";

export const HookUseState = () => {

	const [nome, setNome] = useState("emanuel");
	const [age, setAge] = useState("");
 
	const chanceNome= () =>{
		setNome("Emanuel Nascente")
	}

	return (
		<div>
			<h2>{nome}</h2>
			<button onClick={chanceNome} >trocar nome</button>
			<form action="submit">
				<p>digite sua idade</p>
				<input value={age} type="text" onChange={(e)=>setAge(e.target.value)}>
				</input>
				<hr/>
				<p>voce tem {age}anos</p>
			</form>
		</div>
	);
};

export default HookUseState;

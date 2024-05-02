import React, { useState } from 'react';
import Container from "./components/Container";
import './App.css';

function App() {
	const [number, setNumber]= useState(10);
	const handleMessage = (number)=>{
		setNumber (20);
	}
  return (
    <div>
			<h1>Curso React {number}</h1>

			<button onClick={handleMessage}>mudar numero</button>

			<Container brand="VW" color="Vermelho" km={535} />
		</div>

  );
}

export default App;

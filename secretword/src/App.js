import { BrowserRouter as Router} from 'react-router-dom';
import { HookUseState } from "./components/HookUseState";
import { HookUseReducer } from "./components/HookUseReducer";

function App() {
  

  return (
    <div className="App">
      <h1>Lista de produtos</h1>
			<Router>
		
				<HookUseState />
				<HookUseReducer />
				
			</Router>
     
    </div>
  );
}

export default App;

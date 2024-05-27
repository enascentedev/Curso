import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Product from './pages/Product';
import './App.css'
import Navbar from './components/Navbar';

function App() {
  

  return (
    <div className="App">
      <h1>Lista de produtos</h1>
			<Router>
				<Navbar></Navbar>
				<Routes>
					<Route path="/" element={<Home />}/>
					<Route path="/about" element={<About />}/>
					<Route path="/products/:id" element={<Product />}/>
					
				</Routes>
			</Router>
     
    </div>
  );
}

export default App;

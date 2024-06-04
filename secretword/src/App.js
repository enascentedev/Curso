import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Product from './pages/Product';
import Info from './pages/Info';
import NotFound from "./pages/NotFound";
import './App.css'
import Navbar from './components/Navbar';
import Search from "./pages/Search";
import { SearchForm } from "./components/SearchForm";

function App() {
  

  return (
    <div className="App">
      <h1>Lista de produtos</h1>
			<Router>
				<Navbar/>
				<SearchForm />
				<Routes>
					<Route path="/" element={<Home />}/>
					<Route path="/about" element={<About />}/>
					<Route path="/products/:id" element={<Product />}/>
					<Route path="/products/:id/info" element={<Info />} />
					<Route path="*" element={<NotFound />} />
					<Route path="/search" element={<Search />} />
				</Routes>
			</Router>
     
    </div>
  );
}

export default App;

import './App.css'
import { Navbar } from './components/NavBar/NavBar'
import { Home } from './components/Home/Home'
import Contador from './components/Contador/Contador'

function App() {
  return (
    <div className="App">
      <Navbar/>
	  <Home greeting="Bienvenido!"/>
	  <Contador />
    </div>
  );
}

export default App;

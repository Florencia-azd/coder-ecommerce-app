import './App.css'
import { Navbar } from './components/NavBar/NavBar'
import { Home } from './components/Home/Home'

function App() {
  return (
    <div className="App">
      <Navbar/>
	  <Home greeting="Bienvenido!"/>
    </div>
  );
}

export default App;

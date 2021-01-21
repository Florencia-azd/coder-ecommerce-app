import './App.css'
import { Navbar } from './components/NavBar/NavBar'
import { Home } from './components/Home/Home'
import Contador from './components/Contador/Contador'
import Promise from './components/Promise/Promise'

function App() {
  return (
    <div className="App">
      <Navbar/>
	  <Home greeting="Bienvenido!"/>
	  <Contador />
	  <h1>Promise y Map!</h1>
	  <Promise />
    </div>
  );
}

export default App;

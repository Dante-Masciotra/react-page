import './App.css';
import Home from './pages/Home/Home';
import './global.css';
import Bubbles from './components/Bubbles/Bubbles';

function App() {
  return (
    <div className="App">
			<div className="wrapper">
     
			  <Home />
        <Bubbles/>
			</div>
		</div>
  );
}

export default App;

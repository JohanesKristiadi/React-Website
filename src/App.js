import './App.css';
import "./style/App.css"

// untuk membuat halaman seperti "localhost:3000/home" dll bisa import ini dulu
import { Route } from 'react-router-dom';
import Home from './views/Home';
import About from './views/About';
import Contact from './views/Contact';

const App = () => {
  return (
    <div className='app'>
      <Route path="/" exact component={Home} />
      <Route path="/About" exact component={About} />
      <Route path={"/Contact"} exact component={Contact} />
    </div>
  )
}

export default App;

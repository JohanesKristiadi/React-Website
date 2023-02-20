import './App.css';
import "./style/App.css"
import Router from './routes/Router';

// untuk membuat halaman seperti "localhost:3000/home" dll bisa import ini dulu
// import { Route } from 'react-router-dom';
// import Home from './views/Home';
// import About from './views/About';
// import Contact from './views/Contact';

const App = () => {
  return (
    <div>
      <Router />
    </div>
  )
}

export default App;

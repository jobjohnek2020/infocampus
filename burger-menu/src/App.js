import { HashRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import BurgerMenu from './components/BurgerMenu';
import Home from './components/Home';
import About from './components/About';
function App() {
  return (
    <div>
      <HashRouter>
        <BurgerMenu/>
        <Routes>
          <Route index element={<Home/>}/>
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;

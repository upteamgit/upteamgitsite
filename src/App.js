import logo from './logo.svg';
import './App.css';
import Home from './pages/home';
import About from './pages/about';
import Contactus from './pages/contact-us';
import Header from './components/header';
import { Link, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contactus />} />
        </Routes>
    </div>
  );
}

export default App;

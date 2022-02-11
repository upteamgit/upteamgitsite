import './App.css';
import { Home, About, Contactus, Location } from './pages';
import { Navbar, Footer }  from './components';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <div className="mainBg">
        <Navbar />
          <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/location" element={<Location />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contactus />} />
        </Routes>

        <Footer />
    </div>
    </div>
  );
}

export default App;

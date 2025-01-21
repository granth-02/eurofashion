import React from 'react';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import './App.css';
import Know from './Components/Know';
import Suits from './Components/Suits';
import BlueSuit from './Components/BlueSuit';
import GreySuit from './Components/GreySuit';
import CharcoalSuit from './Components/CharcoalSuit';
import BlackSuit from './Components/BlackSuit';
import BrownSuit from './Components/BrownSuit';
import CheckSuits from './Components/CheckSuit';
import StripeSuit from './Components/StripeSuit';
import SimpleSuit from './Components/SimpleSuit';
import POWSuit from './Components/POWSuit';
import HBSuit from './Components/HBSuit';
import Contact from './Components/Contact';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/know-your-suit' element={<Know />} />
          <Route exact path='/suits' element={<Suits />} />
          <Route exact path='/suits/colors/blue' element={<BlueSuit />} />
          <Route exact path='/suits/colors/grey' element={<GreySuit />} />
          <Route exact path='/suits/colors/charcoal' element={<CharcoalSuit />} />
          <Route exact path='/suits/colors/black' element={<BlackSuit />} />
          <Route exact path='/suits/colors/brown' element={<BrownSuit />} />
          <Route exact path='/suits/patterns/checks' element={<CheckSuits />} />
          <Route exact path='/suits/patterns/stripes' element={<StripeSuit />} />
          <Route exact path='/suits/patterns/simple' element={<SimpleSuit />} />
          <Route exact path='/suits/patterns/POW' element={<POWSuit />} />
          <Route exact path='/suits/patterns/HB' element={<HBSuit />} />
          <Route exact path='/contact' element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

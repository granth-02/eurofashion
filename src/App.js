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
import BlackSuit from './Components/BlackSuit';
import BrownSuit from './Components/BrownSuit';
import CheckSuits from './Components/CheckSuit';
import StripeSuit from './Components/StripeSuit';
import SimpleSuit from './Components/SimpleSuit';
import Contact from './Components/Contact';
import Shirts from './Components/Shirts';
import StripeShirt from './Components/StripeShirt';
import CheckShirt from './Components/CheckShirt';
import SolidShirt from './Components/SolidShirt';
import HBShirt from './Components/HBShirt';
import LinenSuit from './Components/LinenSuit';
import OliveSuit from './Components/OliveSuit';
import BeigeSuit from './Components/BeigeSuit';
import SelfSuit from './Components/SelfSuit';
import KnowShirt from './Components/KnowShirt';
import LinenShirt from './Components/LinenShirt';
import Jacket from './Components/Jacket';

function App() {
  return (
    <div className="App">
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/know-your-suit' element={<Know />} />
          <Route path='/know-your-shirt' element={<KnowShirt />} />
          <Route path='/suits' element={<Suits />} />
          <Route path='/shirts' element={<Shirts />} />
          <Route path='/jackets' element={<Jacket />} />
          <Route path='/suits/colors/blue' element={<BlueSuit />} />
          <Route path='/suits/colors/grey' element={<GreySuit />} />
          <Route path='/suits/colors/black' element={<BlackSuit />} />
          <Route path='/suits/colors/brown' element={<BrownSuit />} />
          <Route path='/suits/colors/olive' element={<OliveSuit />} />
          <Route path='/suits/colors/beige' element={<BeigeSuit />} />
          <Route path='/suits/patterns/checks' element={<CheckSuits />} />
          <Route path='/suits/patterns/solid' element={<SimpleSuit />} />
          <Route path='/suits/patterns/self' element={<SelfSuit />} />
          <Route path='/suits/patterns/linen' element={<LinenSuit />} />
          <Route path='/suits/patterns/stripes' element={<StripeSuit />} />
          <Route path='/shirts/patterns/stripes' element={<StripeShirt />} />
          <Route path='/shirts/patterns/checks' element={<CheckShirt />} />
          <Route path='/shirts/patterns/solid' element={<SolidShirt />} />
          <Route path='/shirts/patterns/linen' element={<LinenShirt />} />
          <Route path='/shirts/patterns/HB' element={<HBShirt />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
    </div>
  );
}

export default App;

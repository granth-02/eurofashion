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

function App() {
  return (
    <div className="App">
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/know-your-suit' element={<Know />} />
          <Route exact path='/know-your-shirt' element={<KnowShirt />} />
          <Route exact path='/suits' element={<Suits />} />
          <Route exact path='/shirts' element={<Shirts />} />
          <Route exact path='/suits/colors/blue' element={<BlueSuit />} />
          <Route exact path='/suits/colors/grey' element={<GreySuit />} />
          <Route exact path='/suits/colors/black' element={<BlackSuit />} />
          <Route exact path='/suits/colors/brown' element={<BrownSuit />} />
          <Route exact path='/suits/colors/olive' element={<OliveSuit />} />
          <Route exact path='/suits/colors/beige' element={<BeigeSuit />} />
          <Route exact path='/suits/patterns/checks' element={<CheckSuits />} />
          <Route exact path='/suits/patterns/solid' element={<SimpleSuit />} />
          <Route exact path='/suits/patterns/self' element={<SelfSuit />} />
          <Route exact path='/suits/patterns/linen' element={<LinenSuit />} />
          <Route exact path='/suits/patterns/stripes' element={<StripeSuit />} />
          <Route exact path='/shirts/patterns/stripes' element={<StripeShirt />} />
          <Route exact path='/shirts/patterns/checks' element={<CheckShirt />} />
          <Route exact path='/shirts/patterns/solid' element={<SolidShirt />} />
          <Route exact path='/shirts/patterns/linen' element={<LinenShirt />} />
          <Route exact path='/shirts/patterns/HB' element={<HBShirt />} />
          <Route exact path='/contact' element={<Contact />} />
        </Routes>
    </div>
  );
}

export default App;

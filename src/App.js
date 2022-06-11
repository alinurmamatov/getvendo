import './App.css';
import {Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Kitchen from './pages/Kitchen';
import Garden from './pages/Garden';
import BathBody from './pages/BathBody';
import LightningDecor from './pages/LightningDecor';
import Furniture from './pages/Furniture';
import Rooms from './pages/Rooms';
import About from './pages/About';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import Profile from './pages/Profile';

function App() {
  return (
    <>
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/kitchen' element={<Kitchen/>}/>
        <Route path='/garden' element={<Garden/>}/>
        <Route path='/rooms' element={<Rooms/>}/>
        <Route path='/bathandbody' element={<BathBody/>}/>
        <Route path='/lightning-decor' element={<LightningDecor/>}>
          <Route path='table-lamps'/>
          <Route path='floor-lamps'/>
          <Route path='ceiling-lamps'/>
          <Route path='lampshades'/>
          <Route path='inteligent-lightning'/>
        </Route>
        <Route path='/furniture' element={<Furniture/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact-us' element={<Contact/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/my-profile' element={<Profile/>}/>
      </Routes>
    </div>
    </>
  );
}

export default App;

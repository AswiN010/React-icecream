import './App.css';
import Footer from './component/Footer';
import Header from './component/Header';
import Home from './component/Home';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import About from './component/About';
import Contact from './component/Contact';
import Usabout from './component/Usabout';
import Store from './component/Store';
import Login from './component/Login';
import Register from './component/Register';
import Appp from './component/Appp';
function App() {
  return (
    <div className="App">
      <header className="App-header">
       
      </header>
      
      <Router>
      <Header/>
         <Routes>
        <Route path='/' element={<Home />}  />
        <Route path='/about' element={<About />}/>
        <Route path='/Contact' element={<Contact/>}/>     
        <Route path='/story' element={<Usabout />}/>  
        <Route path='/store' element={<Store />}/>  
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/app' element={<Appp/>}/>

        </Routes> 
        <Footer/>
      </Router>
  
    </div>
  );
}

export default App;

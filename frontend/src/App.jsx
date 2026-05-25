 import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css'
import Home from './components/Home.jsx';
import Signup from './components/Signup.jsx';
import Userlist from './components/Userlist.jsx';
 import Nav from './components/Nav.jsx';
 import ContextDemo from './components/ContextDemo.jsx';
 import { createContext, useState } from 'react';
 const NameContext = createContext();
function App() { 
  const [name,setName] = useState('MERN TTT');
  return (
    <NameContext.Provider value={{name,setName}} >
    <BrowserRouter>
    <Nav />
    <section style={{'width':'1200px','margin':'0 auto'}}>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/signup' element={<Signup />}/>
          <Route path='/userlist' element={<Userlist />}/>
          <Route path='/contextdemo' element={<ContextDemo />}/>
        </Routes>     
        </section>
    </BrowserRouter>
    </NameContext.Provider>
  );
}

export  { App,NameContext};

 import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css'
import Home from './components/Home.jsx';
import Signup from './components/Signup.jsx';
import Userlist from './components/Userlist.jsx';
 import Nav from './components/Nav.jsx';
function App() { 

  return (
    <BrowserRouter>
    <Nav />
    <section style={{'width':'1200px','margin':'0 auto'}}>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/signup' element={<Signup />}/>
          <Route path='/userlist' element={<Userlist />}/>
        </Routes>     
        </section>
    </BrowserRouter>
  );
}

export default App;

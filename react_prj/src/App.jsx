import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './Home.jsx';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Aboutus from './Aboutus.jsx'
import StateDemo from './StateDemo.jsx'
import Signup from './Signup.jsx'
import UseEffectDemo from './pages/UseEffectDemo.jsx'
import DemoUseMemo from './pages/DemoUseMemo.jsx'
import CallbackDemo from './pages/CallbackDemo.jsx'
import Parent1  from './pages/Parent1.jsx'
import UserSignup from './pages/UserSignup.jsx'
import ReducerDemo from './pages/ReducerDemo.jsx'
function App() {  

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} ></Route>  
        <Route path='/aboutus' element={<Aboutus />} ></Route>  
        <Route path="/statedemo" element={<StateDemo />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/useeffectdemo" element={<UseEffectDemo/>} />
        <Route path="/usememodemo" element={<DemoUseMemo/>} />
        <Route path="/useCB" element={<CallbackDemo />} />
        <Route path="/useCBParentChild" element={<Parent1 />} />
        <Route path="/useformdemo" element={<UserSignup />}/>
        <Route path="/usereducer" element={<ReducerDemo />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App

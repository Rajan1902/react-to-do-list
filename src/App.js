
import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import {BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    
    <Header></Header>
    <Routes>
    <Route path='/' element = {<Home/>}></Route>
    <Route path='/about' element = {<About/>}></Route>
    <Route path='/contact' element = {<Contact/>}></Route>
    </Routes>
    <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;

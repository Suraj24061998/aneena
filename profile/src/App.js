
import './App.css';
import{BrowserRouter,Routes,Route}from'react-router-dom'
import Nav from './Components/Navbar/Nav';
import Home from './Components/Home/Home';
import Skil from './Components/Skills/Skil';
import About from './Components/About/About';
import Resume from './Components/Resume/Resume';
import Service from './Components/Services/Service';
import Gallery from './Components/Gallery/Gallery';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Foot from './Components/Foot/Foot';

function App() {
  return (
    <div className="App">
      
     <BrowserRouter>
     <Nav/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/resume' element={<Resume/>}/>
      <Route path='/service' element={<Service/>}/>
      <Route path='/project' element={<Gallery/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path= '/skills' element={<Skil/>}/>
     </Routes>
     {/* <Footer/> */}
     <Foot/>
     </BrowserRouter>
    </div>
  );
}

export default App;

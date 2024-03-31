import NavBar from './Components/Navbar'
import Footer from './Components/Footer'
import Home from './Components/Home'
import { Routes,Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
  <Route exact path="/" element={<Home />} />
</Routes>
      <Footer />
    </div>
  ); 
}

export default App;

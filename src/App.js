// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import { BrowserRouter as 
        Router, Routes, Route } from "react-router-dom"
import Movie from './pages/Movie';
import Search from './pages/Search';
import Popular from './pages/Popular';


function App() {
  return (
    <div className="App">
      
      <Router>
        <Navbar title="Movie" />
          <Routes>
            <Route index element={<Home/>}></Route>
            <Route path="movie/:id" element={<Movie/>}></Route>
            <Route path='search' element={<Search/>}></Route>
            <Route path='popular' element={<Popular/>}></Route>
          </Routes>
        <Footer/> 
      </Router>
    </div>
  );
}

export default App;

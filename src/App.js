import './App.css';
import {BrowserRouter , Route } from "react-router-dom";
import Home from './pages/Home';
import Project from './pages/Project';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProjectDisplay from './pages/ProjectDisplay';

function App() {
  return (
     <BrowserRouter>
      <div className="App">
        <Navbar />
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/project" exact>
          <Project />
        </Route>
        <Route path="/project/:id" >
          <ProjectDisplay />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

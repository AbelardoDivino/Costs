import {BrowserRouter as Router, Routes, Route,limk, Link} from 'react-router-dom'
import Contact from './components/pages/Contact';
import Home from './components/pages/Home';
import Newproject from './components/pages/Newproject';
import Company from './components/Company';
import Container from './components/pages/layout/Container';
function App() {
  return (
    <Router>
      <div>
        <Link to="/">Home</Link>
        <Link to="/Contact">Contato</Link>
        <Link to="/Company">Empresa</Link>
        <Link to="/Newproject">Novo Projeto</Link>
      </div>
      <Container customclass="min-height">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Company' element={<Company />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Newproject' element={<Newproject />} />
      </Routes>
      </Container>
      <p>footer</p>
    </Router>


  );
}

export default App;

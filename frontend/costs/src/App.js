import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Contact from './components/pages/Contact';
import Home from './components/pages/Home';
import Newproject from './components/pages/Newproject';
import Company from './components/Company';
import Container from './components/pages/layout/Container';
import Navbar from './components/pages/Navbar'
import Footer from './components/pages/Footer'
import Projects from './components/pages/Projects';
function App() {
  return (
    <Router>
      <Navbar />
      <Container customclass="min-height">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Company' element={<Company />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/Projects' element={<Projects />} />
          <Route path='/Newproject' element={<Newproject />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;

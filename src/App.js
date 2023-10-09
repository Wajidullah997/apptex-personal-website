import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import ContactUs from './components/ContactUs';
import Portfolio from './components/portfolio/Portfolio';
import Testimonials from './components/Test/Testimonials';
import OurServices from './components/OurServices';
import About from './components/About';
function App() {
  return (
    <div>
      <Header />
      <Home />
      <OurServices />
      <About/>
      <Portfolio />
      <Testimonials/>
      <ContactUs/>
    </div>
  );
}

export default App;

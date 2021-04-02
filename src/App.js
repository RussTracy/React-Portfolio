import './App.css';
import Navigation from './components/Navigation';
import About from './components/About';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';


function App() {
  return (
    <main>
      <Navigation></Navigation>
      <Resume></Resume>
      <Contact></Contact>
      <About></About>
      <Footer></Footer>
    </main>
  );
}

export default App;

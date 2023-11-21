import './App.css';
import G1 from './components/12';
import Contact from './components/Contact';
import Price from './components/Pricing';
import Blog from './components/blog';
import Nav from './components/navigation';
import Project from './components/project';
import Serving from './components/services';
import Unav from './components/unav';
function App() {
  return (
    <>
      <Nav/>
      <Unav/>
      <Serving/>
      <G1/>
      <Project/>
      <Blog/>
      <Price/>
      <Contact/>
    </>
  );
}

export default App;

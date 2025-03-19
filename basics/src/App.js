import Header from './Header';
import Home from './Home'
import About from './About';
import Contact from './Contact';

function App() {
  return (
    <>
    <h1>Hello from reactJS</h1>
    <Header/>
    <Home name = {'Vinayak'}/>
    <Contact/>
    <About/>
    </>
  );
}

export default App;

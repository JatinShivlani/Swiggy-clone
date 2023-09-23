
import { useEffect} from 'react';
import './App.css';
import hoverFunction from './components/Navbar/hoverFunction';
import Main from './components/Main/Main';
import Scrolling from './components/Main/Functions/Scrolling';
import NavbarSwitch from './components/Main/Functions/NavbarSwitch';

function App() {
  useEffect(() => {
    hoverFunction()
    Scrolling()
  },)

  return (
    <>
      <NavbarSwitch/>
      <Main/>
    </>
  );
}

export default App;

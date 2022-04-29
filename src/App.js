import {useState} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './screens/Home'
import About from './screens/About'
import Logo from './componants/Logo'
import NavigationBar from './componants/NavigationBar'
import CountriesContext from './appContexts/CountriesContext'

function App() {
  const [countriesCount, setCountriesCount] = useState(30);

  return (
    <>
    <BrowserRouter>
    <Logo/>
    <NavigationBar/>
    <CountriesContext.Provider value={{countriesCount,setCountriesCount}}>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<Home />} />
    </Routes>
    </CountriesContext.Provider>
  </BrowserRouter>
  </>
  );
}

export default App;

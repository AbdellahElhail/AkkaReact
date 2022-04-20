import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './screens/HomeScreen'
import About from './screens/AboutScreen'
import Logo from './componants/Logo'
import NavigationBar from './componants/NavigationBar'
function App() {
  return (
    <>
    <BrowserRouter>
    <Logo/>
    <NavigationBar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<Home />} />
    </Routes>
  </BrowserRouter>
  </>
  );
}

export default App;

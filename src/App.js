import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './screens/Home'
import About from './screens/About'
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

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./pages/Home/Home"
import AboutUs from "./pages/AboutUs/AboutUs"
import Training from "./pages/Training/Training"
import Login from "./pages/Login/Login"
import Registration from "./pages/Registration/Registration"
import Subscription from "./pages/Subscription/Subscription"
import Pricing from "./pages/Pricing/Pricing"
import Program from "./pages/Program/Program"

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/aboutUs' element={<AboutUs />} />
        <Route path='/training' element={<Training />} />
        <Route path='/program' element={<Program />} />
        <Route path='/login' element={<Login />} />
        <Route path='/registration' element={<Registration />} />
        <Route path='/subscription' element={<Subscription />} />
        <Route path='/pricing' element={<Pricing />} />
        <Route path='/*' element={"Error 404 Page not found"} />
      </Routes>
    </>

  );
}

export default App;

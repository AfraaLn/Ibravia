import { BrowserRouter, Route, Routes} from "react-router-dom";
import { Home } from "./Pages/Home";
import { NotFound } from "./Pages/NotFound";
import { Login } from "./Pages/Login";
import { Properties } from "./Pages/Properties";
import { Reservation } from "./Pages/Reservation";
import { AboutUs } from "./Pages/AboutUs";
import { SignUp } from "./Pages/SignUp";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes> 
          <Route index element={<Home />}/>
          <Route path="/Login" element={<Login />}/>
          <Route path="/Properties" element={<Properties />}/>
          <Route path="/Reservation" element={<Reservation />}/>
          <Route path="/AboutUs" element={<AboutUs />}/> 
          <Route path="/SignUp" element={<SignUp />}/>       
          <Route path= "*" element = {<NotFound />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}


export default App;

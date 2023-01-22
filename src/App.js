import Header from "./Components/Header";
import {BrowserRouter, Routes,Route} from "react-router-dom"
import Home from "./Pages/Home"
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
function App() {
  return (
    <div>
      <BrowserRouter > 
      <Header />
      <Routes> 
      <Route exact path="/" element={<Home />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/signup" element={<Signup />}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

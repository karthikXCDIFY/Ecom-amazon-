import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Components/Login";
import Error from "./Components/Error";
import Home from "./Components/Home";
import SugestedImages from "./Components/SugestedImages";
import Cart from "./Components/Cart";


function App() {
  return (
  
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/suggestedimage" element={<SugestedImages/>} />
        <Route path="/cart" element={<Cart />} />
        {/* <Route path="/error" element={<Error />} /> */}
      </Routes>
    </Router>
  );
}

export default App;

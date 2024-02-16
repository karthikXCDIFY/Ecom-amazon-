// import {
//   BrowserRouter as Router,
//   Route,
//   Routes,
//   Navigate,
// } from "react-router-dom";
// import Login from "./Components/Login";
// import Error from "./Components/Error";
// import Home from "./Components/Home";
// import SugestedImages from "./Components/SugestedImages";
// import Cart from "./Components/Cart";
// const PrivateRoute = ({ element }) => {
//   // Check if the user is authenticated
//   const isAuthenticated = !!localStorage.getItem("token");

//   // If authenticated, render the component, else redirect to the login page
//   return isAuthenticated ? element : <Navigate to="/" replace />;
// };

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route element={<PrivateRoute element={<Login />} />} path="/" />
//         <Route element={<PrivateRoute element={<Home />} />} path="/home" />
//         <Route
//           element={<PrivateRoute element={<SugestedImages />} />}
//           path="/suggestedimage"
//         />

//         <Route element={<PrivateRoute element={<Cart />} />} path="/cart" />

//         {/* <Route path="/" element={<Login />} />
//         <Route path="/home" element={<Home />} />
//         <Route path="/suggestedimage" element={<SugestedImages/>} />
//         <Route path="/cart" element={<Cart />} /> */}
//         {/* <Route path="/error" element={<Error />} /> */}
//       </Routes>
//     </Router>
//   );
// }

// export default App;

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Login from "./Components/Login";
import Error from "./Components/Error";
import Home from "./Components/Home";
import SugestedImages from "./Components/SugestedImages";
import Cart from "./Components/Cart";
import { ReactNode } from "react"; // Import ReactNode type
import About from "./Components/About";
import Contact from "./Components/Contact";
import PlaceOrder from "./Components/PlaceOrder/PlaceOrder";

interface PrivateRouteProps {
  element: ReactNode; // Explicitly type the element prop
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ element }) => {
  // Check if the user is authenticated
  const isAuthenticated = !!localStorage.getItem("token");

  // If authenticated, render the component, else redirect to the login page
  return isAuthenticated ? element : <Navigate to="/" replace />;
};

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Login />} path="/" />
        <Route element={<PrivateRoute element={<Home />} />} path="/home" />
        <Route
          element={<PrivateRoute element={<SugestedImages />} />}
          path="/suggestedimage"
        />
        <Route element={<PrivateRoute element={<Cart />} />} path="/cart" />
        <Route element={<PrivateRoute element={<About />} />} path="/about" />
        <Route
          element={<PrivateRoute element={<Contact />} />}
          path="/contact"
        />
        <Route
          element={<PrivateRoute element={<PlaceOrder />} />}
          path="/orders"
        />
      </Routes>
    </Router>
  );
}

export default App;

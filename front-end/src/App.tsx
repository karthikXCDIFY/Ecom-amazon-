import React, { ReactNode } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./Components/Login";
import Home from "./Components/Home";
import SugestedImages from "./Components/SugestedImages";
import Cart from "./Components/Cart";
import About from "./Components/About";
import Contact from "./Components/Contact";
import PlaceOrder from "./Components/PlaceOrder/PlaceOrder";
import { SearchProvider } from "./Context/SearchContext";
import OrderSummary from "./Components/Order Summary/OrderSummary";
import Layout from "./Components/Layout/layOut";

// Import the SearchProvider

interface PrivateRouteProps {
  element: ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ element }) => {
  const isAuthenticated = !!sessionStorage.getItem("token");

  return isAuthenticated ? element : <Navigate to="/" replace />;
};

function App() {
  return (
    
    <Router>
      <SearchProvider>
        <Layout>
        {" "}
        {/* Wrap your routes with the SearchProvider */}
        <Routes>
          <Route element={<Login />} path="/" />
          <Route element={<PrivateRoute element={<Home />} />} path="/home" />
          <Route
            element={<PrivateRoute element={<SugestedImages />} />}
            path="/suggestedimage/:id"
          />
          {/* <Route element={<PrivateRoute element={<Cart />} />} path="/cart" /> */}

          <Route element={<PrivateRoute element={<Cart />} />} path="/cart/:id/:selected" />
          <Route element={<PrivateRoute element={<About />} />} path="/about" />
          <Route
            element={<PrivateRoute element={<Contact />} />}
            path="/contact"
          />

          <Route
            element={<PrivateRoute element={<PlaceOrder />} />}
            path="/placeorders/:id"
          />
          <Route
            element={<PrivateRoute element={<OrderSummary />} />}
            path="/ordersummary/:id"
          />
        </Routes>
        </Layout>
      </SearchProvider>
      
    </Router>
  );
}

export default App;

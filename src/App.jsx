import { BrowserRouter, Routes, Route } from "react-router-dom";
//pages
import Home from "./pages/Home.jsx";
import Header from "./Components/Header.jsx";
import Footer from "./Components/Footer.jsx";
import ProductDetails from "./pages/ProductDetails.jsx";
import Cart from "./pages/Cart.jsx";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

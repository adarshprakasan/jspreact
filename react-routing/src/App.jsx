import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Products from "./Components/Products";
import About from "./Components/About";
import SignUp from "./Components/SignUp";
import Pnf from "./Components/Pnf";
import Mobiles from "./Components/Mobiles";
import Laptops from "./Components/Laptops";
import Watches from "./Components/Watches";
import NavBar from "./Components/NavBar";
import Fashion from "./Components/Fashion";
import ProductDetails from "./Components/ProductDetails";

function App() {
  //!------Manual Routing------

  // let path = window.location.pathname;

  // if (path === "/") {
  //   return <Home />;
  // } else if (path === "/products") {
  //   return <Products />;
  // } else if (path === "/about") {
  //   return <About />;
  // } else if (path === "/signup") {
  //   return <SignUp />;
  // } else {
  //   return <Pnf />;
  // }

  //!------react-router-dom Routing------
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Products />}>
            <Route index element={<Fashion />} />
            <Route path="mobiles" element={<Mobiles />} />
            <Route path="watches" element={<Watches />} />
            <Route path="laptops" element={<Laptops />} />
          </Route>
          <Route path="product-details/:pid" element={<ProductDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="*" element={<Pnf />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

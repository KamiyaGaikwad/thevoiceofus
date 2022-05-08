import { Routes, Route} from "react-router-dom";
import Home from "./Home.jsx";
import "./App.css"
import AddStory from "./form.jsx";
import Progress from "./progress.jsx";
// import ProductList from "./ProductList/productDisplay";
// import Cart from "./CartManagement/cart";
// import WishList from "./wishManagement/wish";
// import LogOut from "./Authentication/logout";
// import SignUp from "./Authentication/signup";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addstory" element={<AddStory />} />
        <Route path="/progress" element={<Progress />} />
        {/*<Route path="/wishlist" element={<WishList />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/logout" element={<LogOut />} />
        <Route path="/signup" element={<SignUp />} /> */}
      </Routes>
      
    </div>
  );
}

export default App;

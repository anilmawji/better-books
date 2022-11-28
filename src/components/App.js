import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "../pages/Home";
import BookPurchase from "../pages/BookPurchase";
import Recommendations from "../pages/Recommendations";
import Wishlist from "../pages/Wishlist";
import LogIn from "../pages/Login";
import Cart from "../pages/Cart";
import SignUp from "../pages/SignUp";
import Search from "../pages/Search";
import Account from "../pages/Account";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="content">
          <Routes>
            <Route path="" element={<Home />} />
            <Route path="/search" element={<Search searchQuery="test" />} />
            <Route path="/books" element={<BookPurchase />} />
            <Route path="/recommendations" element={<Recommendations />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/account" element={<Account />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

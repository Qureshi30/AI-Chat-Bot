import Chat from "./components/Chat/Chat.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import About from "./components/About/About.jsx";
import Home from "./components/Homepage/Home.jsx";
import Chatpop from "./components/Chatpopup/chatpop.jsx";
import Product from "./components/Products/Product.jsx";
// import Footer from "./components/Footer/Footer.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Chat" element={<Chat />} />
          <Route path="/About" element={<About />} />
          <Route path="/Chatpop" element={<Chatpop />} />
          <Route path="/Product" element={<Product />} />
        </Routes>
        {/* <Footer /> */}
      </Router>
    </>
  );
}

export default App;

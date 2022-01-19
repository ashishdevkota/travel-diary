import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllPost from "./components/AllPost";
import Home from "./components/Home";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/allpost" element={<AllPost />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;

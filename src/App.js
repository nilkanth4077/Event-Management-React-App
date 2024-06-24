import "./App.css";
import { Navigation } from "./Components/Navbar/Navigation";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { PublicPage } from "./Pages/PublicPage";
import { SignupPage } from "./Components/SignupPage/SignupPage";
import "bootstrap/dist/css/bootstrap.min.css";
import { LoginPage } from "./Components/LoginPage/LoginPage";
import { Footer } from "./Components/Footer/Footer";
import { HomePage } from "./Components/HomePage/HomePage";

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<PublicPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;

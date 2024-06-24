import "./App.css";
import { Navigation } from "./Components/Navbar/Navigation";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { PublicPage } from "./Pages/PublicPage";
import { SignupPage } from "./Components/SignupPage/SignupPage";
import "bootstrap/dist/css/bootstrap.min.css";
import { LoginPage } from "./Components/LoginPage/LoginPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<PublicPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

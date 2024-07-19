import "./App.css";
import { Navigation } from "./Components/Navbar/Navigation";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { PublicPage } from "./Pages/PublicPage";
import "bootstrap/dist/css/bootstrap.min.css";
import { Footer } from "./Components/Footer/Footer";
import { HomePage } from "./Components/HomePage/HomePage";
import AllEvents from "./Components/AllEvents/AllEvents";
import AdminDashboard from "./Components/Admin/AdminDashboard";
import EventDetails from "./Components/EventDetails/EventDetails";
import AuthPage from "./Components/AuthPage/AuthPage";
import { Profile } from "./Components/AuthPage/Profile";

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<PublicPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/profile/:userId" element={<Profile />} />
          <Route path="/all-events" element={<AllEvents />} />
          <Route path="/event-details/:eventId" element={<EventDetails />} />
          <Route path="//admin-dashboard" element={<AdminDashboard />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

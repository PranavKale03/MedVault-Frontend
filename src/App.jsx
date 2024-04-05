import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import AppNavbar from "./components/AppNavbar/AppNavbar";
import { UserProvider } from "./context/UserContext";
import Login from "./pages/login";
import SignUp from "./pages/signup";
import Dashboard from "./pages/dashboard";
import PatientList from "./pages/patient-list";
import Appointments from "./pages/appointments";
import Contact from "./pages/contact";
import Profile from "./pages/profile";

function App() {
  return (
    <main>
      <Router>
        <UserProvider>
          <AppNavbar />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/" element={<Dashboard />} />
            <Route path="/patient-list" element={<PatientList />} />
            <Route path="/appointments" element={<Appointments />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/:id" element={<Profile />} />
          </Routes>
        </UserProvider>
      </Router>
    </main>
  );
}

export default App;

import "./App.module.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/Navbar/Navbar.jsx";
import Home from "./components/Home/Home.jsx";
import User from "./components/User/User.jsx";
import MatchForm from "./components/MatchForm/MatchForm.jsx";
import UnderConstruction from "./components/UnderConstruction/UnderConstruction.jsx";
import Login from "./components/Login/Login.jsx";
import Register from "./components/Register/Register.jsx";
import ProtectedRoute from "./protectedRoute/ProtectedRoute";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/user" element={<User />} />
          <Route exact path="/new-match" element={<MatchForm />} />
          <Route exact path="/under-construction" element={<UnderConstruction />} />
          <Route exact path="/login" element={
              <ProtectedRoute role="guest">
                <Login />
              </ProtectedRoute>}/>
          <Route exact path="/register" element={
              <ProtectedRoute role="guest">
                <Register />
              </ProtectedRoute>}/>
        </Routes>
      </div>
    </Router>
  )
};

export default App;
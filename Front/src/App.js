import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/Navbar/Navbar.jsx";
import Home from "./components/Home/Home.jsx";
import User from "./components/User/User.jsx";
import MatchForm from "./components/MatchForm/MatchForm.jsx";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/user" element={<User />} />
          <Route exact path="/new-match" element={<MatchForm />} />
        </Routes>
      </div>
    </Router>
  )
};

export default App;
import { useContext } from "react";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import Messenger from "./pages/messenger/Messenger"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";

function App() {
  const {user} = useContext(AuthContext)
  return (
    <Router>
      <Routes>
        <Route path="/" element={user? <Home /> : <Register />} />
        <Route path="/login" element={user? <Home /> : <Login />} />
        <Route path="/register" element={user? <Home /> :<Register />} />
        <Route path="/profile/:username" element={<Profile />} />
        <Route path="/messager" element={<Messenger />} />
      </Routes>
    </Router>
  );
}

export default App;
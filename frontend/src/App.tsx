
import { Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/registrer";
import RecoverPassword from "./pages/reset-password";
import VerificationCode from "./pages/verific-code";
import NewPassword from "./pages/new-password";
import Home from "./pages/Home"; 

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/recover" element={<RecoverPassword />} />
      <Route path="/verify" element={<VerificationCode />} />
      <Route path="/new-password" element={<NewPassword />} />
    </Routes>
  );
}

export default App;

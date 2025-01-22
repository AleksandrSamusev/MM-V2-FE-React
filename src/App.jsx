import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./Normalize.css"
import "./App.css";
import HomePage from "./pages/HomePage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import DashboardPage from "./pages/DashboardPage.jsx";
import ManagerPage from "./pages/ManagerPage.jsx";

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<HomePage />} />
                <Route exact path="/login" element={<LoginPage />} />
                <Route exact path="/signup" element={<RegisterPage />} />
                <Route exact path="/dashboard" element={<DashboardPage />} />
                <Route exact path="/manager" element={<ManagerPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App

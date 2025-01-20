import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./Normalize.css"
import "./App.css";
import HomePage from "./pages/HomePage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<HomePage />} />
                <Route exact path="/login" element={<LoginPage />} />
                <Route exact path="/signup" element={<RegisterPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App

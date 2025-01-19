import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage.jsx";
import LoginPage from "./pages/LoginPage.jsx";

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<HomePage />} />
                <Route exact path="/login" element={<LoginPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App

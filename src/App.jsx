import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage.jsx";

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Homepage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App

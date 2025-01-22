import Navbar from "../components/navbar/Navbar.jsx";
import ManagerComponent from "../components/managerComponent/ManagerComponent.jsx";

const ManagerPage = () => {
    return (
        <>
            <div className="container">
                <Navbar />
                <ManagerComponent />
            </div>
        </>
    )
}

export default ManagerPage;
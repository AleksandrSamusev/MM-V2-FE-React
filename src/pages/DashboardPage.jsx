import Navbar from "../components/navbar/Navbar.jsx";
import DashboardComponent from "../components/dashboardComponent/DashboardComponent.jsx";
import Footer from "../components/footer/Footer.jsx";

const DashboardPage = () => {
    return (
        <>
            <div className="container">
                <Navbar />
                <DashboardComponent />
                <Footer />
            </div>

        </>

    )
}

export default DashboardPage;
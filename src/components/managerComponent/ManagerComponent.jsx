import "./managerComponent.css"
import CardLeftSection from "../cardLeftSection/CardLeftSection.jsx";
import CardRightSection from "../cardRightSection/CardRightSection.jsx";

const ManagerComponent = () => {
    return (
        <>
            <div className="div-cards">
                <CardLeftSection/>
                <CardRightSection/>
            </div>

        </>
    )
}
export default ManagerComponent;
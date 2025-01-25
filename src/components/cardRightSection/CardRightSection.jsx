import "./cardRightSection.css"
import TablesSection from "./TablesSection.jsx";

const CardRightSection = () => {
    return (
        <div style={{backgroundColor: "#0F0F0F", minHeight: "50vh", width: "30%"}}>
            <div className="div-card-manager-right" style={{marginBottom: "5rem", borderColor: "transparent"}}>
                <div className="div-inner-left-manager-second dark-blue-background">July total</div>
                <div className="div-inner-right-manager-second dark-red-background">-100.00€</div>
            </div>
            <TablesSection />
        </div>
    )
}

export default CardRightSection;
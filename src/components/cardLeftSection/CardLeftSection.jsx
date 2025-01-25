import "./cardLeftSection.css"
import CalendarSection from "./CalendarSection.jsx";
import SVGSection from "./SVGSection.jsx";
import TableSection from "./TableSection.jsx";

const CardLeftSection = () => {
    return (
        <div className="whole-card-left-section">
            <div className="div-card-manager">
                <div className="div-inner-left-manager-first ">2025</div>
                <div className="div-inner-right-manager-first">Manage your expenses and incomes in 2025.</div>
            </div>
            <CalendarSection/>
            <SVGSection/>
            <TableSection/>
        </div>
    )
}

export default CardLeftSection;
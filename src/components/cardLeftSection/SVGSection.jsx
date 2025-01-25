import "./SVGSection.css"
import SVGPayoneer from "./SVGPayoneer.jsx";
import SVGBalanceSection from "./SVGBalanceSection.jsx";

const SVGSection = () => {
    return (
        <div style={{display: "flex", justifyContent: "space-between", marginTop: "3.9rem"}}>
            <SVGPayoneer/>
            <SVGBalanceSection />
        </div>
    )
}

export default SVGSection;
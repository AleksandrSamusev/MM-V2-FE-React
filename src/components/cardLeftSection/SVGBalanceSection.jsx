import "./SVGBalanceSection.css"
import SVGBalanceRow from "./SVGBalanceRow.jsx";

const SVGBalanceSection = () => {
    return (
        <div className="div-svg-balance-section">
            <span className="span-current-balance-title">current balance</span>
            <span className="span-current-balance-value">700.85 €</span>
            <SVGBalanceRow title = {"Add expense"}/>
            <SVGBalanceRow title = {"Add income"}/>
        </div>
    )
}

export default SVGBalanceSection;
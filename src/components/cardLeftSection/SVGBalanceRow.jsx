import "./SVGBalanceRow.css"
import SVGPlus from "./SVGPlus.jsx";

const SVGBalanceRow = (props) => {
    return (
        <div className="div-svg-balance-row">
            <span>{props.title}</span>
            <SVGPlus/>
        </div>
    )
}

export default SVGBalanceRow;
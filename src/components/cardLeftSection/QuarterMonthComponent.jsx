import "./quarterMonthComponent.css"

const QuarterMonthComponent = (props) => {
    return (
        <div className="div-quarter-month">
            <div className="div-quarter">{props.quarter}</div>
            <div style={{display: "flex"}}>
                <div className="div-month">
                    {props.quarter === "Q1" ? "01" :
                        props.quarter === "Q2" ? "04" :
                            props.quarter === "Q3" ? "07" :
                                props.quarter === "Q4" ? "10" :
                                    ""}
                </div>
                <div
                    className="div-month">
                    {props.quarter === "Q1" ? "02" :
                        props.quarter === "Q2" ? "05" :
                            props.quarter === "Q3" ? "08" :
                                props.quarter === "Q4" ? "11" :
                                    ""}
                </div>
                <div
                    className="div-month">
                    {props.quarter === "Q1" ? "03" :
                        props.quarter === "Q2" ? "06" :
                            props.quarter === "Q3" ? "09" :
                                props.quarter === "Q4" ? "12" :
                                    ""}
                </div>
            </div>
        </div>
    )
}

export default QuarterMonthComponent;
import "./dashboardCard.css"

const DashboardCard = (props) => {
    return (
        <div className="div-card">
            <div className={"div-inner-left " + (props.backgroundColor) + " " + (props.textColor)} >{props.contentLeft}</div>
            <div className="div-inner-right">{props.contentRight}</div>
        </div>
    )
}
export default DashboardCard;
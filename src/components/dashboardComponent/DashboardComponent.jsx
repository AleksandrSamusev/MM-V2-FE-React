import "./dashboardComponent.css"
import DashboardCard from "../dashboardCard/DashboardCard.jsx";

const DashboardComponent = () => {

    return (
        <>
            <div className="main-div-dashboard">
                <h1 className="main-title-dashboard">MONEY MANAGER</h1>

                <div style={{display: "flex", gap: "4%", justifyContent: "center"}}>
                    <DashboardCard backgroundColor={"green"} textColor={"colorWhite"} contentLeft={"2025"}
                                   contentRight={"Manage your expenses and incomes in 2025."}/>
                    <DashboardCard backgroundColor={"magenta"} textColor={"colorWhite"} contentLeft={"Info"}
                                   contentRight={"This section contains all links to useful resources, articles and guides."}/>
                </div>

                <br/><br/>

                <div style={{display: "flex", gap: "4%", justifyContent: "center"}}>
                    <DashboardCard backgroundColor={"blue"} textColor={"colorWhite"} contentLeft={"Stats"}
                                   contentRight={"Depending on the selected time period, get statistics on expenses and income."}/>
                    <DashboardCard backgroundColor={"yellow"} textColor={"colorBlack"} contentLeft={"Temp"}
                                   contentRight={"Depending on the selected time period, get statistics on expenses and income."}/>
                </div>
            </div>
        </>
    )
}

export default DashboardComponent;
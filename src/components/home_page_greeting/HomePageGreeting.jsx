import "./HomePageGreeting.css"
import BtnLoginHome from "../buttons/home_login_button/BtnLoginHome.jsx";

const HomePageGreeting = () => {
    return (
        <div className="greeting-container">
            <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                <h1 className="main-title">MONEY MANAGER</h1>
                <p className="main-paragraph">Simple app to manage you incomes and expenses.</p>
                <br/>
                <p className="main-paragraph-promo">To use the app please login as an existing user or create a new
                    account
                    with a Sign In option</p>
                <div className="btn-group">
                    <BtnLoginHome title={"Login"}/>
                    <BtnLoginHome title={"Sign Up"}/>
                </div>
                <br/>
            </div>
        </div>
    )
}

export default HomePageGreeting;
import BtnLoginHome from "../buttons/home_login_button/BtnLoginHome.jsx";
import "./loginComponent.css"

const LoginComponent = () => {
    return (
        <div className="login-container">
            <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                <h1 style={{marginBottom: "5rem"}} className="main-title">Login</h1>
                <br/>
                <div style={{display: "flex"}}>
                    <label htmlFor="username">Username<span className="asterisk"> *</span></label>
                    <input style={{marginLeft: "2rem"}} className="login-input" type="text" name="username" id="username"/>

                </div>
                <br/>
                <br/>
                <div style={{display: "flex"}}>
                    <label htmlFor="password">Password<span className="asterisk"> *</span></label>
                    <input style={{marginLeft: "2rem"}} className="login-input-password" type="text" name="password" id="password"/>
                    <div style={{width: "80px", backgroundColor: "#6EFF3C", height: "40px", borderBottomRightRadius: "5px", borderTopRightRadius: "5px", textAlign: "center", marginRight: "7rem"}}>
                        <svg width="35" height="19" viewBox="0 0 35 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M17.5 19C7.83502 19 0 9.5 0 9.5C0 9.5 7.83502 0 17.5 0C27.165 0 35 9.5 35 9.5C35 9.5 27.165 19 17.5 19ZM2.0924 10.028C1.90181 9.83632 1.73056 9.65923 1.57971 9.5C1.73056 9.34077 1.90181 9.16368 2.0924 8.97199C2.94816 8.11133 4.18856 6.96182 5.72015 5.81321C8.10564 4.0242 11.1403 2.28025 14.4931 1.58382C14.9763 2.15497 15.2743 2.93719 15.2743 3.8C15.2743 5.5489 14.0501 6.96667 12.5399 6.96667C11.6603 6.96667 10.8777 6.48567 10.3776 5.73841C10.0089 6.70289 9.80556 7.75925 9.80556 8.86667C9.80556 13.4138 13.2334 17.1 17.4618 17.1C21.6902 17.1 25.1181 13.4138 25.1181 8.86667C25.1181 5.85747 23.6168 3.22533 21.3759 1.78906C24.3836 2.5845 27.1022 4.18009 29.2799 5.81321C30.8114 6.96182 32.0518 8.11133 32.9076 8.97199C33.0982 9.16368 33.2694 9.34077 33.4203 9.5C33.2694 9.65923 33.0982 9.83632 32.9076 10.028C32.0518 10.8887 30.8114 12.0382 29.2799 13.1868C26.1985 15.4976 22.034 17.7333 17.5 17.7333C12.966 17.7333 8.80148 15.4976 5.72015 13.1868C4.18856 12.0382 2.94816 10.8887 2.0924 10.028Z" fill="black"/>
                        </svg>
                    </div>
                </div>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <span className="span-mandatory">Mandatory fields marked with<span className="asterisk"> *</span></span>
                <br/>
                <br/>

                <br/>
                <BtnLoginHome title={"Login"}/>
                <br/>
            </div>
        </div>
    )
}

export default LoginComponent;
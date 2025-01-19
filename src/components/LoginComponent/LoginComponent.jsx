import BtnLoginHome from "../buttons/home_login_button/BtnLoginHome.jsx";
import "./loginComponent.css"
import InputWithSVG from "../InputWithSVG/InputWithSVG.jsx";
import InputLoginNoSVG from "../inputLoginNoSVG/InputLoginNoSVG.jsx";
import LabelWithAsterisk from "../labels/labelWithAsterisk/LabelWithAsterisk.jsx";

const LoginComponent = () => {
    return (
        <div className="login-container">
            <div className="div-main">
                <h1 className="main-title">Login</h1>
                <div className="div-for-input">
                    <LabelWithAsterisk for={"username"} value={"Username"}/>
                    <InputLoginNoSVG />
                </div>
                <div className="div-for-input">
                    <LabelWithAsterisk for={"password"} value={"Password"}/>
                    <InputWithSVG />
                </div>
                <span className="span-mandatory">Mandatory fields marked with<span className="asterisk"> *</span></span>
                <BtnLoginHome title={"Login"}/>
            </div>
        </div>
    )
}

export default LoginComponent;
import LabelWithAsterisk from "../labels/labelWithAsterisk/LabelWithAsterisk.jsx";
import InputLoginNoSVG from "../inputLoginNoSVG/InputLoginNoSVG.jsx";
import InputForPassword from "../InputWithSVG/InputForPassword.jsx";
import BtnLoginHome from "../buttons/home_login_button/BtnLoginHome.jsx";
import "./registerComponent.css"

const RegisterComponent = () => {
    return (
        <div className="login-container">
            <div className="div-main">
                <h1 className="main-title">Sign Up</h1>
                <div className="div-for-input">
                    <LabelWithAsterisk for={"firstname"} value={"First name"}/>
                    <InputLoginNoSVG />
                </div>
                <div className="div-for-input">
                    <LabelWithAsterisk for={"lastname"} value={"Last name"}/>
                    <InputLoginNoSVG />
                </div>
                <div className="div-for-input">
                    <LabelWithAsterisk for={"username"} value={"Username"}/>
                    <InputLoginNoSVG />
                </div>
                <div className="div-for-input">
                    <LabelWithAsterisk for={"email"} value={"E-mail"}/>
                    <InputLoginNoSVG />
                </div>
                <div className="div-for-input">
                    <LabelWithAsterisk for={"password"} value={"Password"}/>
                    <InputForPassword />
                </div>
                <div className="div-for-input">
                    <LabelWithAsterisk for={"confirm"} value={"Confirm"}/>
                    <InputForPassword />
                </div>
                <span className="span-mandatory">Mandatory fields marked with<span className="asterisk"> *</span></span>
                <BtnLoginHome title={"Sign Up"}/>
            </div>
        </div>
    )
}

export default RegisterComponent;
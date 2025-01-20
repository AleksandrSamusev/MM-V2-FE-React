import LabelWithAsterisk from "../labels/labelWithAsterisk/LabelWithAsterisk.jsx";
import InputLoginNoSVG from "../inputLoginNoSVG/InputLoginNoSVG.jsx";
import InputForPassword from "../InputWithSVG/InputForPassword.jsx";
import BtnLoginHome from "../buttons/home_login_button/BtnLoginHome.jsx";
import "./registerComponent.css"

const RegisterComponent = () => {
    return (
        <div className="login-container">
            <div className="div-main-register">
                <h1 className="main-title-register">Sign Up</h1>
                <div>
                    <div className="div-for-input-register">
                        <LabelWithAsterisk for={"firstname"} value={"First name"}/>
                        <InputLoginNoSVG/>
                    </div>
                    <div className="div-for-input-register">
                        <LabelWithAsterisk for={"lastname"} value={"Last name"}/>
                        <InputLoginNoSVG/>
                    </div>
                    <div className="div-for-input-register">
                        <LabelWithAsterisk for={"username"} value={"Username"}/>
                        <InputLoginNoSVG/>
                    </div>
                    <div className="div-for-input-register">
                        <LabelWithAsterisk for={"email"} value={"E-mail"}/>
                        <InputLoginNoSVG/>
                    </div>
                    <div className="div-for-input-register">
                        <LabelWithAsterisk for={"password"} value={"Password"}/>
                        <InputForPassword/>
                    </div>
                    <div className="div-for-input-register">
                        <LabelWithAsterisk for={"confirm"} value={"Confirm"}/>
                        <InputForPassword/>
                    </div>
                </div>
                <span className="span-mandatory-register">Mandatory fields marked with<span className="asterisk"> *</span></span>
                <BtnLoginHome title={"Sign Up"}/>
            </div>
        </div>
    )
}

export default RegisterComponent;
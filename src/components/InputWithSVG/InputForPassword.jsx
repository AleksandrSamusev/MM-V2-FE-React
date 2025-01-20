import "./inputForPassword.css"
import {useState} from "react";

const InputForPassword = () => {

    const [clicked, setClicked] = useState(false);

    function handleClick() {
        setClicked(!clicked);
    }

    return (
        <>
            <div style={{display: "flex"}}>
                <input className="login-input-password" type={!clicked ? "password" : "text"} name="password"
                       id="password"/>
                <div className={"svg-div " + (!clicked ? 'green' : 'yellow')} onClick={handleClick}>
                    {!clicked ? <span className="span-status-show">SHOW</span> :
                        <span className="span-status-show">HIDE</span>}
                </div>
            </div>
        </>
    )
}

export default InputForPassword;
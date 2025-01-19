import "./labelWithAsterisk.css"

const LabelWithAsterisk = (props) => {
    return (
        <label htmlFor={props.for}>{props.value}<span className="asterisk"> *</span></label>
    )
}

export default LabelWithAsterisk;
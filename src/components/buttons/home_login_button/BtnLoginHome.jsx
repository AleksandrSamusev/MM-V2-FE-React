import "./btnLoginHome.css"

const BtnLoginHome = (props) => {
    return (
        <div className="btn">
            <span className="btn-span">{props.title}</span>
        </div>
    )
}

export default BtnLoginHome;
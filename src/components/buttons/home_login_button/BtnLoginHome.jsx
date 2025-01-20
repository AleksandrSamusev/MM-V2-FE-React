import "./btnLoginHome.css"

const BtnLoginHome = (props) => {

    return (
        <div className="btn">
            <a href={props.path} className="btn-span">{props.title}</a>
        </div>
    )
}

export default BtnLoginHome;
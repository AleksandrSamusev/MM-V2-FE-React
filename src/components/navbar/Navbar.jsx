import "./navbar.css"

const Navbar = () => {
    return (
        <>
            <ul className="navbar">
                <div className="container">
                    <div className="navbar-elements">
                        <li className="list-item">Home</li>
                        <li className="list-item">Login</li>
                        <li className="list-item">Sign Up</li>
                        <li className="list-item">Links</li>
                    </div>
                </div>
            </ul>
        </>
    )
}

export default Navbar;
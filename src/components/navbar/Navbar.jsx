import "./navbar.css"

const Navbar = () => {
    return (
        <>
            <div className="navbar">
                <a href="/" className="list-item">Home</a>
                <div className="navbar-right-group">
                    <a href="/login" className="list-item">Login</a>
                    <a href="/signup" className="list-item">Sign Up</a>
                </div>
            </div>
        </>
    )
}

export default Navbar;
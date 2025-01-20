import "./navbar.css"

const Navbar = () => {
    return (
        <>
            <div className="navbar">
                <a href="/" className="navbar-link">Home</a>
                <div className="navbar-right-group">
                    <a href="/login" className="navbar-link">Login</a>
                    <a href="/signup" className="navbar-link">Sign Up</a>
                </div>
            </div>
        </>
    )
}

export default Navbar;
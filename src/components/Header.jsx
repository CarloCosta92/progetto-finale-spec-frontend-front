import { NavLink } from "react-router-dom"

const Header = () => {
    return (
        <header className="navbar navbar-dark bg-dark p-4 ">
            <div className="container">

                <NavLink className="navbar-brand" to="/">
                    Boolcar
                </NavLink>

            </div>
        </header>
    )
}

export default Header
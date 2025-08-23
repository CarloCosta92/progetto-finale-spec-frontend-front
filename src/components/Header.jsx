import { NavLink } from "react-router-dom"

const Header = ({ handleOpen }) => {
    return (
        <header className="navbar navbar-dark bg-dark p-4 ">
            <div className="container">

                <NavLink className="navbar-brand" to="/">
                    Boolcar
                </NavLink>

                <button className="btn btn-outline-light" onClick={handleOpen}>
                    I miei preferiti
                </button>

            </div>
        </header>
    )
}

export default Header
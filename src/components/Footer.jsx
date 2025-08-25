import { NavLink } from "react-router-dom"

const Footer = () => {
    return (
        <footer className="bg-dark text-light p-4 ">
            <div className="container">

                <div className="text-center">
                    <NavLink className="navbar-brand" to="/">Boolcar</NavLink>
                    <p className="mb-0">
                        Confronta auto usate in modo semplice e veloce
                    </p>
                </div>

                <hr />

                <div className="text-center">
                    <p>2025 - Comparatore Auto - Tutti i diritti riservati</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
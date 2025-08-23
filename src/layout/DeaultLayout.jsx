import { useState } from "react";
import Footer from "../components/footer"
import SideModal from "../components/SideModal"
import Header from "../components/Header";

const DefaultLayout = ({ children }) => {
    const [show, setShow] = useState(false);

    const handleOpen = () => setShow(true);
    const handleClose = () => setShow(false);
    return (
        <>
            <div className="d-flex flex-column min-vh-100">
                <Header handleOpen={handleOpen} />
                <main className="container my-4 flex-grow-1">
                    {children}
                </main>
                <Footer />
            </div>
            <SideModal show={show} handleClose={handleClose} />
        </>
    )
}

export default DefaultLayout
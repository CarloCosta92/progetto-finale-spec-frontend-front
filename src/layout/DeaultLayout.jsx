import Footer from "../components/footer"
import Header from "../components/header"

const DefaultLayout = ({ children }) => {
    return (
        <>
            <div className="d-flex flex-column min-vh-100">
                <Header />
                <main className="container my-4 flex-grow-1">
                    {children}
                </main>
                <Footer />
            </div>
        </>
    )
}

export default DefaultLayout
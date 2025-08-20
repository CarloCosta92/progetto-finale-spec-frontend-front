import Footer from "../components/footer"
import Header from "../components/header"

const DefaultLayout = () => {
    return (
        <>
            <div className="d-flex flex-column min-vh-100">
                <Header />
                <main className="container my-4 flex-grow-1">
                    <h1>sono il main</h1>
                </main>
                <Footer />
            </div>
        </>
    )
}

export default DefaultLayout
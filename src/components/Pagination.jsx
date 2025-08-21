const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const prev = () => onPageChange(Math.max(currentPage - 1, 1));
    const next = () => onPageChange(Math.min(currentPage + 1, totalPages));

    return (
        <div className="d-flex justify-content-center align-items-center mt-3">
            <button
                className="btn me-2"
                onClick={prev}
                disabled={currentPage === 1}
            >
                Prev
            </button>
            <span className="mx-2">{currentPage} / {totalPages}</span>
            <button
                className="btn ms-2"
                onClick={next}
                disabled={currentPage === totalPages}
            >
                Next
            </button>
        </div>
    );
};

export default Pagination;

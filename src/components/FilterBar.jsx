const FilterBar = ({
    search,
    setSearch,
    categoryFilter,
    setCategoryFilter,
    sortBy,
    setSortBy,
    categories,
    sortOrder,
    setSortOrder
}) => {
    return (
        <div className="row mb-3 align-items-end">

            {/* Cerca */}
            <div className="col-md-4">
                <label className="form-label text-white">Cerca per veicolo</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Cerca per auto"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>

            {/* Categoria */}
            <div className="col-md-4">
                <label className="form-label text-white">Cerca per categoria</label>
                <select
                    className="form-select"
                    value={categoryFilter}
                    onChange={(e) => setCategoryFilter(e.target.value)}
                >
                    <option value="">Tutte le categorie</option>
                    {categories.map((cat, i) => (
                        <option key={i} value={cat}>
                            {cat}
                        </option>
                    ))}
                </select>
            </div>

            {/* Ordinamento */}
            <div className="col-md-4">
                <label className="form-label text-white">Ordina per</label>
                <div className="input-group">
                    <select
                        className="form-select"
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                    >
                        <option value="">Nessun ordinamento</option>
                        <option value="title">Titolo</option>
                        <option value="category">Categoria</option>
                    </select>
                    <button
                        type="button"
                        className="btn btn-outline-secondary"
                        onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
                    >
                        {sortOrder === "asc" ? "⬆️" : "⬇️"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FilterBar;

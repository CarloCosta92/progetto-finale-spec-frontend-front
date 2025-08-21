const FilterBar = ({
    search,
    setSearch,
    categoryFilter,
    setCategoryFilter,
    sortBy,
    setSortBy,
    categories
}) => {
    return (
        <div className="row mb-3">

            <div className="col-md-4">
                <label >Cerca per veicolo</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Cerca per auto"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>

            <div className="col-md-4">
                <label >Cerca per categoria</label>
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


            <div className="col-md-4">
                <label >Ordina per</label>
                <select
                    className="form-select"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                >
                    <option value="">Nessun ordinamento</option>
                    <option value="title">Ordina per Titolo</option>
                    <option value="category">Ordina per Categoria</option>
                </select>
            </div>
        </div>
    );
};

export default FilterBar;

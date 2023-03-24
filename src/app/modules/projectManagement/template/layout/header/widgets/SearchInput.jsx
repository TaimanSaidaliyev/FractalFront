export const SearchInput = () => {
    return (
        <div className="input-group mt-2 mb-2 border border-success rounded">
            <span className="input-group-text bg-white border-0 text-primary" >
                <i className="bi bi-search"></i>
            </span>
            <input type="text" className="form-control form-control-sm border-0" placeholder="Поиск по проекту" aria-label="Username" aria-describedby="basic-addon1"/>
        </div>
    )
}

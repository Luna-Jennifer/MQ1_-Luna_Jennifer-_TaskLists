const FilterButton = (props) => {
    return (
       
        <button type="button" className="btn-group" role="group" aria-pressed="true">
             <span type="button" class="visually-hidden">All</span>
            <button type="button" class="btn btn-outline-primary">All</button>
        </button>
    );

}

export default FilterButton;
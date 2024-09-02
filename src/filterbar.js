import React from 'react';
// import './FilterBar.css';
import './App.css';

function FilterBar() {
    return (
        <div className="filter-bar">
            <button>All</button>
            <button>Gaming</button>
            <button>Black Myth: Wukong</button>
            {/* Add more filter options as necessary */}
        </div>
    );
}

export default FilterBar;

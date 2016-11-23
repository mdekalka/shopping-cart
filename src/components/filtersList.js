import React from 'react';

const FiltersList = ({ list, onSelect, name }) => {
    const filtersList = list.map(item => {
        return (
            <li key={item.id} className="filters-list-item">
                <input type="radio" name={name} id={item.id} value={item.name} checked={item.selected} onChange={() => {
                    onSelect(item.id);
                }}/>
                <label htmlFor={item.id}>{item.name}</label>
            </li>
        );
    });

    return (
        <ul className="filters-list item-container">
            {filtersList}
        </ul>
    );
}

export default FiltersList;
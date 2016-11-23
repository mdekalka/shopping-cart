
const toggleSelect = (id) => {
    return {
        type: 'TOGGLE_SELECT',
        id: id
    }
}

const loadFilters = (list) => {
    return {
        type: 'LOAD_FILTERS',
        payload: list
    }
}

export {
    toggleSelect,
    loadFilters
}
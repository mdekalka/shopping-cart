import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import '../styles/filtersList.css';

import { toggleSelect, loadFilters } from '../actions/filtersAction';
import constants from '../constants/constants';
import FiltersList from '../components/filtersList';

class FiltersContainer extends Component {
    componentDidMount() {
        const { loadFilters } = this.props.filtersActions;
        const { FOOD_FILTERS: filtersList } = constants;

        loadFilters(filtersList);
    }

    render() {
        const { list } = this.props;
        const { toggleSelect } = this.props.filtersActions;

        return <FiltersList name={'radio-type'} list={list} onSelect={toggleSelect} />;
    }
}

const mapStateToProps = (state) => {
    return {
        list: state.filtersList.filters
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        filtersActions: bindActionCreators({ toggleSelect, loadFilters }, dispatch)
    }
}
FiltersContainer = connect(mapStateToProps, mapDispatchToProps)(FiltersContainer);

export default FiltersContainer

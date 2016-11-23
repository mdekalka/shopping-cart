import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../styles/mixins.css';

import CardContainer from './cardContainer';
import FiltersContainer from './filtersContainer';
import SellOutContainer from './selloutContainer';
import Loader from '../components/loader';

const findById = (cards, id) => {
    return cards.find(cardItem => {
        return cardItem.id === id;
    });
}

class ProductContainer extends Component {
    constructor() {
        super();

        this.state = {
            selectedItems: [],
            activeState: {},
            isLoading: false
        };
    }

    toggleSelected = (id, active) => {
        const { cards } = this.props.cardsState;
        let newItems;

        if (active) {
            const currentAddCard = findById(cards, id);

            if (currentAddCard) {
                newItems = this.state.selectedItems;
                newItems.push(currentAddCard);
            }
        } else {
            const items = this.state.selectedItems;
            const currentRemoveCard = findById(cards, id);

            newItems = items.filter(item => {
                return item.id !== currentRemoveCard.id;
            })
        }

        const activeState = this.state.activeState;

        this.setState({
            selectedItems: newItems,
            activeState: {...activeState, [id]: active}
        });
    }

    removeSelected = (id, active) => {
        this.toggleSelected(id, active);
    }

    removeAll = () => {
        this.setState({
            selectedItems: [],
            activeState: {},
            isLoading: true
        });

        // TODO: dispatch action for selling orders
        setTimeout(() => {
            this.setState({isLoading: false});
        }, 2000);
    }

    render() {
        const { cards } = this.props.cardsState;
        const { selected } = this.props;
        const loader = this.state.isLoading ? <Loader message={'for the KING'} /> : null;

        return (
            <div className="card-container">
                <CardContainer activeState={this.state.activeState} cards={cards} selected={selected} toggleSelected={this.toggleSelected} />
                <div className="filters-container">
                    <SellOutContainer removeAll={this.removeAll} removeSelected={this.removeSelected} selectedItems={this.state.selectedItems} />
                    <FiltersContainer />
                </div>
                {loader}
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        selected: state.filtersList.selected,
        cardsState: state.cards
    }
}

ProductContainer = connect(mapStateToProps)(ProductContainer);

export default ProductContainer;
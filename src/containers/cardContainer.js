import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import '../styles/cardsList.css';

import CardList from '../components/cardList';

import { getCards } from '../services/cardService';
import * as cardActions from '../actions/cardAction';

const filterByType = (list, type) => {
    const holdFilter = 'All';

    if (!type || type.value === holdFilter) {
        return list;
    } else {
        return list.filter(listiItem => {
            return listiItem.type === type.value;
        });
    }
}

class CardContainer extends Component {
    componentDidMount() {
        this.getCards((err) => {
            if (err) {
                return;
            }
            // do some actions if you need to
        });
    }

    getCards(callback) {
        const { loadCardsStart, loadCardsSuccess, loadCardsFail} = this.props.cardsActions;

        callback = callback || function() {};

        loadCardsStart();
        getCards().then(cards => {
            loadCardsSuccess(cards);
            callback();
        }).catch(error => {
            loadCardsFail();
            callback(error);
        });
    }

    render() {
        const { cards, selected, toggleSelected, activeState } = this.props;

        const filteredCards = filterByType(cards, selected);

        return <CardList activeState={activeState} toggleSelected={toggleSelected} cards={filteredCards} />;
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        cardsActions: bindActionCreators(cardActions, dispatch)
    }
}

CardContainer = connect(() => {
    return {}
}, mapDispatchToProps)(CardContainer);

export default CardContainer;
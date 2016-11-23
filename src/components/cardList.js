import React, { Component } from 'react';
import classNames from 'classnames';

const CardList = ({ cards, toggleSelected, activeState }) => {
    const cardsList = cards.map(card => {
        return <CardItem active={activeState[card.id]} toggleSelected={toggleSelected} key={card.id} {...card} />
    });

    return (
        <div className="card-list">
            {cardsList}
        </div>
    );
}

class CardItem extends Component {
    onItemClick = (id, state) => {
        const newState = !state;

        this.props.toggleSelected(id, newState);
    }

    render() {
        const { id, name, info, img, type, SP, active } = this.props;
        const imageSrc= `${img}/${id}`;

        const listClasses = classNames({
            'card-list-item': true,
            active: active
        })

        return (
            <div className={listClasses} onClick={() => {
                this.onItemClick(id, active);
            }}>
                <img className="list-item-image" src={imageSrc} alt={name} />
                <div className="list-item-name">{name}</div>
                <p className="list-item-info">{info}</p>
                <div className="list-item-type clear">
                    <div className="align-left list-item-caption">Type:</div>
                    <div className="align-right">{type}</div>
                </div>
                <div className="list-item-price clear">
                    <div className="align-left list-item-caption">Price:</div>
                    <div className="align-right">{SP} $</div>
                </div>
            </div>
        );
    }

}

export default CardList;
import React , { Component } from 'react';
import '../styles/sellOut.css';

class SellOutContainer extends Component {
    renderList(list, removeSelected) {
        if (list.length) {
            return list.map(listItem => {
                return (
                    <div key={listItem.id} className="sellout-item">
                        <span className="sellout-caption sellout-item-name">{listItem.name}</span>
                        <span className="sellout-caption sellout-item-price">{listItem.SP} $</span>
                        <span className="sellout-caption sellout-item-remove" onClick={() => {
                            removeSelected(listItem.id, false);
                        }}>X</span>
                    </div>
                );
            })
        } else {
            return null;
        }
    }

    countTotal(list) {
        return list.reduce((prevValue, current) => {
            return prevValue + current.SP}, 0);
    }


    render() {
        const { selectedItems, removeSelected, removeAll } = this.props;
        const renderList = this.renderList(selectedItems, removeSelected);
        const total = this.countTotal(selectedItems);

        return (
            <div className="sellout-container item-container">
                <SellOutMessage removeAll={removeAll} items={selectedItems} total={total} message={'Your cart is empty'} button={'Buy selected'} />
                {renderList}
            </div>
        );
    }
}

const SellOutMessage = ({ items, message, button, total, removeAll }) => {
    const buttomTmpl = <div><button onClick={removeAll} className="cart-buy-btn">{button}</button> <span className="cart-buy-total">Total: {total} $</span></div>;
    const messageTmpl = <span className="cart-buy-message">{message}</span>;

    const renderMessage = items.length ? buttomTmpl : messageTmpl;

    return (
        <div className="cart-buy-container">{renderMessage}</div>
    );
};

export default SellOutContainer;
const loadCardsStart = () => {
    return {
        type: 'LOAD_CARDS_START'
    }
}

const loadCardsSuccess = (cards) => {
    return {
        type: 'LOAD_CARDS_SUCCESS',
        payload: cards
    }
}

const loadCardsFail = () => {
    return {
        type: 'LOAD_CARDS_FAILD'
    }
}

export {
    loadCardsStart,
    loadCardsSuccess,
    loadCardsFail
}
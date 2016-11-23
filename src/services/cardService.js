import axios from 'axios';

import constants from '../constants/constants';

const getCards = () => {
    const { API_URL: { cards } } = constants;

    return axios.get(cards).then(response => {
        return response.data;
    }).catch(error => {
        throw new Error(error);
    })
}

export {
    getCards
}
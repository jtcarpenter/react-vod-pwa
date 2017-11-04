import * as errorMessages from 'constants/errorMessages';

const DATA_URL = '/api';

export const api = {

    grid: {
        get: () => fetch(DATA_URL)
            .then((response) => {
                if (response.status / 100 !== 2) {
                    return {error: errorMessages.ERROR_CONTENT};
                }
                return response.json()
                    .then((data) => data);
            })
            .catch((error) => ({error}))
    },

    player: {
        get: (opts) => fetch(`${DATA_URL}/${opts.id}.json`)
            .then((response) => {
                if (response.status / 100 !== 2) {
                    return {error: errorMessages.ERROR_CONTENT};
                }
                return response.json()
                    .then((data) => data);
            })
            .catch((error) => ({error}))
    }
}
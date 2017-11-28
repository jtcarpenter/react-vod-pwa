import * as errorMessages from 'constants/errorMessages';

const DATA_URL = '/api';
const resolveUrl = (url, id) => {
    return id
        ? `${DATA_URL}/${id}`
        : DATA_URL;
}

export const api = {
    episodes: {
        get: (opts = {}) => {
            return fetch(resolveUrl(DATA_URL, opts.id))
                .then((response) => {
                    if (response.status / 100 !== 2) {
                        return {error: errorMessages.ERROR_CONTENT};
                    }
                    return response.json()
                        .then((data) => data);
                })
                .catch((fetchError) => {
                    return {
                        fetchError,
                        error: errorMessages.ERROR_CONTENT
                    };
                })
        }
    }
}
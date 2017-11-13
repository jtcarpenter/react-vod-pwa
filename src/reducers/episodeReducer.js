import * as episodeTypes from 'constants/episodeActionTypes';

const defaultState = {
    byId: {},
    allIds: [],
    selected: null
}

export const episodesToHash = (episodes) => {
    return episodes.reduce((hash, s) => {
        hash[s.id] = s;
        return hash;
    }, {});
}

export const episodesSelector = (episodes) => {
    return Object.keys(episodes).map((id) => {
        return episodes[id];
    });
}

export const episodeSelector = (id, episodes) => {
    return (id || id === 0) && episodes[id]
        ? episodes[id]
        : {};
}

export default function episodeReducer(state = defaultState, action) {
    switch (action.type) {
        case episodeTypes.LOADED:
            return Object.assign({}, state, {
                byId: episodesToHash(action.payload.episodes),
                allIds: action.payload.episodes.map((episode) => {
                    return episode.id
                }),
                selected: action.payload.id
            });
        case episodeTypes.FAILED:
            return Object.assign({}, state, {
                error: action.payload.error
            });
        default:
            return state;
    }
}
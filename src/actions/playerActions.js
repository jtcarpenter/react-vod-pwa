import * as types from '../constants/playerActionTypes';

const data = {
    id: null,
    src: 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4'
}

// TODO: change to async request action
export function load(opts) {
    return {
        type: types.LOAD,
        data: Object.assign({}, data, {
            id: opts.id
        })
    };
}

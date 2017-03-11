import * as types from '../constants/playerActionTypes';

let data = {
    id: null,
    src: 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4'
}

export function load(opts) {
    return {
        type: types.LOAD,
        data: Object.assign({}, data, { // TODO: change to async request action
            id: opts.id
        })
    };
}

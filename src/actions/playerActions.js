import * as types from '../constants/actionTypes';

let data = {
    id: null,
    src: 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4'
}

export function load(opts) {
    return {
        type: types.LOAD_VIDEO_DATA,
        data: Object.assign({}, data, { // TODO: change to async request action
            id: opts.id
        })
    };
}

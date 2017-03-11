import * as types from '../constants/actionTypes';

let data = {
    items: []
}
for (let i = 0; i < 10; i++) {
    data.items.push({
        id: i,
        src: 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4',
        title: `item_${i}`
    });
}

export function load() {
    return {
        type: types.LOAD_GRID_DATA,
        data: data // TODO: change to async request action
    };
}

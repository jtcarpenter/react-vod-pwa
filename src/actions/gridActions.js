import * as types from '../constants/gridActionTypes';

const data = {
    items: []
}
for (let i = 0; i < 10; i += 1) {
    data.items.push({
        id: i,
        src: 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4',
        title: `item_${i}`
    });
}

// TODO: change to async request action
export function load() {
    return {
        type: types.LOAD,
        data
    };
}

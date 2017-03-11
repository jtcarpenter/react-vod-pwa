import * as types from '../constants/gridActionTypes';

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
        type: types.LOAD,
        data: data // TODO: change to async request action
    };
}

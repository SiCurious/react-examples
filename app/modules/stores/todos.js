'use strict';

import { ADD } from '../constants/actionTypes.js';

let initialState = {
  items: []
};
let nextId = 1;

export default (state, action) => {
  state = state || initialState;
  switch (action.type) {
    case ADD:
      action.promise.then(res => console.log(res));
      return {
        items: [{
          id: 'item' + ++nextId,
          text: action.text
        }].concat(state.items)
      };
    default:
      return state;
  }
};

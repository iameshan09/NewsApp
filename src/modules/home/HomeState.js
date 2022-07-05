const initialState = {
  itemObject: {},
};

const SET_ITEMOBJECT = 'SET_ITEMOBJECT';

export function setItemsObjectAction(itemObject) {
  return {
    type: SET_ITEMOBJECT,
    itemObject,
  };
}

const setItemObject = (state, action) => ({
  ...state,
  itemObject: action.itemObject,
});

export default function homeReducer(state = initialState, action) {
  switch (action.type) {
    case SET_ITEMOBJECT:
      return setItemObject(state, action);
    default:
      return state;
  }
}

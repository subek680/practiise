const initialState = {
    someProp: "pehli baar",
    anotherProp: "another baar"
  };
  const reducer = (state=initialState, action) => {
    switch(action.type) {
      case 'SOME_ACTION':
        return {
          ...state,
          someProp: "firse pehli baar",
          xyz: "nnnnn"
        };
      case 'ANOTHER_ACTION':
        return {
          ...state,
          anotherProp: action.payload
        };
      default:
        return state;
    }
  };
  export default reducer;
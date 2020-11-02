const Reducer= (state, action) => {

  switch(action.type){
    case 'INPUT_KEYS':
      return{
        ...state,
        output: state.output + action.payload
      };
    case 'RESET_DISPLAY':
      return{
        ...state,
        output: action.payload
      };
    case 'UNDO_LAST_INPUT':
      let newstate = state.output.slice(0, -1);
      return{
        ...state,
        output: newstate
      };
    case 'CALCULATE':
      return{
        ...state,
        output: action.payload
      };
    default: return state;
  };
};


export default Reducer;

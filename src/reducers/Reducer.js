const Reducer= (state, action) => {

  switch(action.type){
    case 'INPUT_KEYS':
      return{
        ...state,
        equation: state.output + action.payload,
        firstInput: false
      };
    case 'REMOVE_LEADING_ZERO':
      return{
        ...state,
        equation: state.output.substring(1),
      };
    case 'RESET_DISPLAY':
      return{
        ...state,
        equation: action.payload,
        calculation: "",
        firstInput: true,
        isCalculation: false
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
        calculation: action.payload,
        isCalculation: true
      };
    default: return state;
  };
};


export default Reducer;

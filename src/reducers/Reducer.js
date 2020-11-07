const Reducer= (state, action) => {

  switch(action.type){
    case 'INPUT_KEYS':
      return{
        ...state,
        equation: state.equation + action.payload,
        firstInput: false
      };
    case 'REMOVE_LEADING_ZERO':
      return{
        ...state,
        equation: state.equation.substring(1),
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
      if (state.isCalculation) {
        return {
          ...state,
          isCalculation: false
        }
      }
      let newstate = state.equation.slice(0, -1);
      return{
        ...state,
        equation: newstate
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

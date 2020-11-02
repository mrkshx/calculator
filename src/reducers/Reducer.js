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
        output: "0"
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

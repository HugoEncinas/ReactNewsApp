import { ACTION_EXAMPLE } from '../actionTypes';

const initialState = {
  stateOption1: undefined,
  stateOption2: undefined,
};

const reducerExample = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_EXAMPLE: {
      const { contentExample } = action.payload;
      return { ...state, stateOption2: contentExample };
    }
    default: {
      return state;
    }
  }
};

export default reducerExample;

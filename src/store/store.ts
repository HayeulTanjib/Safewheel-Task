import { createStore } from 'redux';

//Define the initial state
export interface AppState {
  phoneNumber: string;
  password: string;
}

const initialState: AppState = {
  phoneNumber: '',
  password: '',
};

//Define the Reducer
const rootReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'SET_PHONE_NUMBER':
      return { ...state, phoneNumber: action.payload };
    case 'SET_PASSWORD':
      return { ...state, password: action.payload };
    default:
      return state;
  }
};

//Redux Store
const store = createStore(rootReducer);

export default store;

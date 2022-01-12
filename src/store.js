import { createStore } from "redux";

const initialState = {
  isLoggedIn: false,
  currentUser: null,
};

// action creators

const login = () => ({ type: "login" });

function reducer(state = initialState, action) {
  if (action.type === "login") {
      return {
          ...state,
          isLoggedIn: !state.isLoggedIn,
      }
  }
  return state;
}

// on crée le store avec le state et le reducer
const store = createStore(reducer, initialState);
store.dispatch({type: "login"})
const state = store.getState();
console.log(state);

store.dispatch({type: "login"});
const state1 = store.getState();
console.log(state1);

export default store;
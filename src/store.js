import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

// state initial
const initialState = {
  loggedIn: false,
  user: {},
};

// actions creator
const setUser = (payload) => ({ type: "SET_USER", payload})
export const logUserOut = () => ({type: "LOG_OUT"})

// reducer
function userReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        loggedIn: true,
        user: { ...action.payload },
      };
    case "LOG_OUT":
      localStorage.clear();
      return {
        ...state,
        loggedIn: false,
        user: {},
      };
    default:
      return state;
  }
}

export const store = createStore(userReducer, applyMiddleware(thunk));

// store.dispatch({ type: "SET_USER" });
// const state = store.getState();
// console.log(state);
// store.dispatch({ type: "LOG_OUT" });
// const state1 = store.getState();
// console.log(state1);

const state = store.getState();
console.log(state);

const URL = 'localhost:3001/api/v1/';
// const userInfos = {
//   email: "tony@stark.com",
//   password: "password123"
// }

export const fetchUser = (userInfos) => dispatch => {
    fetch(URL+"login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(userInfos)
    })
    .then(res => res.json())
    .then(data => {
        localStorage.setItem("token", data.token)
        dispatch(setUser(data.user))
    })
}


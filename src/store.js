import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

// state initial
const initialState = {
  loggedIn: false,
  user: {},
};

// actions creator
export const logUserIn = () => ({ type: "LOG_IN" });
const setUser = (payload) => ({ type: "SET_USER", payload });
export const logUserOut = () => ({ type: "LOG_OUT" });

// reducer
function userReducer(state = initialState, action) {
  switch (action.type) {
    case "LOG_IN":
      return {
        ...state,
        loggedIn: true,
      };
    case "SET_USER":
      return {
        ...state,
        user: { ...action.payload },
      };
    case "LOG_OUT":
      localStorage.clear();
      return initialState;
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

const URL = "http://localhost:3001/api/v1/user/";

export const fetchUser = (userInfos) => (dispatch) => {
  fetch(URL + "login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(userInfos),
  })
    .then((res) => res.json())
    .then((data) => {
      localStorage.setItem("token", data.body.token);
      dispatch({ type: "LOG_IN" });
      // const state1 = store.getState();
      // console.log(state1);
      let token = localStorage.getItem("token");
      fetch(URL + "profile", {
        method: "POST",
        headers: {
          Authorization: "Bearer " + token,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          dispatch(setUser(data.body));
          const state2 = store.getState();
          console.log(state2);
        });
    });
};

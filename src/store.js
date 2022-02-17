import { createStore } from "redux";
const reduxDevtools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

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

export const store = createStore(userReducer, reduxDevtools);

const URL = "http://localhost:3001/api/v1/user/";

export const fetchUser = (userInfos) => {
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
      store.dispatch(logUserIn());
      let token = localStorage.getItem("token");
      fetch(URL + "profile", {
        method: "POST",
        headers: {
          Authorization: "Bearer " + token,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          store.dispatch(setUser(data.body));
        });
    });
};

export const updateUser = (userInfos) => {
  let token = localStorage.getItem("token");
  fetch(URL + "profile", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
    body: JSON.stringify(userInfos),
  })
    .then((res) => res.json())
    .then((data) => {
      store.dispatch(setUser(data.body));
    });
};


var initialState = {
    title: "Hooks Training",
    counter: 0,
    login: false,
    username:""
  }
  export function app(state = initialState, action) {
    switch (action.type) { 
      case "SET_LOGIN":
        return Object.assign({}, state, {
          login: action.login,
          username: action.username
        })
      case "SET_TITLE":
        return Object.assign({}, state, {
          title: action.title
        })
      case "INCREMENT_VAL":
        return Object.assign({}, state, {
          counter: state.counter + 1
        })
      default:
        return state
    }
  }
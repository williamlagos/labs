import { applyMiddleware, createStore } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import logger from "redux-logger"
import thunk from "redux-thunk"


const reducer = (state, action) => {
  if (action.type === `INCREMENT`) {
    return { 
      ...state,
      count: state.count + 1,
    }
  }
  return state
}

const initialState = { count: 0 }

const createAppState = () => createStore(reducer, initialState, composeWithDevTools(applyMiddleware(thunk, logger)))
export default createAppState
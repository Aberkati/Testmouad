import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  charactersListReducer,
  characterDetailsReducer,
} from "./reducers/CharacterReducers";
import { PaginateReducer } from "./reducers/PaginationReducers";

const reducer = combineReducers({
  charactersList: charactersListReducer,
  characterDetails: characterDetailsReducer,
  pagination: PaginateReducer,
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;

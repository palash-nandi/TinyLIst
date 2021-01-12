import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { watchSagas} from "./sagas"
import { loaderDataReducer, todoDataReducer } from "./reducers";


const rootReducer = combineReducers({
  loaderData: loaderDataReducer,
  todoData: todoDataReducer,
});
const saga = createSagaMiddleware();
//redux dev tool
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(applyMiddleware(saga));

const store = createStore(rootReducer, enhancer);

saga.run(watchSagas);

export default store;

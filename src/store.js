import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import { restListReducer } from './reducer/restreducer';



const reducers=combineReducers({
    restReducer:restListReducer
})
const middleware=[thunk]
//strore creation 

const store=createStore(reducers,applyMiddleware(...middleware))

export default store
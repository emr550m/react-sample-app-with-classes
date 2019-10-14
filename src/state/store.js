import { createStore , combineReducers } from 'redux'
import {app} from './reducers/app'
import {dashboard} from './reducers/dashboard'

var r = combineReducers({app,dashboard});
export const store = createStore(r);
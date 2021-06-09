/*
import {applyMiddleware, createStore} from "redux";
import {createLogger} from "redux-logger/src";
import thunk from 'redux-thunk'
import promise from "redux-promise-middleware";
import reducer from "../reducers/uiReducers";

const middleware = __DEV__?
    applyMiddleware(promise, thunk, createLogger())
    :
    applyMiddleware(promise, thunk);

export default createStore(reducer, middleware);*/
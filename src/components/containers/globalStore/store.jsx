import createSagaMiddleware from 'redux-saga'
import rootReducer from "./rootReducer.jsx";
import rootSaga from "./rootSaga.jsx";
import {configureStore} from "@reduxjs/toolkit";


let sagaMiddleware = createSagaMiddleware()

const store = configureStore({
    reducer : rootReducer,
    middleware : (getDefaultMiddleware)=>[...getDefaultMiddleware({thunk:false,serializableCheck:false}),sagaMiddleware,
    ]
})
sagaMiddleware.run(rootSaga)
export default store;
import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { customReducerEnhancer } from "./customReducerEnhancer";
import modelReducer from "./modelReducer";
import stateReducer from "./stateReducer";
import { multiActions } from "./multiActionMiddleware";
import { asyncEnhancer } from "./asyncEnhancer";

const enhancedReducer = customReducerEnhancer(
    combineReducers(
        {
            modelData: modelReducer,
            stateData: stateReducer
        })
);

export default createStore(enhancedReducer,
    compose(applyMiddleware(multiActions), asyncEnhancer(2000)));

export { saveProduct, saveSupplier, deleteProduct, deleteSupplier }
    from "./modelActionCreators";
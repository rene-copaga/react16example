import { combineReducers, createStore } from "redux";
import { customReducerEnhancer } from "./customReducerEnhancer";
import modelReducer from "./modelReducer";
import stateReducer from "./stateReducer"

const enhancedReducer = customReducerEnhancer(
    combineReducers(
        {
            modelData: modelReducer,
            stateData: stateReducer
        })
);

export default createStore(enhancedReducer);

export { saveProduct, saveSupplier, deleteProduct, deleteSupplier }
    from "./modelActionCreators";
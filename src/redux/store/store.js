import { createStore } from "redux";
import { myReducer } from "../reducer/reducer";

export const store=createStore(myReducer)

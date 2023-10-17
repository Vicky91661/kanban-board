import { combineReducers } from "redux";
import ticketsReducer from "./ticketSlice/ticketSlice";
import filterReducer from "./filterSlice/filterSlice";

// Create the rootReducer with type annotations
const rootReducer = combineReducers({
  tickets: ticketsReducer,
  filter: filterReducer,
});

export default rootReducer;

import { configureStore } from "@reduxjs/toolkit";
import { selectedRouteReducer } from "./reducers/selectedRouteReducer";
import { determinedRouteReducer } from "./reducers/determinedRouteReducer";

export const store = configureStore({
  reducer: {
    selectedRoute: selectedRouteReducer,
    determinedRoute: determinedRouteReducer,
  },
});

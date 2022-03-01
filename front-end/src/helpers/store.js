import { configureStore } from "@reduxjs/toolkit";
import receptorReducer from "./receptorSlice";
import { getDefaultMiddleware } from '@reduxjs/toolkit';
import donorReducer from "./donorSlice";
import actionReducer from "./actionSlice";

export const store =  configureStore({
    reducer: {
        receptor: receptorReducer,
        donor: donorReducer,
        action: actionReducer,
    },
    middleware: getDefaultMiddleware({
        serializableCheck: false,
      }),
});


import { configureStore } from "@reduxjs/toolkit";
import receptorReducer from "./receptorSlice";
import { getDefaultMiddleware } from '@reduxjs/toolkit';

export const store =  configureStore({
    reducer: {
        receptor: receptorReducer,
    },
    middleware: getDefaultMiddleware({
        serializableCheck: false,
      }),
});


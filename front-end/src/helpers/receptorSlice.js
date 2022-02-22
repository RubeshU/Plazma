import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Receptor from "../classes/Receptor";

const recep = new Receptor();

const requestForBlood = createAsyncThunk(
  "receptor/requestForBlood",
  (receptor, thunkObj) => {
    return new Promise(async (resolve, reject) => {
      await recep.requestForBlood(receptor)
        .then((data) =>{ resolve(data);})
        .catch((error) => reject(thunkObj.rejectWithValue(error)));
    });
  }
);

const checkStatus = createAsyncThunk(
  "receptor/checkStatus",
  (referenceId, thunkObj) => {
    return new Promise(async (resolve, reject) => {
      await recep
        .checkStatus(referenceId)
        .then((data) => resolve(data))
        .catch((error) => reject(thunkObj.rejectWithValue(error)));
    });
  }
);

const getReceptors = createAsyncThunk(
  "receptor/getReceptorList",
  (thunkObj) => {
    return new Promise(async (resolve,reject) => {
      await recep
        .getReceptors()
        .then((data) => resolve(data))
        .catch((error) => reject(thunkObj.rejectWithValue(error)));
    });
  }
)

const receptorSlice = createSlice({
  name: "receptor",
  initialState: {
    receptors: [],
    receptor: {},
    referenceId: "",
    requestStatus: "",
    check: "",
    listStatus: "",
  },
  reducers: {
      clearState: (state) => {
          state.receptor = {};
          state.referenceId= "";
          state.requestStatus="";
          state.check="";
          state.listStatus="";
      },
  },
  extraReducers: {
      [requestForBlood.pending]: (state) => {
          state.requestStatus="pending";
      },
      [requestForBlood.fulfilled]: (state,action) => {
        state.referenceId = action.payload.referenceId;
        state.requestStatus="fulfilled";
      },
      [requestForBlood.rejected]: (state) => {
       state.requestStatus = "rejected";
      },
      [checkStatus.pending]: (state) => {
        state.check = "pending";
      },
      [checkStatus.fulfilled]: (state,action) => {
        state.check = "fulfilled";
        state.receptor = action.payload;
      },
      [checkStatus.rejected]: (state) => {
        state.check = "rejected";
      },
      [getReceptors.pending]: (state) => {
        state.listStatus = "pending";
      },
      [getReceptors.fulfilled]: (state,action) => {
        state.listStatus = "fulfilled";
        state.receptors = action.payload;
      },
      [getReceptors.rejected]: (state) => {
        state.listStatus = "rejected";
      }
  }
});

export {
    requestForBlood,
    checkStatus,
    getReceptors,
}

export const getReceptorState = (state) => state.receptor;

export default receptorSlice.reducer;

export const {clearState} = receptorSlice.actions;
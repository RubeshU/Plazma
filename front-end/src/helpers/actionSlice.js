import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

import Action from "../classes/Action";

const act = new Action();

// const getCurrentDonation = createAsyncThunk("action/getCurrentDonation", (thunkObj) => {
//     return new Promise(async (resolve, reject) => {
//       await act.getCurrentDonation()
//         .then((data) =>  resolve(data))
//         .catch((error) => { reject(thunkObj.rejectWithValue(error)); });
//     });
//   });

const getCurrentDonation = createAsyncThunk("action/getCurrentDonation",(obj,thunkObj) => {
    return new Promise(async (resolve,reject) => {
        await act.getCurrentDonation().then((data) => resolve(data)).catch((error) => reject(thunkObj.rejectWithValue(error)));
    });
});

const getProfile = createAsyncThunk("action/getProfile", (thunkObj) => {
  return new Promise(async (resolve, reject) => {
    await act
      .getProfile()
      .then((data) => resolve(data))
      .catch((error) => reject(thunkObj.rejectWithValue(error)));
  });
});

const getHistory = createAsyncThunk("action/getHistory",(obj = "",{rejectWithValue}) => {
    return new Promise(async (resolve,reject) => {
        await act.getHistory()
        .then((data) => resolve(data))
        .catch((error) => {
            reject(rejectWithValue(error));
        });
    });
});

const donate = createAsyncThunk("action/donate",(donorId,thunkObj) => {
    return new Promise(async (resolve,reject) => {
        await act.donate(donorId)
        .then((data) => resolve(data))
        .catch((error) => reject(thunkObj.rejectWithValue(error)));
    });
});

const confirm = createAsyncThunk("action/confirm",(obj="",thunkObj) => {
    return new Promise(async (resolve,reject) => {
        await act.confirm()
        .then((data) => resolve(data))
        .catch((error) => reject(thunkObj.rejectWithValue(error)));
    });
});

const actionSlice = createSlice({
    name: "action",
    initialState: {
        loading: false,
        error: "",
        success: false,
        currentDonation: {},
        donorProfile: {},
        donationHistory: [],
        donationData: {},
        donationStatus: "",
        confirmStatus: "",
    },
    reducers: {
        clearState: (state) => {
            state.loading = false;
            state.error =  "";
            state.success = false;
            state.donationStatus= "";
            state.confirmStatus = "";
        },
    },
    extraReducers: {
        [getCurrentDonation.pending]: (state) => {
            state.loading = true;
            state.success = false;
            state.error = "";
        },
        [getCurrentDonation.fulfilled]: (state,{payload}) => {
            state.currentDonation = payload;
            state.loading = false;
            state.error = "";
            state.success = true;
        },
        [getCurrentDonation.rejected]: (state,{payload}) => {
            state.loading = false;
            state.error = payload;
            state.success = false;
        },
        [getProfile.pending]: (state) => {
            state.loading = true;
            state.success = false;
            state.error = "";
        },
        [getProfile.fulfilled]: (state,{payload}) => {
            state.donorProfile = payload;
            state.loading = false;
            state.error = "";
            state.success = true;
        },
        [getProfile.rejected]: (state,{payload}) => {
            state.loading = false;
            state.error = payload;
            state.success = false;
        },
        [getHistory.pending]: (state) => {
            state.loading = true;
            state.success = false;
            state.error = "";
        },
        [getHistory.fulfilled]: (state,{payload}) => {
            state.donationHistory = payload;
            state.loading = false;
            state.error = "";
            state.success = true;
        },
        [getHistory.rejected]: (state,{payload}) => {
            state.loading = false;
            state.error = payload;
            state.success = false;
        },
        [donate.pending]: (state) => {
            state.loading = true;
            state.success = false;
            state.error = "";
            state.donationStatus = "pending";
        },
        [donate.fulfilled]: (state,{payload}) => {
            state.loading = false;
            state.error = "";
            state.success = true;
            state.donationStatus ="fulfilled";
        },
        [donate.rejected]: (state,{payload}) => {
            state.loading = false;
            state.error = payload;
            state.success = false;
            state.donationStatus = "rejected";
        },
        [confirm.pending]: (state) => {
            state.confirmStatus = "pending";
        },
        [confirm.rejected]: (state) => {
            state.confirmStatus = "rejected";
        },
        [confirm.fulfilled]: (state) => {
            state.confirmStatus = "success";
        }
    }
});

export {
    confirm,
    getCurrentDonation,
    getProfile,
    getHistory,
    donate,
}

export const getActionState = (state) => state.action;

export default actionSlice.reducer;

export const {clearState} = actionSlice.actions;
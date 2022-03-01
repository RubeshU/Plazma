import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

import Donor from "../classes/Donor";

const donor = new Donor();

const register = createAsyncThunk("donor/register", (donorObj, thunkObj) => {
  return new Promise(async (resolve, reject) => {
    await donor
      .register(donorObj)
      .then((data) => {localStorage.setItem("token",data.token); resolve(data)})
      .catch((error) => reject(thunkObj.rejectWithValue(error)));
  });
});

const logout = createAsyncThunk("donor/logout", (thunkObj) => {
  return new Promise(async (resolve, reject) => {
    await donor
      .logout()
      .then((data) => {
        resolve(data);
      })
      .catch((error) => reject(thunkObj.rejectWithValue(error)));
  });
});

const login = createAsyncThunk("donor/login", (obj, thunkObj) => {
  return new Promise(async (resolve, reject) => {
    await donor
      .login(obj)
      .then((data) => {
        localStorage.setItem("token", data.token);
        resolve(data);
      })
      .catch((error) => reject(thunkObj.rejectWithValue(error)));
  });
});

const autoLogin = createAsyncThunk("donor/autoLogin", (thunkObj) => {
    return new Promise(async (resolve, reject) => {
      await donor
        .autoLogin()
        .then((data) => {
          resolve(data);
        })
        .catch((error) => reject(thunkObj.rejectWithValue(error)));
    });
  });



const donorSlice = createSlice({
    name: "donor",
    initialState: {
        isLoggedIn: false,
        registerState: "",
        errorMsg: "",
        loginState: "",
        firstLog: "",
    },
    reducers: {
        clearState: (state) => {
            state.registerState = "";
            state.loginState = "";
            state.errorMsg="";
            state.loginState="";
            state.firstLog="";
        },
    },
    extraReducers: {
        [register.pending]: (state) => {
            state.registerState = "pending";
            state.errorMsg = "";
        },
        [register.fulfilled]: (state) => {
            state.registerState = "fulfilled";
            state.errorMsg = "";
            state.isLoggedIn = true;
        },
        [register.rejected]: (state,{payload}) => {
            state.isLoggedIn = false;
            state.registerState = "rejected";
            state.errorMsg = payload;
        },
        [logout.pending]: (state) => {
            state.loginState = "pending";
        },
        [logout.fulfilled]: (state) => {
            localStorage.removeItem("token");
            state.loginState = "fulfilled";
            state.isLoggedIn = false;
            state.firstLog = "";
        },
        [logout.rejected] : (state,{payload}) => {
            state.errorMsg = payload;
            state.loginState = "rejected";
            
        },
        [autoLogin.fulfilled] : (state) => {
            state.isLoggedIn = true;
        },
        [autoLogin.rejected] : (state) => {
            state.isLoggedIn = false;
        },
        [login.pending] : (state) => {
            state.firstLog = "pending";
            state.errorMsg = "";
        },
        [login.rejected] : (state,{payload}) => {
            state.errorMsg = payload;
            state.firstLog = "rejected";
            state.isLoggedIn = false;
        },
        [login.fulfilled] : (state) => {
            state.errorMsg = "";
            state.isLoggedIn = true;
            state.firstLog = "fulfilled";
        }
    }
});


export {
    register,
    logout,
    autoLogin,
    login,
}


export const getDonorState = (state) => state.donor;

export default donorSlice.reducer;

export const {clearState} = donorSlice.actions;

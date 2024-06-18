// app/redux/slices/authSlice.ts
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface AuthState {
  isLoginOpen: boolean;
  isSignupOpen: boolean;
  register: {
    firstname: string;
    Lastname: string;
    email: string;
    Twofa_enable: boolean;
    password: string;
    password_confirmation: string;
    otp: string;
  };
}

const initialState: AuthState = {
  isLoginOpen: false,
  isSignupOpen: false,
  register: {
    firstname: "",
    Lastname: "",
    email: "",
    Twofa_enable: false,
    password: "",
    password_confirmation: "",
    otp: "",
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // State for Button
    setLoginOpen: (state, action: PayloadAction<boolean>) => {
      state.isLoginOpen = action.payload;
    },
    setSignupOpen: (state, action: PayloadAction<boolean>) => {
      state.isSignupOpen = action.payload;
    },

    // State for Register
    setRegisterFirstName: (state, action: PayloadAction<string>) => {
      state.register.firstname = action.payload;
    },
    setRegisterLastName: (state, action: PayloadAction<string>) => {
      state.register.Lastname = action.payload;
    },
    setRegisterEmail: (state, action: PayloadAction<string>) => {
      state.register.email = action.payload;
    },
    setRegisterTwoFacAuth: (state, action: PayloadAction<boolean>) => {
      state.register.Twofa_enable = action.payload;
    },
    setRegisterPassword: (state, action: PayloadAction<string>) => {
      state.register.password = action.payload;
    },
    setRegisterPasswordConfirmation: (state, action: PayloadAction<string>) => {
      state.register.password_confirmation = action.payload;
    },
    setRegisterOTP: (state, action: PayloadAction<string>) => {
      state.register.otp = action.payload;
    },
  },
});

export const {
  setLoginOpen,
  setSignupOpen,
  setRegisterFirstName,
  setRegisterLastName,
  setRegisterEmail,
  setRegisterTwoFacAuth,
  setRegisterPassword,
  setRegisterPasswordConfirmation,
  setRegisterOTP,
} = authSlice.actions;

export default authSlice.reducer;

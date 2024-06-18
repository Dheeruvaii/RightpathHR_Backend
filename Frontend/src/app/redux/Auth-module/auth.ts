/* eslint-disable @typescript-eslint/no-explicit-any */

// // Types
export type APiType = { isFlag?: boolean; response: any };
export type ServiceType = {
  login: APiType;
  signup: APiType;
};
export type LoginFormSchema = {};
export type AuthSliceSchema = {
  auth: {
    isLoginOpen: boolean;
    isSignupOpen: boolean;
  };
};

// Variables
export const InitialApiData = {
    isFlag: false,
    response: {
      details: [],
      error: "",
      isLoading: false,
      isSuccess: false,
      toastMsg: "",
    },
  },
  InitialServiceData = {
    login: InitialApiData,
    signup: InitialApiData,
  };

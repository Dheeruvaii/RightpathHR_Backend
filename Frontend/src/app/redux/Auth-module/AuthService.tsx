import axios from "axios";

const API_URL = "https://rightpathhr-backend.onrender.com/auth/api";

export const SignUpService = async (
  firstname: string,
  lastname: string,
  email: string,
  password: string,
  password_confirmation: string,
  Twofa_enable: boolean
) => {
  const response = await axios.post(`${API_URL}/register`, {
    firstname,
    lastname,
    email,
    password,
    password_confirmation,
    Twofa_enable,
  });
  return response.data;
};

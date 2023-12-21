import axios from "axios";
export const signInApi = async (data) => {
    console.log("insde signin")
    const header = {
      "Content-Type": "application/json",
    };
    const res = await axios.post("http://localhost:3000/auth/login", {
      email: data.email,
      password: data.password,
    });
    const resdata = await res.data;
    return resdata;
  };
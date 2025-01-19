import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:8081/users/",
  headers: {
    "Content-Type": "application/json",
  },
});

export const login = async (username, password) => {
  try {
    const response = await apiClient.post("/verifyUser", {
      username,
      password,
    });
    return response.data;
  } catch (error) {
    console.error("Login error:", error);
    throw error;
  }
};

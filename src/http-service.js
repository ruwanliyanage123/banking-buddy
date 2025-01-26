import axios from "axios";

const authClient = axios.create({
  baseURL: "http://localhost:8081/users/",
  headers: {
    "Content-Type": "application/json",
  },
});

export const login = async (username, password) => {
  try {
    const response = await authClient.post("/verifyUser", {
      username,
      password,
    });
    localStorage.setItem("token", response.data);
    return response.data;
  } catch (error) {
    console.error("Login error:", error);
    throw error;
  }
};

export const getAllLoans = async () => {
  const token = localStorage.getItem("token");
  const apiClient = axios.create({
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });

  try {
    const response = await apiClient.get(
      "http://localhost:8082/loan/getAllLoans"
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching loans:", error);
    throw error;
  }
};

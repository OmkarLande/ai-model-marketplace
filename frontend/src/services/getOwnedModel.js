// services/ownedModelsService.js
import {jwtDecode} from "jwt-decode";
const API_URL = "http://localhost:5000/api"; // Adjust this if your backend is running on a different URL

export const getOwnedModels = async () => {
  try {
    const token = localStorage.getItem("user_token");
    if (!token) {
      return { error: "Unauthorized. No token found. Please log in." };
    }

    console.log("token", token);
    const decodedToken = jwtDecode(token);
    const userId = decodedToken?.user_id;
    console.log("userId", userId);
    if (!userId) {
      return { error: "Invalid token. Please log in again." };
    }

    const response = await fetch(`${API_URL}/models/owned-models`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
      credentials: "include",
      body: JSON.stringify({ userId }), // Add userId to the request body
    });

    if (!response.ok) {
      throw new Error("Failed to fetch owned models.");
    }

    const data = await response.json();
    return data; // Return the owned models data
  } catch (error) {
    return { error: error.message }; // Return error if there was an issue
  }
};

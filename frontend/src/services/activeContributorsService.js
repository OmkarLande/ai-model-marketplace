// services/activeContributorsService.js

const API_URL = "http://localhost:5000/api/models"; // Adjust this if your backend is running on a different URL

export const getActiveContributors = async () => {
  try {
    const response = await fetch(`${API_URL}/active-contributors`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include", // Ensures cookies are sent with the request (optional)
    });

    if (!response.ok) {
      throw new Error("Failed to fetch active contributors.");
    }

    const data = await response.json();
    return data; // Return the active contributors data
  } catch (error) {
    return { error: error.message }; // Return error if there was an issue
  }
};

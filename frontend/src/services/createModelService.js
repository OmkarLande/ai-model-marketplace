import {jwtDecode} from "jwt-decode";

export const createModel = async (formData) => {
    console.log(formData);

    // Get the token from localStorage
    const token = localStorage.getItem("token");

    if (!token) {
        return { error: "Unauthorized. No token found. Please log in." };
    }

    try {
        // Decode the token
        const decoded = jwtDecode(token);
        console.log("Decoded Token:", decoded);

        // Ensure the user is a model owner
        if (decoded.role !== "model_owner") {
            return { error: "Access denied. Only model owners can create AI models." };
        }

        const response = await fetch("http://localhost:5000/api/models/create", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`, // Send token in Authorization header
            },
            credentials: "include", // Ensures cookies are sent with the request
            body: JSON.stringify(formData),
        });

        // Check if the response is JSON before parsing
        const contentType = response.headers.get("content-type");
        if (!contentType || !contentType.includes("application/json")) {
            throw new Error("Unexpected response from server. Ensure backend is running.");
        }

        const responseData = await response.json();

        if (!response.ok) {
            throw new Error(responseData.error || "Model creation failed. Please try again.");
        }

        return responseData;
    } catch (error) {
        return { error: error.message || "Something went wrong. Please try again." };
    }
};

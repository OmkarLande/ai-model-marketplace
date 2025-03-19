import { jwtDecode } from "jwt-decode";

export const createModel = async (formData) => {
    console.log("formData: ", formData);

    // Get the token from localStorage
    const token = localStorage.getItem("user_token");

    if (!token) {
        return { error: "Unauthorized. No token found. Please log in." };
    }

    try {
        // Validate if the token is a string and decode it
        if (typeof token !== "string") {
            throw new Error("Invalid token format");
        }

        // Decode the token
        const decoded = jwtDecode(token);
        console.log("Decoded Token:", decoded);

        // Ensure the user is a model owner
        if (decoded.role !== "model_owner") {
            return { error: "Access denied. Only model owners can create AI models." };
        }

        console.log("start");

        // Send the formData directly without modification
        const response = await fetch("http://localhost:5000/api/models/create", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${token}`, // Pass the token in the Authorization header
            },
            credentials: "include", // Ensures cookies are sent with the request
            body: formData, // Send the formData directly
        });

        console.log("start1");

        // Check if the response is JSON before parsing
        const contentType = response.headers.get("content-type");
        if (!contentType || !contentType.includes("application/json")) {
            throw new Error("Unexpected response from server. Ensure backend is running.");
        }

        const responseData = await response.json();
        console.log("responseData", responseData);

        if (!response.ok) {
            throw new Error(responseData.error || "Model creation failed. Please try again.");
        }

        return responseData;
    } catch (error) {
        return { error: error.message || "Something went wrong. Please try again." };
    }
};

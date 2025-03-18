export const fetchModels = async () => {
    try {
        const response = await fetch("http://localhost:5000/api/models/ai-models");
        console.log("Response status:", response);
        if (!response.ok) {
            throw new Error("Failed to fetch models.");
        }
        return await response.json();
    } catch (error) {
        console.error("Error fetching models:", error);
        console.error("Error details:", error.message);
        return [];
    }
};

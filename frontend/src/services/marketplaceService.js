export const fetchModels = async () => {
    try {
        const response = await fetch("http://localhost:5000/api/models/ai-models"); // Adjust URL as per your backend
        console.log("response", response)
        if (!response.ok) {
            throw new Error("Failed to fetch models.");
        }
        return await response.json();
    } catch (error) {
        console.error("Error fetching models:", error);
        return [];
    }
};

export const createModel = async (formData) => {
    try {
      const response = await fetch("http://localhost:5000/api/model/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include", // Ensures cookies are sent with the request
        body: JSON.stringify(formData),
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Model creation failed. Please try again.");
      }
  
      return await response.json();
    } catch (error) {
      return { error: error.message || "Something went wrong. Please try again." };
    }
  };
  
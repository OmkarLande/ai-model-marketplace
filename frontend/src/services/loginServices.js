export const loginUser = async (formData) => {
    try {
      const response = await fetch("http://localhost:5000/api/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      if (!response.ok) {
        throw new Error("Invalid credentials or role mismatch. Try again.");
      }
  
      return await response.json();
    } catch (error) {
      throw new Error(error.message || "Something went wrong. Please try again.");
    }
  };
  
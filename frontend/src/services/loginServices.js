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
        const errorData = await response.json();
        throw new Error(errorData.error || "Invalid credentials or role mismatch. Try again.");
      }
  
      const data = await response.json();
      localStorage.setItem("token", data.token); // Store JWT token in localStorage
      return data;
    } catch (error) {
      throw new Error(error.message || "Something went wrong. Please try again.");
    }
  };

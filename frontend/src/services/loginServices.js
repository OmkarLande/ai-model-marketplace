export const loginUser = async (formData) => {
    try {
      const response = await fetch("http://localhost:5000/api/users/login", {
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
      console.log("data", data);
      localStorage.setItem("user_token", data.token);
      document.cookie = `user_token=${data.token}; path=/;`;
      return data;
    } catch (error) {
      throw new Error(error.message || "Something went wrong. Please try again.");
    }
  };
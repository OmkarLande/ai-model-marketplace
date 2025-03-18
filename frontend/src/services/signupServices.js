import { ethers } from "ethers";

const getMetaMaskAddress = async () => {
  if (window.ethereum) {
    try {
      const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
      return accounts[0];
    } catch (error) {
      console.error("Error fetching MetaMask address:", error);
      return null;
    }
  } else {
    console.error("MetaMask is not installed");
    return null;
  }
};

export const signupUser = async (formData) => {
  const publicKey = await getMetaMaskAddress();
  if (!publicKey) {
    return { error: "MetaMask connection required" };
  }

  const submissionData = { ...formData, publicKey };
  console.log(submissionData)

  try {
    const response = await fetch("http://localhost:5000/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(submissionData),
    });

    if (!response.ok) {
      throw new Error("Signup failed. Please try again.");
    }

    return await response.json();
  } catch (error) {
    return { error: error.message || "Something went wrong. Please try again." };
  }
};
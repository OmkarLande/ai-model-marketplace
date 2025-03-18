// modelDetailsService.js

const API_BASE_URL = "http://localhost:5000/api/models/ai-models"; // Update with your actual backend URL

export const getModelById = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/${id}`);
    console.log(response);
    if (!response.ok) {
      throw new Error("Failed to fetch model details");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching model details:", error);
    return null;
  }
};

export const buyModel = async (id, price) => {
  if (!window.ethereum) {
    alert("MetaMask is not installed. Please install it to proceed.");
    return;
  }

  try {
    const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
    const userAddress = accounts[0];

    const transactionParameters = {
      to: "0x5Ec8219ECa4fcdb7e8ce051501B00AA2f3E62e85", // Replace with the seller's address or smart contract address
      from: userAddress,
      value: price ? (BigInt(price) * BigInt(10 ** 18)).toString(16) : "0x0", // Convert price to Wei and hex format
    };

    const txHash = await window.ethereum.request({
      method: "eth_sendTransaction",
      params: [transactionParameters],
    });

    console.log("Transaction successful with hash:", txHash);
    return txHash;
  } catch (error) {
    console.error("Error processing transaction:", error);
    return null;
  }
};

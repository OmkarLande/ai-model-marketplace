import {jwtDecode} from 'jwt-decode';

const getUserDetails = async () => {
    try {
        // Get the token from localStorage
        const token = localStorage.getItem('user_token');
        if (!token) {
            throw new Error('No token found');
        }

        // Decode the token to get userId
        const decodedToken = jwtDecode(token);
        console.log("token", decodedToken);
        const userId = decodedToken?.userId;
        if (!userId) {
            throw new Error('Invalid token');
        }

        // Fetch user details by userId
        const response = await fetch(`http://localstorage:5000/api/users/${userId}`);
        if (!response.ok) {
            throw new Error('Failed to fetch user details');
        }

        const userDetails = await response.json();
        return userDetails;
    } catch (error) {
        console.error('Error fetching user details:', error);
        throw error;
    }
};

export default getUserDetails;
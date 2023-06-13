import { verifyToken } from "../../utils"; // Import the verifyToken function

export default async function handler(req, res) {
	try {
		const token = req.headers.authorization.split("Bearer ")[1]; // Extract the token from the Authorization header
		const user = await verifyToken(token); // Verify the token using your verification logic
		console.log(user);
		// Retrieve user data based on the user ID or any other logic

		// Return the user data as a response
		res.status(200).json({ user });
	} catch (error) {
		// Handle unauthorized access or token expiration
		res.status(401).json({ error: "Unauthorized" });
	}
}

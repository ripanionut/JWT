/* eslint-disable import/no-anonymous-default-export */
import { generateToken } from "../../utils";

export default (req, res) => {
	const { username, password } = req.body;

	// Authenticate the user and perform validation
	// Assuming you have a user object and validate the username and password

	if (username === "ionut" && password === "123456") {
		const user = { id: "112112", username: "Ripan Ionut", localitate:"Sibiu" , };

		// Generate a JWT token with the user payload
		const token = generateToken(user);
		res.status(200).json({ token });
	} else {
		res.status(401).json({ error: "Invalid username or password" });
	}
};

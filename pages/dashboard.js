import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

const Dashboard = () => {
	const [user, setUser] = useState(null);
	const secretKey = "signkey-wqdwqdqw";

	useEffect(() => {
		const fetchData = async () => {
			try {
				const token = localStorage.getItem("token"); // Retrieve the JWT token from localStorage or cookies
				const response = await axios.get("/api/dashboard", {
					headers: {
						Authorization: `Bearer ${token}`,
					},
				});
				const userData = response.data.user;
				setUser(userData);
			} catch (error) {
				// Handle unauthorized access or token expiration
				console.log(error);
			}
		};

		fetchData();
	}, []);

	if (!user) {
		return <p>Loading...</p>;
	}

	// Transform the timestamps into human-readable format
	const issuedAt = new Date(user.iat * 1000).toLocaleString();
	const expiration = new Date(user.exp * 1000).toLocaleString();

	return (
		<div className="bg-gray-900 text-white h-screen">
			<div className="pt-2">
				{" "}
				<Link
					href="/signin"
					className="flex w-20 text-center ml-2 rounded-md mx-auto font-bold p-2 bg-green-600"
				>
					Login🔻
				</Link>
			</div>
			{user.error ? (
				user.error
			) : (
				<div>
					{" "}
					<h1 className="text-xl">
						Salut,<span className="text-green-600 ml-2">{user.username}!</span>{" "}
					</h1>
					<p>ID: {user.id}</p>
					<p>Locatie: {user.localitate}</p>
					<p>Create la: {issuedAt}</p>
					<p>Exipră: {expiration}</p>
				</div>
			)}
		</div>
	);
};

export default Dashboard;

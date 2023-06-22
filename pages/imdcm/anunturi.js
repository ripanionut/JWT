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
		return 0;
	}

	// Transform the timestamps into human-readable format
	const issuedAt = new Date(user.iat * 1000).toLocaleString();
	const expiration = new Date(user.exp * 1000).toLocaleString();

	return (
		<div className="bg-gray-900 h-screen text-white">
			<div className="p-2 flex bg-slate-800  border-1 border-b-2 border-green-500">
				<div> </div>
				<div>
					<h1 className="text-xl my-auto">
						User:<span className="text-green-600  ml-2">{user.username}</span>{" "}
					</h1>
				</div>
				<div className="ml-auto">
					{" "}
					<Link
						href="/dashboard"
						className="flex w-20 text-center ml-2 rounded-md mx-auto font-bold py-1 px-2 bg-green-600"
					>
						Facultati
					</Link>
				</div>
				<div className="ml-1">
					{" "}
					<Link
						href="/"
						className="flex w-20 text-center ml-2 rounded-md mx-auto font-bold py-1 px-2 bg-green-600"
					>
						Login🔻
					</Link>
				</div>
			</div>
			{user.error ? (
				user.error
			) : (
				<div>
					{" "}
					{/* <p>ID: {user.id}</p>
					<p>Locatie: {user.localitate}</p>
					<p>Create la: {issuedAt}</p>
					<p>Exipră: {expiration}</p> */}
					<div className="p-5 text-xl ">
						<li className="text-red-500 p-5 ">Anunt 1</li>
						<li className="text-red-500 p-5">Anunt 2</li>
						<li className="text-red-500 p-5">Anunt 3</li>
						<li className="text-red-500 p-5">Anunt 4</li>
					</div>
				</div>
			)}
		</div>
	);
};

export default Dashboard;

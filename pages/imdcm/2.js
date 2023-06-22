import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

const Dashboard = () => {
	const [user, setUser] = useState(null);

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
		return <p></p>;
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
					<div className="p-5  ">
						<div class="grid grid-cols-4 text-md gap-3 pt-1 text-center p-3">
							<Link href="/imdcm/4 " className="col-span-4"></Link>
							<Link href="/imdcm/1">
								<div class="bg-slate-600 hover:bg-green-700 rounded-md px-2 py-1">Anul I</div>
							</Link>
							<Link href="/imdcm/2">
								<div class="bg-slate-600 hover:bg-green-700 rounded-md px-2 py-1">Anul II</div>
							</Link>
							<Link href="/imdcm/3">
								<div class="bg-slate-600 hover:bg-green-700 rounded-md px-2 py-1">Anul III</div>
							</Link>
							<Link href="/imdcm/4">
								<div class="bg-slate-600 hover:bg-green-700 rounded-md px-2 py-1">Anul IV</div>
							</Link>
						</div>
						<div className="bg-slate-800 rounded-xl"></div>
						<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 ">
							<div>
								<h1 className="text-xl py-2 text-green-500 text-center ">SEMESTRUL 3</h1>
								<div class="grid grid-cols-1 sm:grid-cols-1 gap-2">
									<div class="bg-slate-700 p-2 rounded-md border-2 border-green-800 ">
										I/1_IMDCM_Informatica aplicata I
									</div>
									<div class="bg-slate-700 p-2 rounded-md border-2 border-green-800 4">
										I/1_IMDCM_Limba engleza gr A (Duralia)
									</div>
									<div class="bg-slate-700 p-2 rounded-md border-2 border-green-800 ">
										I/1_IMDCM_Limba engleza gr B (Negoescu)
									</div>
									<div class="bg-slate-700 p-2 rounded-md border-2 border-green-800 ">
										I/1_IMDCM_Algebra liniara, geometrie anlitica si diferentiala
									</div>
									<div class="bg-slate-700 p-2 rounded-md border-2 border-green-800 ">
										I/1_IMDCM_Analiza matematica
									</div>
									<div class="bg-slate-700 p-2 rounded-md border-2 border-green-800 ">
										I/1_IMDCM_Educatie fizica si sport
									</div>
									<div class="bg-slate-700 p-2 rounded-md border-2 border-green-800 ">
										I/1_IMDCM_Explozivi si munitii
									</div>
									<div class="bg-slate-700 p-2 rounded-md border-2 border-green-800 ">
										I/1_IMDCM_Fizica
									</div>
									<div class="bg-slate-700 p-2 rounded-md border-2 border-green-800 ">
										I/1_IMDCM_Programarea calculatoarelor-Limbaje
									</div>
								</div>
							</div>
							<div>
								<h1 className="text-xl py-2 text-green-500 text-center ">SEMESTRUL 4</h1>
								<div class="grid grid-cols-1 sm:grid-cols-1 gap-2">
									<div class="bg-slate-700 p-2 rounded-md border-2 border-green-800">
										I/2_IMDCM_Analiza matematica
									</div>
									<div class="bg-slate-700 p-2 rounded-md border-2 border-green-800">
										I/2_IMDCM_Bazele electrotehnicii
									</div>
									<div class="bg-slate-700 p-2 rounded-md border-2 border-green-800">
										I/2_IMDCM_Bazele managementului
									</div>
									<div class="bg-slate-700 p-2 rounded-md border-2 border-green-800">
										I/2_IMDCM_Educatie fizica si sport
									</div>
									<div class="bg-slate-700 p-2 rounded-md border-2 border-green-800">
										I/2_IMDCM_Informatica aplicata II
									</div>
									<div class="bg-slate-700 p-2 rounded-md border-2 border-green-800">
										I/2_IMDCM_Limba engleza gr A (Duralia)
									</div>
									<div class="bg-slate-700 p-2 rounded-md border-2 border-green-800">
										I/2_IMDCM_Limba engleza gr B (Negoescu)
									</div>
									<div class="bg-slate-700 p-2 rounded-md border-2 border-green-800">
										I/2_IMDCM_Masurari in electronica si telecomunicatii
									</div>
									<div class="bg-slate-700 p-2 rounded-md border-2 border-green-800">
										I/2_IMDCM_Sisteme de armament
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default Dashboard;

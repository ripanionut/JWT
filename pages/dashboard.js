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
		return <p>Loading...{secretKey}</p>;
	}

	// Transform the timestamps into human-readable format
	const issuedAt = new Date(user.iat * 1000).toLocaleString();
	const expiration = new Date(user.exp * 1000).toLocaleString();

	return (
		<div className="bg-gray-900 text-white  h-full">
			<div className="p-2 flex bg-slate-800 border-1 border-b-2 border-green-500">
				<div> </div>
				<div>
					<h1 className="text-xl my-auto">
						Student:<span className="text-green-600  ml-2">{user.username}</span>{" "}
					</h1>
				</div>
				<div>
					<h1 className="text-xl ml-2 my-auto">
						An:<span className="text-green-600  ml-2">{user.an}</span>{" "}
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
						<div className="bg-slate-800 rounded-xl">
							<h1 className="bg-green-600 text-2xl py-1 rounded-t-xl text-center">
								Facultatea de Management Militar
							</h1>
							<div className=" border-green-600 border-b-4 mt-2">
								<h1 className=" text-xl pl-5 py-3   text-green-600 text-center">
									Inginerie si management in domeniul comunicațiilor militare
								</h1>{" "}
								<div class="grid grid-cols-4 text-md gap-3 pt-1 text-center p-3">
									<Link href="/imdcm/anunturi " className="col-span-4">
										<div class="bg-slate-500 hover:bg-green-700 rounded-md col-span-4  px-2 py-1">
											Anunturi Studenți
										</div>
									</Link>
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
							</div>
							<div className=" border-green-600 border-b-4 mt-2">
								<h1 className=" text-xl pl-5 py-3   text-green-600 text-center">
									Managementul organizatiei
								</h1>
								<div class="grid sm:grid-cols-3  text-md gap-3 pt-1 text-center p-3">
									<div className="flex flex-col space-y-2">
										<h1 className=" text-md pl-5 font-bold text-blue-400 text-center">CIG</h1>
										<div class="bg-slate-500 rounded-md col-span-4  px-2 py-1">
											Anunturi Studenți
										</div>
										<div class="bg-slate-600 rounded-md px-2 py-1">Anul I</div>
										<div class="bg-slate-600 rounded-md px-2 py-1">Anul II</div>
										<div class="bg-slate-600 rounded-md px-2 py-1">Anul III</div>
										<div class="bg-slate-600 rounded-md px-2 py-1">Anul IV</div>
									</div>
									<div className="flex flex-col space-y-2">
										<h1 className=" text-md pl-5 font-bold text-blue-400 text-center">MEF</h1>
										<div class="bg-slate-500 rounded-md col-span-4  px-2 py-1">
											Anunturi Studenți
										</div>
										<div class="bg-slate-600 rounded-md px-2 py-1">Anul I</div>
										<div class="bg-slate-600 rounded-md px-2 py-1">Anul II</div>
										<div class="bg-slate-600 rounded-md px-2 py-1">Anul III</div>
										<div class="bg-slate-600 rounded-md px-2 py-1">Anul IV</div>
									</div>
									<div className="flex flex-col space-y-2">
										<h1 className=" text-md pl-5 font-bold text-blue-400 text-center">CBRN</h1>
										<div class="bg-slate-500 rounded-md col-span-4  px-2 py-1">
											Anunturi Studenți
										</div>
										<div class="bg-slate-600 rounded-md px-2 py-1">Anul I</div>
										<div class="bg-slate-600 rounded-md px-2 py-1">Anul II</div>
										<div class="bg-slate-600 rounded-md px-2 py-1">Anul III</div>
										<div class="bg-slate-600 rounded-md px-2 py-1">Anul IV</div>
									</div>
									<div className="flex flex-col space-y-2">
										<h1 className=" text-md pl-5 font-bold text-blue-400 text-center">AUTO</h1>
										<div class="bg-slate-500 rounded-md col-span-4  px-2 py-1">
											Anunturi Studenți
										</div>
										<div class="bg-slate-600 rounded-md px-2 py-1">Anul I</div>
										<div class="bg-slate-600 rounded-md px-2 py-1">Anul II</div>
										<div class="bg-slate-600 rounded-md px-2 py-1">Anul III</div>
										<div class="bg-slate-600 rounded-md px-2 py-1">Anul IV</div>
									</div>
									<div className="flex flex-col space-y-2">
										<h1 className=" text-md pl-5 font-bold text-blue-400 text-center">LM</h1>
										<div class="bg-slate-500 rounded-md col-span-4  px-2 py-1">
											Anunturi Studenți
										</div>
										<div class="bg-slate-600 rounded-md px-2 py-1">Anul I</div>
										<div class="bg-slate-600 rounded-md px-2 py-1">Anul II</div>
										<div class="bg-slate-600 rounded-md px-2 py-1">Anul III</div>
										<div class="bg-slate-600 rounded-md px-2 py-1">Anul IV</div>
									</div>
									<div className="flex flex-col space-y-2">
										<h1 className=" text-md pl-5 font-bold text-blue-400 text-center">TANCURI</h1>
										<div class="bg-slate-500 rounded-md col-span-4  px-2 py-1">
											Anunturi Studenți
										</div>
										<div class="bg-slate-600 rounded-md px-2 py-1">Anul I</div>
										<div class="bg-slate-600 rounded-md px-2 py-1">Anul II</div>
										<div class="bg-slate-600 rounded-md px-2 py-1">Anul III</div>
										<div class="bg-slate-600 rounded-md px-2 py-1">Anul IV</div>
									</div>
									<div className="flex flex-col space-y-2">
										<h1 className=" text-md  font-bold whitespace-nowrap text-blue-400 text-center">
											ARTILIERIE SI RACHERE
										</h1>
										<div class="bg-slate-500 rounded-md col-span-4  px-2 py-1">
											Anunturi Studenți
										</div>
										<div class="bg-slate-600 rounded-md px-2 py-1">Anul I</div>
										<div class="bg-slate-600 rounded-md px-2 py-1">Anul II</div>
										<div class="bg-slate-600 rounded-md px-2 py-1">Anul III</div>
										<div class="bg-slate-600 rounded-md px-2 py-1">Anul IV</div>
									</div>
									<div className="flex flex-col space-y-2">
										<h1 className=" text-md pl-5 font-bold text-blue-400 text-center">GENIU</h1>
										<div class="bg-slate-500 rounded-md col-span-4  px-2 py-1">
											Anunturi Studenți
										</div>
										<div class="bg-slate-600 rounded-md px-2 py-1">Anul I</div>
										<div class="bg-slate-600 rounded-md px-2 py-1">Anul II</div>
										<div class="bg-slate-600 rounded-md px-2 py-1">Anul III</div>
										<div class="bg-slate-600 rounded-md px-2 py-1">Anul IV</div>
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

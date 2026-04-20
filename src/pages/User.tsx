"use client";

import { useQueryClient, useQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import type { User } from "../store/authStore";
import { customFetch } from "../utils/customFetch";
import { ArrowRotateLeft, PersonPlus } from "@gravity-ui/icons";
import { useState } from "react";

export default function User() {
	const queryClient = useQueryClient();
	const {
		data: users,
		isLoading,
		error,
		isFetching,
		refetch,
	} = useQuery<User[]>({
		queryKey: ["users"],
		queryFn: () => customFetch("/users"),
	});

	const [isOpen, setIsOpen] = useState(false);
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors }
	} = useForm<User>();
	const onSubmit = async (data: User) => {
		// call api for add user
		console.log("adding user: ", data);
		queryClient.invalidateQueries({ queryKey: ["users"] });
		setIsOpen(false);
		reset();
	};

	return (
		<div className="w-full h-full flex flex-col gap-3">
			<div className="flex items-center justify-between">
				<div className="flex items-center gap-3 h-fit">
					<button
						onClick={() => refetch()}
						disabled={isFetching}
						className="flex items-center gap-1 bg-text-primary text-white text-xs rounded-lg px-3 py-2 hover:opacity-80 transition-colors ease-in-out duration-200 cursor-pointer"
					>
						<ArrowRotateLeft className="size-3.5" />
						Reload
					</button>
					<div
						className={`${isFetching || error ? "flex" : "hidden"} items-center gap-3 h-fit`}
					>
						<span
							className={`animate-ping size-2 rounded-full ${isLoading ? "bg-primary" : error ? "bg-red-500" : "bg-yellow-500"}`}
						></span>
						<p className="opacity-50 text-sm">
							{isLoading
								? "Loading..."
								: error
									? `Error: ${error.message}`
									: "Fetching..."}
						</p>
					</div>
				</div>

				<button
					onClick={() => setIsOpen(true)}
					disabled={isFetching}
					className="flex items-center gap-2 bg-text-primary text-white text-xs rounded-lg px-3 py-2 hover:opacity-80 transition-colors ease-in-out duration-200 cursor-pointer"
				>
					<PersonPlus className="size-3.5" />
					Add User
				</button>

				{isOpen && (
					<div className="fixed inset-0 z-10 flex items-center justify-center bg-black/50">
						<div className="bg-white rounded-2xl p-5 max-w-sm w-full mx-4">
							<form
								onSubmit={handleSubmit(onSubmit)}
								className="flex flex-col gap-4 text-sm"
							>
								<input
									type="hidden"
									defaultValue={users?.length}
									{...register("id", { required: true })}
								/>
								<div className="flex gap-4">
									<div className="space-y-2">
										<input
											type="text"
											{...register("name", {
												required: true,
											})}
											placeholder="Name"
											className="w-full px-3 py-2 border rounded-lg"
										/>
										{errors.name && (
											<p className="text-red-500">
												กรุณากรอกชื่อให้ถูกต้อง.
											</p>
										)}
									</div>
									<div className="space-y-2">
										<input
											type="text"
											{...register("username", {
												required: true,
											})}
											placeholder="Username"
											className="w-full px-3 py-2 border rounded-lg"
										/>
										{errors.username && (
											<p className="text-red-500">
												กรุณากรอกชื่อผู้ใช้ให้ถูกต้อง.
											</p>
										)}
									</div>
								</div>
								<div className="space-y-2">
									<input
										type="email"
										{...register("email", {
											required: true,
										})}
										placeholder="Email"
										className="w-full px-3 py-2 border rounded-lg"
									/>
									{errors.email && (
										<p className="text-red-500">
											กรุณากรอกอีเมลให้ถูกต้อง.
										</p>
									)}
								</div>

								<div className="flex items-center justify-end gap-3 mt-3">
									<button
										onClick={() => setIsOpen(false)}
										className="bg-text-secondary/15 text-text-secondary px-4 py-2 rounded-full cursor-pointer"
									>
										Close
									</button>
									<button
										type="submit"
										className="bg-text-primary text-white px-4 py-2 rounded-full cursor-pointer"
									>
										Add User
									</button>
								</div>
							</form>
						</div>
					</div>
				)}
			</div>
			<div className="flex-1 border border-text-secondary/20 rounded-lg overflow-y-scroll">
				<table className="table-auto w-full">
					<thead className="border-b border-text-secondary/20 sticky top-0 backdrop-blur-2xl bg-black/2 rounded-t-lg">
						<tr>
							<th className="pl-4 py-2">Name</th>
							<th className="py-2">Username</th>
							<th className="py-2">Email</th>
						</tr>
					</thead>
					<tbody>
						{users?.map((user) => (
							<tr
								key={user.id}
								className="hover:bg-text-secondary/5 transition-colors ease-in-out duration-200"
							>
								<td className="pl-4 py-2">{user.name}</td>
								<td className="py-2">{user.username}</td>
								<td className="pr-4 py-2">{user.email}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
}

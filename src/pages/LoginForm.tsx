"use client";

import { useNavigate, Navigate } from "react-router-dom";
import { useAuthStore } from "../store/authStore";
import { Button, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";

export default function LoginForm() {
	const userData = {
		id: "1",
		name: "John Doe",
		username: "admin",
		email: "admin@example.com",
	};

	const { token, login } = useAuthStore();
	const navigate = useNavigate();

	if (token) {
		return <Navigate to="/dashboard" replace />;
	}

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const formData = new FormData(e.currentTarget);
		const email = formData.get('email') as string;
		const password = formData.get('password') as string;

		if (email == "admin@gmail.com" && password == "Password1234") {
			login(userData, "jwt-token-123456");
			navigate("/dashboard");
		} else {
			alert("Invalid credentials");
		}
	};

	return (
		<Form className="w-72 h-screen max-w-md flex flex-col justify-center gap-8" onSubmit={handleSubmit}>

			<h1 className="text-3xl font-bold text-center text-text-primary">Welcome</h1>

			<div className="space-y-6">
				<TextField
					isRequired
					name="email"
					type="email"
					className="w-full"
					validate={(value) => {
						if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
							return "Please enter a valid email address";
						}
						return null;
					}}
				>
					<Label>Email</Label>
					<Input placeholder="Enter your email" />
					<FieldError />
				</TextField>

				<TextField
					isRequired
					minLength={8}
					name="password"
					type="password"
					className="w-full"
					validate={(value) => {
						if (value.length < 8) {
							return "Password must be at least 8 characters";
						}
						if (!/[A-Z]/.test(value)) {
							return "Password must contain at least one uppercase letter";
						}
						if (!/[0-9]/.test(value)) {
							return "Password must contain at least one number";
						}
						return null;
					}}
				>
					<Label>Password</Label>
					<Input placeholder="Enter your password" />
					<Description>
						Must be at least 8 characters with 1 uppercase and 1 number
					</Description>
					<FieldError />
				</TextField>
			</div>

			<Button type="submit" className="w-full">Sign in</Button>
		</Form>
	);
}

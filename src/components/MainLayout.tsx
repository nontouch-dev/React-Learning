"use client";

import { useState } from "react";
import { useAuthStore } from "../store/authStore";
import { Outlet, NavLink } from "react-router-dom";
import avatar from "../assets/avatar.png";
import { Dropdown, Label } from "@heroui/react";
import { ThunderboltFill, ChevronDown, ArrowRightToSquare, Geo, GeoFill, PersonFill, Person, CircleQuestion, CircleQuestionFill, Briefcase, BriefcaseFill } from '@gravity-ui/icons';

export default function MainLayout() {
	const [open, setOpen] = useState<boolean>(false);
	const { user, logout } = useAuthStore();

	return (
		<div className="w-full h-screen grid grid-cols-[220px_1fr]">
			<aside className="w-full p-4 grid grid-rows-[auto_1fr_auto]">
				<div className="flex items-center justify-between pt-2 pb-4 px-2 border-b border-gray-200">
					<div className="flex items-center gap-3">
						<div className="bg-primary p-2 rounded-lg">
							<ThunderboltFill className="text-white w-4 h-4" />
						</div>
						<h1 className="text-lg font-medium">EasyTeam</h1>
					</div>
				</div>

				<nav className='w-full flex flex-col py-6 gap-6'>
					<div className="space-y-0.5">
						<p className="text-[10px] font-medium text-gray-500">MAIN MENU</p>
						<div className='flex flex-col w-full py-1.5 gap-1'>
							<NavLink className={({ isActive }) => isActive ? "nav-active" : "nav-inactive"} to="/dashboard">
								{({ isActive }) => (
									<>
										{isActive ? <GeoFill className="menu-icon" /> : <Geo className="menu-icon" />}
										Dashboard
									</>
								)}
							</NavLink>

							<NavLink className={({ isActive }) => isActive ? "nav-active" : "nav-inactive"} to="/users">
								{({ isActive }) => (
									<>
										{isActive ? <PersonFill className="menu-icon" /> : <Person className="menu-icon" />}
										Users
									</>
								)}
							</NavLink>

							<NavLink className={({ isActive }) => isActive ? "nav-active" : "nav-inactive"} to="/payment">
								{({ isActive }) => (
									<>
										{isActive ? <BriefcaseFill className="menu-icon" /> : <Briefcase className="menu-icon" />}
										Payment
									</>
								)}
							</NavLink>
						</div>
					</div>

					<div className="space-y-0.5">
						<p className="text-[10px] font-medium text-gray-500">OTHER</p>
						<div className='flex flex-col w-full py-1.5 gap-1'>
							<NavLink className={({ isActive }) => isActive ? "nav-active" : "nav-inactive"} to="/about">
								{({ isActive }) => (
									<>
										{isActive ? <CircleQuestionFill className="menu-icon" /> : <CircleQuestion className="menu-icon" />}
										About
									</>
								)}
							</NavLink>
						</div>
					</div>
				</nav>

				<div className="w-full grid grid-cols-[auto_1fr_auto] gap-3 items-center pt-4 border-t border-gray-200">
					<img src={avatar} alt="User" className="w-9 h-9 rounded-full border-2 border-success" />
					<div className="min-w-0 flex-1">
						<p className="text-sm font-medium truncate">{user.name.toUpperCase()}</p>
						<p className="text-xs text-gray-500 truncate">{user.username}</p>
					</div>
					<Dropdown isOpen={open} onOpenChange={setOpen}>
						<Dropdown.Trigger>
							<div className={`p-1.5 rounded-md cursor-pointer hover:bg-gray-200/50 transition-colors duration-200 ease-in-out ${open ? 'bg-gray-100' : ''}`}>
								<ChevronDown className={`text-gray-400 transition-transform duration-200 ease-in-out ${open ? 'rotate-180' : ''}`} />
							</div>
						</Dropdown.Trigger>
						<Dropdown.Popover placement="top start">
							<Dropdown.Menu onAction={(key) => { if (key === 'logout') { logout() } }}>
								<Dropdown.Item id="logout" variant="danger">
									<ArrowRightToSquare className="size-4 shrink-0 text-danger" />
									<Label>Logout</Label>
								</Dropdown.Item>
							</Dropdown.Menu>
						</Dropdown.Popover>
					</Dropdown>
				</div>
			</aside>

			<main className="mr-3 my-3 p-4 bg-white rounded-xl overflow-y-auto">
				<Outlet />
			</main>
		</div>
	);
}

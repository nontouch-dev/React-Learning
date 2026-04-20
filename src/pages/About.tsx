"use client";

import sky from "../assets/sky.jpg";

export default function About() {
	return (
		<div className="relative flex flex-col rounded-md h-full overflow-hidden">
			<img src={sky} alt="sky" className="w-full h-full object-cover" />
			<div className="absolute h-fit bottom-0 left-0 bg-black/40 backdrop-blur-md shadow-2xl rounded-2xl flex flex-col items-start p-4 m-6">
				<div className="flex items-center gap-2">
					<div className="text-white space-y-3">

						<div className="space-y-2">
							<h5 className="text-sm font-semibold text-blue-200">About Project</h5>
							<ul className="text-xs opacity-80 space-y-1">
								<li>• Exploring React and Hooks concepts</li>
								<li>• Mastering React Router for Single Page Applications</li>
								<li>• Implementing State Management with Zustand</li>
								<li>• Working with Tailwind CSS and UI component libraries</li>
							</ul>
						</div>

						<div className="flex flex-wrap gap-2 mt-3">
							<span className="px-2 py-1 bg-blue-500/30 text-blue-200 rounded text-xs">React 19</span>
							<span className="px-2 py-1 bg-green-500/30 text-green-200 rounded text-xs">TypeScript</span>
							<span className="px-2 py-1 bg-purple-500/30 text-purple-200 rounded text-xs">Tailwind CSS</span>
							<span className="px-2 py-1 bg-orange-500/30 text-orange-200 rounded text-xs">HeroUI</span>
							<span className="px-2 py-1 bg-cyan-500/30 text-cyan-200 rounded text-xs">React Router</span>
							<span className="px-2 py-1 bg-amber-500/30 text-amber-200 rounded text-xs">React Query</span>
							<span className="px-2 py-1 bg-pink-500/30 text-pink-200 rounded text-xs">Zustand</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

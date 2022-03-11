import React, { useState } from "react";
import { Link } from "react-router-dom";
import Dropdown from "./Sidebar";

const navlinks = [
	{
		name: "home",
		to: "/",
	},
	{
		name: "latest music",
		to: "/latest",
	},
	{
		name: "Trending",
		to: "/trending",
	},
	{
		name: "charts",
		to: "/charts",
	},
];
const Header = () => {
	const [drop, setDrop] = useState(false);
	const toggle = () => {
		return setDrop(!drop);
	};
	return (
		<header className="relative flex  justify-between p-24">
			<div
				className=" md:hidden hover:cursor-pointer flex flex-col items-center justify-center"
				onClick={toggle}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-8 w-8"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					strokeWidth={2}
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M4 6h16M4 12h16M4 18h7"
					/>
				</svg>
			</div>
			{drop && <Dropdown navlinks={navlinks} toggle={toggle} />}

			<Link
				to="/"
				className="uppercase text-5xl font-bold font-syne tracking-wider whitespace-nowrap"
			>
				Music Blog
			</Link>
			<nav className="hidden md:block mt-2">
				{React.Children.toArray(
					navlinks.map((links) => {
						return (
							<Link
								to={links.to}
								className="uppercase tracking-widest text-gray-400 text-sm font-fredoka pl-5 hover:text-black transition-all duration-500"
							>
								{links.name}
							</Link>
						);
					})
				)}
			</nav>

			{/* <div className="hidden sm:flex items-center justify-between space-x-5 pl-8">
				<button className="text-sm font-fredoka px-10 py-3 bg-emerald-300 rounded-lg tracking-widest">
					Subscribe
				</button>
			</div> */}
		</header>
	);
};

export default Header;

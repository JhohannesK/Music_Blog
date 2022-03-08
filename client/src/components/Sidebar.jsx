import React from "react";
import { Link } from "react-router-dom";
import { ImCancelCircle } from "react-icons/im";

const Dropdown = ({ navlinks, toggle }) => {
	return (
		<nav className="md:hidden absolute top-0 left-0 w-[100%] h-full  whitespace-nowrap p-7 bg-white">
			<div className="flex items-center justify-end">
				<ImCancelCircle
					className="h-6 w-6 hover:animate-spin"
					onClick={toggle}
				/>
			</div>
			<div className="flex flex-col items-center justify-center gap-y-5">
				{React.Children.toArray(
					navlinks.map((links) => {
						return (
							<Link
								to={links.to}
								className="uppercase text-sm font-fredoka"
							>
								{links.name}
							</Link>
						);
					})
				)}
			</div>
		</nav>
	);
};

export default Dropdown;

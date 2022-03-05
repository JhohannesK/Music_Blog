import React from "react";
import { Link } from "react-router-dom";

const Dropdown = ({ navlinks }) => {
	return (
		<nav className="absolute top-8 left-0 flex flex-col items-center justify-center whitespace-nowrap">
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
		</nav>
	);
};

export default Dropdown;

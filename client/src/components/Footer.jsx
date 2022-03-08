import React from "react";
import { Link } from "react-router-dom";
import {
	BsFacebook,
	BsInstagram,
	BsLinkedin,
	BsTwitter,
	BsSnapchat,
} from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";

const Footer = () => {
	return (
		<div className=" bg-zinc-800 text-gray-300 flex flex-col items-center justify-center font-mono gap-y-5 p-20">
			<p className="text-3xl font-bold">Subscribe</p>
			<p>Sign up your email to get new posts</p>
			<div className="flex">
				<input
					type="text"
					placeholder="Email Address"
					className="pl-3 border border-r-0 focus:outline-none text-black h-16 w-[20rem]"
				/>
				<div className="">
					<button className="border-2 border-white h-16 w-[10rem] hover:bg-white hover:text-black transition-all duration-300 uppercase">
						Sign up
					</button>
				</div>
			</div>
			<div className="flex flex-col gap-y-6">
				<p className="font-fredoka text-sm tracking-wide capitalize">
					Follow me on Social Media!!
				</p>
				<div className="flex gap-x-5">
					<Link to="#">
						<BsFacebook />
					</Link>
					<Link to="#">
						<BsTwitter />
					</Link>
					<Link to="#">
						<BsLinkedin />
					</Link>
					<Link to="#">
						<BsInstagram />
					</Link>
					<Link to="#">
						<BsSnapchat />
					</Link>
					<Link to="#">
						<FaTiktok />
					</Link>
				</div>
			</div>
			<div className="underline hover:text-gray-600 cursor-pointer">
				Disclaimer | Legal | Privacy
			</div>
			<div className="pt-14">
				<p className="text-sm whitespace-nowrap">
					Copyright &copy; 2022 | Domeh Kelvin | All rights
					reserved
				</p>
			</div>
		</div>
	);
};

export default Footer;

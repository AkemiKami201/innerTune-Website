import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navItems } from "../constants";

const Navbar = () => {
	const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

	const toggleNavbar = () => {
		setMobileDrawerOpen(!mobileDrawerOpen);
	};

	return (
		<nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
			<div className="container px-4 mx-auto relative text-sm">
				<div className="flex justify-between items-center">
					<div className="flex items-center flex-shrink-0 font-bold">
						<span className="text-xl tracking-tight">Inner</span>
						<span className="text-xl bg-gradient-to-r from-blue-600 to-blue-900 text-transparent bg-clip-text">Tune 
						</span><div className="ml-1"><i className="fi fi-rr-waveform-path"></i></div>
					</div>
					<ul className="hidden lg:flex ml-14 space-x-12">
						{navItems.map((item, index) => (
							<li key={index}>
							<a href={item.href}>{item.label}</a>
							</li>
						))}
					</ul>
					<div className="hidden lg:flex justify-center space-x-12 items-center">
						<a href="https://github.com/Arturo254/InnerTune" className="py-2 px-3 border rounded-md">
							Contribuir
						</a>
						<a href="https://github.com/Arturo254/InnerTune/releases" className="bg-gradient-to-r lg:flex from-yellow-500 to-red-900 py-2 px-4 rounded-md">
							Descargar
						</a>
					</div>
					<div className="lg:hidden md:flex flex-col justify-end">
						<button onClick={toggleNavbar}>
							{mobileDrawerOpen ? <X /> : <Menu />}
						</button>
					</div>
				</div>
				{mobileDrawerOpen && (
					<div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center text-center lg:hidden">
						<ul>
							{navItems.map((item, index) => (
								<li key={index} className="py-4">
									<a href={item.href}>{item.label}</a>
								</li>
							))}
						</ul>
						<div className="flex space-x-6">
							<a href="https://github.com/Arturo254/InnerTune" className="py-2 px-3 border rounded-md">
								Contribuir
							</a>
							<a href="https://github.com/Arturo254/InnerTune/releases" className="py-2 px-4 rounded-md bg-gradient-to-r from-blue-600 to-blue-900">
								Descargar
							</a>
						</div>
					</div>
				)}
			</div>
		</nav>
	);
};

export default Navbar;
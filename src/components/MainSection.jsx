import innerT from "../assets/media/img/mock.png";
import { HiInformationCircle } from "react-icons/hi";

const MainSection = () => {
	return (
		<div className="flex flex-col items-center mt-6 lg:mt-20">
			<div className="flex flex-wrap justify-center items-center">
				<h1 className="text-4xl sm:text-6xl lg:text-7xl text-center font-bold tracking-wide">
					Inner
				<span className="bg-gradient-to-r from-blue-600 to-blue-900 text-transparent bg-clip-text">
					Tune
				</span>
				<i className="fi fi-rr-waveform-path"></i>
			    </h1>
			    <img className="w-96" src={innerT} alt="InnerTune" />				
			</div>
			<p className="mt-10 text-2xl text-center text-neutral-500">
				Un cliente de YouTube Music con Material Design 3, para Android
			</p>

			<div className="flex justify-center my-10">
				<a href="https://github.com/Arturo254/InnerTune/releases" className="bg-gradient-to-r from-yellow-500 to-red-900 py-3 px-4 mx-3 rounded-md">Probar Gratis</a>
				<a href="https://github.com/Arturo254/InnerTune" className="py-3 px-4 mx-3 rounded-md border">Documentacion</a>
			</div>
		</div>
	);
};

export default MainSection;
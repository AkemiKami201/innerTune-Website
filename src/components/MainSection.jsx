const MainSection = () => {
	return (
		<div className="flex flex-col items-center mt-6 lg:mt-20 ">
			<h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
				Inner
			<span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
				Tune
			</span>
			<i class="fi fi-rr-waveform-path"></i>
			</h1>
			<p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
				Un cliente de YouTube Music con Material Design 3, para Android
			</p>
			<div className="flex justify-center my-10">
				<a href="https://github.com/Arturo254/InnerTune/releases" className="bg-gradient-to-r from-orange-500 to-red-800 py-3 px-4 mx-3 rounded-md">Probar Gratis</a>
				<a href="https://github.com/Arturo254/InnerTune" className="py-3 px-4 mx-3 rounded-md border">Documentacion</a>
			</div>
		</div>
	);
};

export default MainSection;
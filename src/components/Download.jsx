import { Card } from "flowbite-react";
import { Button } from "flowbite-react";

const DownloadSection = () => {
	return (
		<div className="mt-20">
	      	<h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide">
		        <i class="fi fi-br-down-to-line"></i> Desca
		        <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
		          rgar
		        </span>
		    </h2>

		    <div className="flex flex-col items-center mt-6 p-16 lg:mt- ">
	            <Card href="https://github.com/Arturo254/InnerTune/releases/download/0.6.0/app-foss-release-0.6.0.apk" 
	            	className="max-w-sm text-center">
			      <h5 className="text-2xl font-bold text-lg tracking-tight text-gray-900 dark:text-gray">
			        Descargar version Estable
			      </h5>
			      <div className="text-5xl text-black rounded-full">
	                <i class="fi fi-brands-android"></i>
	              </div>
			      <p className="font-normal text-gray-700 dark:text-gray-400">
			        Descarga la version de Android (APK) de InnerTune sin errores ni bugs.
			      </p>
			      <div className="flex flex-wrap gap-2 mx-auto">
				      <Button size="sm" gradientDuoTone="pinkToOrange">
					    	<div className="text-3xl mx-3">
			                	<i class="fi fi-rr-download"></i>
			              	</div>
				        	<h4 className="mt-1 mb-2 text-xl">Descargar</h4>
				      </Button>
				   </div>
			    </Card>
	        </div>

	        <div className="flex flex-col items-center mt-6 p-16 lg:mt- ">
	            <Card href="https://github.com/Arturo254/InnerTune/releases/download/0.5.7/app-foss-release-0.5.7.apk" 
	            	className="max-w-sm text-center">
			      <h5 className="text-2xl font-bold text-lg tracking-tight text-gray-900 dark:text-gray">
			        Descargar version Beta
			      </h5>
			      <div className="text-5xl text-black rounded-full">
	                <i class="fi fi-brands-android"></i>
	              </div>
			      <p className="font-normal text-gray-700 dark:text-gray-400">
			        Descarga la version de Android (APK) de InnerTune con funciones y Caracteristicas experimentales.
			      </p>
			      <div className="flex flex-wrap gap-2 mx-auto">
				      <Button size="sm" gradientDuoTone="pinkToOrange">
					    	<div className="text-3xl mx-3">
			                	<i class="fi fi-rr-download"></i>
			              	</div>
				        	<h4 className="mt-1 mb-2 text-xl">Descargar</h4>
				      </Button>
				   </div>
			    </Card>
	        </div>

		</div>
	);
};

export default DownloadSection;
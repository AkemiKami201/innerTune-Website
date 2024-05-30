import { CheckCircle2 } from "lucide-react";
import innerT from "../assets/media/img/mock.png";

const featureSection = () => {
	return (
		<div className="mt-20">
	      	<h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide">
		        <i class="fi fi-sr-star-shooting"></i> Características y {" "}
		        <span className="bg-gradient-to-r from-blue-600 to-blue-900 text-transparent bg-clip-text">
		          funciones
		        </span>
		    </h2>
		    <div className="flex flex-wrap justify-center">
		        <div className="p-2 w-full lg:w-1/2">
		          <img src={innerT} alt="InnerTune" />
		        </div>

		        {/* Apartado de Características */}
		        <div className="pt-12 w-full lg:w-1/2">
		            <div className="flex mb-12">
		              <div className="text-green-400 mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full">
		                <CheckCircle2 />
		              </div>
		              <div>
		                <h5 className="mt-1 mb-2 text-2xl">Reproducci&oacute;n sin anuncios</h5>
		                <p className="text-md text-xl text-neutral-500">Reproduce canciones de YT/YT Music sin anuncios</p>
		              </div>
		            </div>

		            <div className="flex mb-12">
		              <div className="text-green-400 mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full">
		                <CheckCircle2 />
		              </div>
		              <div>
		                <h5 className="mt-1 mb-2 text-2xl">Reproducci&oacute;n en segundo plano</h5>
		                <p className="text-md text-xl text-neutral-500">Reproduce m&uacute;sica estando fuera de la aplicaci&oacute;n</p>
		              </div>
		            </div>

		            <div className="flex mb-12">
		              <div className="text-green-400 mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full">
		                <CheckCircle2 />
		              </div>
		              <div>
		                <h5 className="mt-1 mb-2 text-2xl">B&uacute;squeda de canciones</h5>
		                <p className="text-md text-xl text-neutral-500">Busque canciones, v&iacute;deos, &aacute;lbumes y listas de reproducci&oacute;n de YouTube Music</p>
		              </div>
		            </div>

		            <div className="flex mb-12">
		              <div className="text-green-400 mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full">
		                <CheckCircle2 />
		              </div>
		              <div>
		                <h5 className="mt-1 mb-2 text-2xl">Gesti&oacute;n de biblioteca</h5>
		                <p className="text-md text-xl text-neutral-500">Administra toda tu m&uacute;sica favorita desde la biblioteca</p>
		              </div>
		            </div>

		            <div className="flex mb-12">
		              <div className="text-green-400 mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full">
		                <CheckCircle2 />
		              </div>
		              <div>
		                <h5 className="mt-1 mb-2 text-2xl">Descarga canciones</h5>
		                <p className="text-md text-xl text-neutral-500">Almacenar en cach&eacute; y descargar canciones para reproducirlas sin conexi&oacute;n</p>
		              </div>
		            </div>
		        </div>

		        <div className="lg:flex lg:flex-row-reverse justify-center">
			        <div className="p-2 w-full lg:w-1/2">
			          <img src={innerT} alt="innerTube" />
			        </div>
			        <div className="pt-12 w-full lg:w-1/2">
			            <div className="flex mb-12">
			              <div className="text-green-400 mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full">
			                <CheckCircle2 />
			              </div>
			              <div>
			                <h5 className="mt-1 mb-2 text-2xl">Letras sincronizadas</h5>
			                <p className="text-md text-xl text-neutral-500">Gran repertorio de letras sincronizadas dentro de la aplicaci&oacute;n</p>
			              </div>
			            </div>

			            <div className="flex mb-12">
			              <div className="text-green-400 mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full">
			                <CheckCircle2 />
			              </div>
			              <div>
			                <h5 className="mt-1 mb-2 text-2xl">Traductor de letras (experimental)</h5>
			                <p className="text-md text-xl text-neutral-500">Nueva funci&oacute;n para traducir la letra de tus canciones favoritas</p>
			              </div>
			            </div>

			            <div className="flex mb-12">
			              <div className="text-green-400 mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full">
			                <CheckCircle2 />
			              </div>
			              <div>
			                <h5 className="mt-1 mb-2 text-2xl">Ajustar el tempo/tono</h5>
			                <p className="text-md text-xl text-neutral-500">Ajusta a tu gusto el tiempo, asi como el tono de tu m&uacute;sica</p>
			              </div>
			            </div>

			            <div className="flex mb-12">
			              <div className="text-green-400 mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full">
			                <CheckCircle2 />
			              </div>
			              <div>
			                <h5 className="mt-1 mb-2 text-2xl">Tema din&aacute;mico</h5>
			                <p className="text-md text-xl text-neutral-500">Personaliza a tu preferencia el tema de la aplicaci&oacute;n</p>
			              </div>
			            </div>

			            <div className="flex mb-12">
			              <div className="text-green-400 mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full">
			                <CheckCircle2 />
			              </div>
			              <div>
			                <h5 className="mt-1 mb-2 text-2xl">Soporte de inicio de sesi&oacute;n</h5>
			                <p className="text-md text-xl text-neutral-500">Con integraci&oacute;n de inicio de sesi&oacute;n, para sincronizar tu m&uacute;sica favoritas</p>
			              </div>
			            </div>
			        </div>
			    </div>
	      </div>
	    </div>
	);
};

export default featureSection;
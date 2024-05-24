import { CheckCircle2 } from "lucide-react";
import innerT from "../assets/media/img/mock.png";

const featureSection = () => {
	return (
		<div className="mt-20">
	      	<h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide">
		        <i class="fi fi-sr-star-shooting"></i> Características y {" "}
		        <span className="bg-gradient-to-r from-rose-500 to-rose-950 text-transparent bg-clip-text">
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
		                <h5 className="mt-1 mb-2 text-xl">Reproduccion sin anuncios</h5>
		                <p className="text-md text-neutral-500">Reproduce canciones de YT/YT Music sin anuncios</p>
		              </div>
		            </div>

		            <div className="flex mb-12">
		              <div className="text-green-400 mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full">
		                <CheckCircle2 />
		              </div>
		              <div>
		                <h5 className="mt-1 mb-2 text-xl">Reproducción en segundo plano</h5>
		                <p className="text-md text-neutral-500">Reproduce musica estando fuera de la aplicacin</p>
		              </div>
		            </div>

		            <div className="flex mb-12">
		              <div className="text-green-400 mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full">
		                <CheckCircle2 />
		              </div>
		              <div>
		                <h5 className="mt-1 mb-2 text-xl">Busqueda de canciones</h5>
		                <p className="text-md text-neutral-500">Busque canciones, vídeos, álbumes y listas de reproducción de YouTube Music</p>
		              </div>
		            </div>

		            <div className="flex mb-12">
		              <div className="text-green-400 mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full">
		                <CheckCircle2 />
		              </div>
		              <div>
		                <h5 className="mt-1 mb-2 text-xl">Gestión de biblioteca</h5>
		                <p className="text-md text-neutral-500">Administra toda tu musica favorita desde la biblioteca</p>
		              </div>
		            </div>

		            <div className="flex mb-12">
		              <div className="text-green-400 mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full">
		                <CheckCircle2 />
		              </div>
		              <div>
		                <h5 className="mt-1 mb-2 text-xl">Descarga canciones</h5>
		                <p className="text-md text-neutral-500">Almacenar en caché y descargar canciones para reproducirlas sin conexión</p>
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
			                <h5 className="mt-1 mb-2 text-xl">Letras sincronizadas</h5>
			                <p className="text-md text-neutral-500">Gran repertorio de letras sincronizadas dentro de la aplicacion</p>
			              </div>
			            </div>

			            <div className="flex mb-12">
			              <div className="text-green-400 mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full">
			                <CheckCircle2 />
			              </div>
			              <div>
			                <h5 className="mt-1 mb-2 text-xl">Traductor de letras (experimental)</h5>
			                <p className="text-md text-neutral-500">Nueva funcion para traducir la letra de tus canciones favoritas</p>
			              </div>
			            </div>

			            <div className="flex mb-12">
			              <div className="text-green-400 mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full">
			                <CheckCircle2 />
			              </div>
			              <div>
			                <h5 className="mt-1 mb-2 text-xl">Ajustar el tempo/tono</h5>
			                <p className="text-md text-neutral-500">Ajusta a tu gusto el tiempo, asi como el tono de tu musica</p>
			              </div>
			            </div>

			            <div className="flex mb-12">
			              <div className="text-green-400 mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full">
			                <CheckCircle2 />
			              </div>
			              <div>
			                <h5 className="mt-1 mb-2 text-xl">Tema dinámico</h5>
			                <p className="text-md text-neutral-500">Personaliza a tu preferencia el tema de la aplicación</p>
			              </div>
			            </div>

			            <div className="flex mb-12">
			              <div className="text-green-400 mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full">
			                <CheckCircle2 />
			              </div>
			              <div>
			                <h5 className="mt-1 mb-2 text-xl">Soporte de inicio de sesión</h5>
			                <p className="text-md text-neutral-500">Con integración de inicio de sesión, para sincronizar tu musica favoritas</p>
			              </div>
			            </div>
			        </div>
			    </div>
	      </div>
	    </div>
	);
};

export default featureSection;
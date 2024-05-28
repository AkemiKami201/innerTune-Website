import { CheckCircle2 } from "lucide-react";
import innerT from "../assets/media/img/mock.png";

const ChangeSection = () => {
	return (
		<div className="mt-20">

			{/* Encabezado principal de la seccion Cambios */}
	      	<h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide">
		        Cambios y {" "}
		        <span className="bg-gradient-to-r from-rose-500 to-rose-950 text-transparent bg-clip-text">
		          Soluciones <i class="fi fi-rr-it-alt"></i>
		        </span>
	        </h2>
	        <div className="lg:flex lg:flex-row-reverse justify-center">
		        <div className="p-2 w-full lg:w-1/2">
		          <img src={innerT} alt="innerTube" />
		        </div>

		        {/* Apartado de Cambios en la aplicacion */}
		        <div className="pt-12 w-full lg:w-1/2">
		            <div className="flex mb-12">
		              <div className="text-blue-400 mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full">
		                <CheckCircle2 />
		              </div>
		              <div>
		                <h5 className="mt-1 mb-2 text-2xl">Crasheos y Cierres Inesperados</h5>
		                <p className="text-md text-xl text-neutral-500">Reparaci&oacute;n de fallos inesperados dentro de la aplicaci&oacute;n que provocaban su cierre inesperado</p>
		              </div>
		            </div>

		            <div className="flex mb-12">
		              <div className="text-blue-400 mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full">
		                <CheckCircle2 />
		              </div>
		              <div>
		                <h5 className="mt-1 mb-2 text-2xl">Nueva UI (Interfaz De Usuario)</h5>
		                <p className="text-md text-xl text-neutral-500">Mejora en la interfaz de usuario, m&aacute;s interactiva para el usuario</p>
		              </div>
		            </div>

		            <div className="flex mb-12">
		              <div className="text-blue-400 mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full">
		                <CheckCircle2 />
		              </div>
		              <div>
		                <h5 className="mt-1 mb-2 text-2xl">Se agrego un icono pequeño en la barra de B&uacute;squeda para ir a casa</h5>
		                <p className="text-md text-xl text-neutral-500">Para tener f&aacute;cil acceso al menu principal</p>
		              </div>
		            </div>

		            <div className="flex mb-12">
		              <div className="text-blue-400 mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full">
		                <CheckCircle2 />
		              </div>
		              <div>
		                <h5 className="mt-1 mb-2 text-2xl">Rediseño del reproductor</h5>
		                <p className="text-md text-xl text-neutral-500">Modificaci&oacute;n del diseño añadiendo mejoras significativas</p>
		              </div>
		            </div>

		            <div className="flex mb-12">
		              <div className="text-blue-400 mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full">
		                <CheckCircle2 />
		              </div>
		              <div>
		                <h5 className="mt-1 mb-2 text-2xl">Sincronizaci&oacute;n con cuenta de YouTube Music</h5>
		                <p className="text-md text-xl text-neutral-500">Para tener toda tu m&uacute;sica en un solo lugar</p>
		              </div>
		            </div>
	        	</div>
	      	</div>
	    </div>
	);
};

export default ChangeSection;
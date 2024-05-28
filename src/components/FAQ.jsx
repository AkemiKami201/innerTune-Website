import { MessageCircleQuestion } from "lucide-react";
import { Accordion, AccordionContent, AccordionPanel, AccordionTitle } from "flowbite-react";

const FAQSection = () => {
	return (
		<div className="mt-20">
			<h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide">
		        <i class="fi fi-sr-message-question"></i> Preguntas {" "}
		        <span className="bg-gradient-to-r from-rose-500 to-rose-950 text-transparent bg-clip-text">
		        	Frecuentes
		        </span>
	      	</h2>

			<div className="pt-14">
	            <div className="flex mb-12 items-center">
		            <div className="text-3xl text-rose-500 sm:text-5xl lg:text-5xl p-4 tracking-wide">
		                <i class="fi fi-rr-messages-question"></i>
		            </div>
		            <div className="text-center"> 
		                <h5 className="mt-1 mb-2 text-2xl">¿C&oacute;mo transferir m&uacute;sica a LastFM, LibreFM, ListenBrainz o GNU FM?</h5>
		                <p className="text-md text-xl text-neutral-500">Necesitas escuchar tu m&uacute;sica, pero desde otra fuente? Utilice aplicaciones de scrobbler de m&uacute;sica. Recomendamos Pano Scrobbler</p>
		            </div>
		        </div>

		        <div className="flex mb-12 items-center">
		            <div className="text-3xl text-rose-500 sm:text-5xl lg:text-5xl p-4 tracking-wide">
		                <i class="fi fi-rr-messages-question"></i>
		            </div>
		            <div className="text-center"> 
		                <h5 className="mt-1 mb-2 text-2xl">¿Por qu&eacute; InnerTune no se muestra en Android Auto?</h5>
		                <p className="text-md text-xl text-neutral-500">1. Vaya a la configuraci&oacute;n de Android Auto y toque varias veces la versi&oacute;n en 
		                la parte inferior para habilitar la configuraci&oacute;n del desarrollador</p>
						<p className="text-md text-xl text-neutral-500">2. En el men&uacute; de tres puntos en la parte superior derecha de la pantalla, 
						haga clic en "Configuraci&oacute;n de desarrollador"</p>
						<p className="text-md text-xl text-neutral-500">3. Habilite "Fuentes desconocidas"</p>
		            </div>
		        </div>
	        </div>
		</div>
	);
};

export default FAQSection;
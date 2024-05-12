import { MessageCircleQuestion } from "lucide-react";
import { Accordion, AccordionContent, AccordionPanel, AccordionTitle } from "flowbite-react";

const FAQSection = () => {
	return (
		<div className="mt-20">
			<h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide">
		        <i class="fi fi-sr-message-question"></i> Preguntas {" "}
		        <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
		        	Frecuentes
		        </span>
	      	</h2>

			<div className="pt-14">
	            <div className="flex mb-12">
		            <div className="text-3xl text-yellow-300 sm:text-5xl lg:text-5xl p-4 text-center tracking-wide">
		                <i class="fi fi-rr-messages-question"></i>
		            </div>
		            <div> 
		                <h5 className="mt- mb-2 text-2xl text-center">¿Cómo transferir música a LastFM, LibreFM, ListenBrainz o GNU FM?</h5>
		                <p className="text-md text-xl text-neutral-500 text-center">Utilice otras aplicaciones de scrobbler de música. Recomendamos Pano Scrobbler. Utilice otras aplicaciones de scrobbler de música. 
		                Recomendamos Pano Scrobbler.</p>
		            </div>
		        </div>

		        <div className="flex mb-12">
		            <div className="text-3xl text-yellow-300 sm:text-5xl lg:text-5xl p-4 text-center tracking-wide">
		                <i class="fi fi-rr-messages-question"></i>
		            </div>
		            <div> 
		                <h5 className="mt-1 mb-2 text-2xl text-center">¿Por qué InnerTune no se muestra en Android Auto?</h5>
		                <p className="text-md text-xl text-neutral-500 text-center">1. Vaya a la configuración de Android Auto y toque varias veces la versión en 
		                la parte inferior para habilitar la configuración del desarrollador..</p>
						<p className="text-md text-xl text-neutral-500 text-center">2. En el menú de tres puntos en la parte superior derecha de la pantalla, 
						haga clic en "Configuración de desarrollador".</p>
						<p className="text-md text-xl text-neutral-500 text-center">3. Habilite "Fuentes desconocidas"</p>
		            </div>
		        </div>
	        </div>
		</div>
	);
};

export default FAQSection;
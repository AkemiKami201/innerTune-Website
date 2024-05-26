import {
  Footer,
  FooterCopyright,
  FooterDivider,
  FooterIcon,
  FooterLink,
  FooterLinkGroup,
  FooterTitle,
} from "flowbite-react";
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";


const FooterSection = () => {
    return (
	        <Footer className="bg-zinc-900" container>
		      <div className="w-full">
		        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
		          	<div className="flex items-center flex-shrink-0 m-4">
		          		<img className="w-10 m-4 cursor-pointer" src="https://raw.githubusercontent.com/z-huang/InnerTune/dev/app/src/main/res/mipmap-xxxhdpi/ic_launcher_round.webp" />
						<span className="text-3xl tracking-tight">Inner</span>
						<span className="text-3xl bg-gradient-to-r from-rose-500 to-rose-900 text-transparent bg-clip-text">Tune 
						</span><i className="fi fi-rr-waveform-path p-2"></i>
					</div>
		          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
		            <div>
		              <FooterTitle title="Acerca" />
		              <FooterLinkGroup col>
		                <FooterLink href="https://github.com/Arturo254">Dev Aplicaci&oacute;n</FooterLink>
		              </FooterLinkGroup>
		            </div>
		            <div>
		              <FooterTitle title="Informaci&oacute;n" />
		              <FooterLinkGroup col>
		                <FooterLink href="https://github.com/Arturo254/InnerTune">Github</FooterLink>
		                <FooterLink href="https://raw.githubusercontent.com/Arturo254/InnerTune/master/LICENSE">Licencia</FooterLink>
		              </FooterLinkGroup>
		            </div>
		            <div>
		              <FooterTitle title="Soporte" />
		              <FooterLinkGroup col>
		                <FooterLink href="https://github.com/Arturo254/InnerTune?tab=readme-ov-file#-c%C3%B3mo-reconstruir-la-aplicaci%C3%B3n">Contribuir</FooterLink>
		                <FooterLink href="https://github.com/Arturo254/InnerTune/issues">Reportar bug</FooterLink>
		              </FooterLinkGroup>
		            </div>
		          </div>
		        </div>
		        <FooterDivider />
		        <div className="w-full sm:flex sm:items-center sm:justify-between">
		          <FooterCopyright href="https://github.com/Arturo254/InnerTune" by="InnerTune™" year={2024} />
		          <FooterLinkGroup col className="p-1 items-center justify-between">
		                <span className="text-1xl text-neutral-600">Aplicaci&oacute;n actualizada por <a className="font-bold tracking-tight text-gray-200 dark:text-gray" href="https:	//github.com/Arturo254">Arturo254</a></span>
		                <span className="text-1xl text-neutral-600">Sitio mantenido por <a className="font-bold tracking-tight text-gray-200 dark:text-gray" href="https://github.com/ChronoLux616">ChronoLux</a></span>
		              </FooterLinkGroup>
		          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center items-center justify-between">
		            <FooterIcon href="#" icon={BsFacebook} />
		            <FooterIcon href="#" icon={BsInstagram} />
		            <FooterIcon href="#" icon={BsTwitter} />
		            <FooterIcon href="#" icon={BsGithub} />
		            <FooterIcon href="#" icon={BsDribbble} />
		          </div>
		        </div>
		      </div>
	    	</Footer>
    );
};

export default FooterSection;
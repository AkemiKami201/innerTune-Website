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

import logo from "../assets/waveform-path.svg";
const year = new Date().getFullYear(); // get the current year

const FooterSection = () => {
    return (
      <Footer className="bg-gray-800" container>
	      <div className="w-full">
	        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
		        <div className="flex items-center flex-shrink-0 m-4 font-bold">
		          <img className="w-10 mr-2 cursor-pointer" src="https://raw.githubusercontent.com/z-huang/InnerTune/dev/app/src/main/res/mipmap-xxxhdpi/ic_launcher_round.webp" />
							<span className="text-2xl tracking-tight">Inner</span>
							<span className="text-2xl bg-gradient-to-r from-rose-500 to-rose-900 text-transparent bg-clip-text">Tune </span>
							<div className="ml-1 h-4"><i className="fi fi-rr-waveform-path"></i></div>
						</div>
	          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
	            <div>
	              <FooterTitle className="text-white" title="Acerca" />
	              <FooterLinkGroup col>
	                <FooterLink className="text-neutral-400 hover:text-gray-200" href="https://github.com/Arturo254">Dev Aplicaci&oacute;n</FooterLink>
	              </FooterLinkGroup>
	            </div>
	            <div>
	              <FooterTitle className="text-white" title="Informaci&oacute;n" />
	              <FooterLinkGroup col>
	                <FooterLink className="text-neutral-400 hover:text-gray-200" href="https://github.com/Arturo254/InnerTune">Github</FooterLink>
	                <FooterLink className="text-neutral-400 hover:text-gray-200" href="https://raw.githubusercontent.com/Arturo254/InnerTune/master/LICENSE">Licencia</FooterLink>
	              </FooterLinkGroup>
	            </div>
	            <div>
	              <FooterTitle className="text-white" title="Soporte" />
	              <FooterLinkGroup col>
	                <FooterLink className="text-neutral-400 hover:text-gray-200" href="https://github.com/Arturo254/InnerTune?tab=readme-ov-file#-c%C3%B3mo-reconstruir-la-aplicaci%C3%B3n">Contribuir</FooterLink>
	                <FooterLink className="text-neutral-400 hover:text-gray-200" href="https://github.com/Arturo254/InnerTune/issues">Reportar bug</FooterLink>
	              </FooterLinkGroup>
	            </div>
	          </div>
	        </div>
	        <FooterDivider />
	        <div className="w-full sm:flex sm:items-center sm:justify-between">
	          <FooterCopyright className="text-neutral-400 hover:text-gray-200" href="https://github.com/Arturo254/InnerTune" by="InnerTune™" year={year} />
	          <FooterLinkGroup col className="p-1 items-center justify-between">
	                <span className="text-1xl text-neutral-400">Aplicaci&oacute;n actualizada por <a className="font-bold tracking-tight text-gray-300 hover:text-yellow-200" href="https:	//github.com/Arturo254">Arturo254</a></span>
	                <span className="text-1xl text-neutral-400">Sitio mantenido por <a className="font-bold tracking-tight text-gray-300 hover:text-yellow-200" href="https://github.com/ChronoLux616">ChronoLux</a></span>
	              </FooterLinkGroup>
	          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center items-center justify-between">
	            <FooterIcon href="#" icon={BsFacebook} />
	            <FooterIcon href="#" icon={BsInstagram} />
	            <FooterIcon href="#" icon={BsTwitter} />
	            <FooterIcon href="https://github.com/Arturo254/InnerTune" icon={BsGithub} />
	            <FooterIcon href="#" icon={BsDribbble} />
	          </div>
	        </div>
	      </div>
    	</Footer>
    );
};

export default FooterSection;
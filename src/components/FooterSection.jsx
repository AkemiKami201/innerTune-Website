import { Footer, FooterBrand, FooterCopyright, FooterIcon, FooterLink, FooterLinkGroup, FooterTitle } from "flowbite-react";
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";

const FooterSection = () => {
	return (
		<Footer bgDark>
	      <div className="w-full bg-gray-800">
	        <div className="grid w-full grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4">
	          <div>
	            <Footer.Title title="Devs" />
	            <Footer.LinkGroup col>
	              <Footer.Link href="https://github.com/ChronoLux616">ChronoLux</Footer.Link>
	              <Footer.Link href="https://github.com/Arturo254">Arturo254</Footer.Link>
	            </Footer.LinkGroup>
	          </div>
	          <div>
	            <Footer.Title title="Código abierto" />
	            <Footer.LinkGroup col>
	              <Footer.Link href="https://github.com/Arturo254/InnerTune">Repositorio Oficial</Footer.Link>
	            </Footer.LinkGroup>
	          </div>
	          <div>
	            <Footer.Title title="Problemas?" />
	            <Footer.LinkGroup col>
	              <Footer.Link href="https://github.com/Arturo254/InnerTune/issues">Reportar fallos</Footer.Link>
	              <Footer.Link href="https://raw.githubusercontent.com/Arturo254/InnerTune/master/LICENSE">Licencia</Footer.Link>
	            </Footer.LinkGroup>
	          </div>
	          <div>
	            <Footer.Title title="Descargar" />
	            <Footer.LinkGroup col>
	              <Footer.Link href="https://github.com/Arturo254/InnerTune/releases">Descargar ultima version</Footer.Link>
	            </Footer.LinkGroup>
	          </div>
	        </div>
	        <div className="bg-slate-700 text-center px-4 py-6 sm:flex sm:items-center sm:justify-between">
	          <Footer.Copyright href="https://github.com/ChronoLux616" by="ChronoLux™" year={2024} />
	          <FooterBrand className="justify-center p-4"
	            href="https://github.com/Arturo254/InnerTune"
	            src="https://raw.githubusercontent.com/z-huang/InnerTune/dev/app/src/main/res/mipmap-xxxhdpi/ic_launcher_round.webp"
	            alt="innerTube Logo"
	            name="InnerTune"
	          />
	        </div>
	      </div>
	    </Footer>
	);
};

export default FooterSection;
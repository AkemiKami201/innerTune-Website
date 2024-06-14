import { Button, Toast, ToastToggle } from "flowbite-react";
import { IoInformationCircleOutline } from "react-icons/io5";

const AlertUp = () => {
  return (
    <div id="float" className="flex flex-col gap-4 items-center">
      <Toast className="bg-gray-700">
        <div className="flex items-start">
          <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gray-500 text-cyan-900 dark:bg-cyan-200 dark:text-cyan-900">
            <IoInformationCircleOutline className="h-5 w-5 text-yellow-400" />
          </div>
          <div className="ml-3 text-sm font-normal">
            <span className="mb-1 text-sm font-semibold text-gray-300 dark:text-white">Actualizaci&oacute;n disponible</span>
            <div className="mb-2 text-sm font-normal text-gray-400 dark:text-white">Buenas Noticias. Llego la versi&oacute;n <strong>0.6.3</strong> de InnerTune.</div>
          </div>
          <Toast.Toggle className="bg-gray-500 text-gray-100 focus:ring-2" />
        </div>
      </Toast>
    </div>
  );
};

export default AlertUp;
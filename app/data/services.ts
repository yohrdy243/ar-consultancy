import { ReactNode } from "react";
import { BsAirplane, BsCalendar3 } from "react-icons/bs";
import { IconType } from "react-icons/lib";
export type TService = {
    title: string;
    description: string;
    url: string;
    icon?: IconType;
};

export const servicesData: TService[] = [
    {
        title: "Apoyo en Procedimientos de Fiscalización o Verificación",
        description:
            "Este servicio desarrolla una estrategia fiscal con la finalidad de que nuestros clientes puedan afrontar un proceso de verificación o auditoría de la SUNAT con los mayores beneficios, salvaguardando sus derechos establecidos en las normas legales. Incluye el análisis y evaluación previa de la documentación contable y tributaria de nuestros clientes. Asimismo, nuestro equipo de profesionales acompaña permanentemente todo el proceso de fiscalización, evaluación y dando respuesta a los requerimientos del auditor fiscal",
        url: "/servicios/procedimientos-fiscalizacion-verificacion",
    },
    {
        title: "Auditoría Tributaria Preventiva",
        description:
            "Este servicio tiene como finalidad verificar la correcta determinación de los impuestos a los que se encuentran afectas las empresas de forma preventiva partiendo del análisis de las operaciones económicas registradas en la contabilidad, aplicando lo establecido en las normas tributarias vigentes en cada período tributario, de manera que no existan contingencias o reparos frente a un posible proceso de fiscalización de la SUNAT.",
        url: "/servicios/auditoria-tributaria-preventiva",
    },
    {
        title: "Asesoría Tributaria Mensual",
        description:
            "Brindamos servicios de asesoría tributaria de forma ilimitada por vía telefónica, correo electrónico o reuniones presenciales para poder resolver cualquier duda que puedan tener las empresas sobre las operaciones que se llevan a cabo.",
        url: "/servicios/asesoria-tributaria-mensual",
        icon : BsCalendar3
    },
    {
        title: "Recuperación de Drawback y Saldo a favor del Exportador",
        description:
            "Brindamos servicios de asesoría tributaria de forma ilimitada por vía telefónica, correo electrónico o reuniones presenciales para poder resolver cualquier duda que puedan tener las empresas sobre las operaciones que se llevan a cabo.",
        url: "/servicios/recuperacion-drawback-saldo-afavor",
    },
    {
        title: "Asesoría en Importaciones",
        description:
            "Brindamos servicios de asesoría tributaria de forma ilimitada por vía telefónica, correo electrónico o reuniones presenciales para poder resolver cualquier duda que puedan tener las empresas sobre las operaciones que se llevan a cabo.",
        url: "/servicios/importaciones",
        icon: BsAirplane,
    },
];

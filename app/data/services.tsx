import { BsAirplane, BsCalendar3 } from "react-icons/bs";
import { IconType } from "react-icons/lib";
import react, { ReactNode, Fragment } from "react";
export type TService = {
    title: string;
    description: ReactNode;
    path: string;
    icon?: IconType;
};

export const servicesData: TService[] = [
    {
        title: "Apoyo en Procedimientos de Fiscalización o Verificación",
        description: (
            <div className="flex flex-col gap-6">
                <p>
                    En AR Consultoría, entendemos que los procedimientos de
                    fiscalización o verificación pueden ser una situación
                    estresante para tu empresa. Nuestro servicio de Apoyo en
                    Procedimientos de Fiscalización o Verificación está diseñado
                    para brindarte la asistencia y el acompañamiento necesarios
                    durante estos procesos, protegiendo tus intereses y
                    asegurando un resultado favorable.
                </p>
                <p>
                    Este servicio desarrolla una estrategia fiscal con la
                    finalidad de que nuestros clientes puedan afrontar un
                    proceso de verificación o auditoría de la SUNAT con los
                    mayores beneficios, salvaguardando sus derechos establecidos
                    en las normas legales. Incluye el análisis y evaluación
                    previa de la documentación contable y tributaria de nuestros
                    clientes. Asimismo, nuestro equipo de profesionales acompaña
                    permanentemente todo el proceso de fiscalización, evaluación
                    y dando respuesta a los requerimientos del auditor fiscal.
                </p>
                <h2 className="font-bold text-xl">Beneficios destacados</h2>
                <ol className="px-8 flex flex-col gap-4 [&>li>h2]:font-bold [&>li>h2]:text-lg">
                    <li>
                        <h2>Experiencia y conocimientos</h2>
                        <p>
                            Nuestro equipo cuenta con amplia experiencia en
                            tratar con autoridades fiscales y conocimientos
                            profundos de las regulaciones fiscales vigentes.
                            Estamos preparados para brindarte un apoyo sólido y
                            efectivo durante todo el proceso de fiscalización o
                            verificación.
                        </p>
                    </li>
                    <li>
                        <h2>Preparación integral</h2>
                        <p>
                            Antes de que comience el procedimiento de
                            fiscalización, te ayudaremos a prepararte de manera
                            adecuada, revisando y verificando tus registros
                            contables y declaraciones fiscales. Identificaremos
                            posibles áreas de riesgo y te brindaremos
                            orientación para corregirlas y fortalecer tu
                            posición fiscal.
                        </p>
                    </li>
                    <li>
                        <h2>Acompañamiento personalizado</h2>
                        <p>
                            Durante el proceso de fiscalización o verificación,
                            estaremos a tu lado, proporcionándote asesoramiento
                            en tiempo real y guiándote en cada paso. Nos
                            encargaremos de la comunicación con las autoridades
                            fiscales y te representaremos de manera profesional
                            y estratégica.
                        </p>
                    </li>
                    <li>
                        <h2>Defensa de tus derechos</h2>
                        <p>
                            En AR Consultoría nos aseguraremos de que tus
                            derechos como contribuyente sean respetados en todo
                            momento. Nos esforzaremos por garantizar un proceso
                            justo y equitativo, y trabajaremos para resolver
                            cualquier discrepancia o conflicto de la manera más
                            favorable para tu empresa.
                        </p>
                    </li>
                </ol>
                <p>
                    No enfrentes un proceso de fiscalización o verificación
                    solo. Confía en el equipo de AR Consultoría para brindarte
                    el apoyo necesario y proteger tus intereses durante todo el
                    proceso. Reserva nuestro servicio de Apoyo en Procedimientos
                    de Fiscalización o Verificación y ten la tranquilidad de
                    contar con expertos a tu lado.
                </p>
            </div>
        ),
        path: "procedimientos-fiscalizacion-verificacion",
    },
    {
        title: "Auditoría Tributaria Preventiva",
        description: (
            <div className="flex flex-col gap-6">
                <p>
                    En AR Consultoría, entendemos la importancia de mantener tus
                    asuntos fiscales en orden y evitar sorpresas desagradables.
                    Nuestro servicio de Auditoría Tributaria Preventiva está
                    diseñado para ayudar a tu empresa a cumplir con las
                    normativas fiscales vigentes y minimizar el riesgo de
                    contingencias tributarias
                </p>
                <p>
                    Este servicio tiene como finalidad verificar la correcta
                    determinación de los impuestos a los que se encuentran
                    afectas las empresas de forma preventiva partiendo del
                    análisis de las operaciones económicas registradas en la
                    contabilidad, aplicando lo establecido en las normas
                    tributarias vigentes en cada período tributario, de manera
                    que no existan contingencias o reparos frente a un posible
                    proceso de fiscalización de la SUNAT.
                </p>
                <h2 className="font-bold text-xl">Beneficios destacados</h2>
                <ol className="px-8 flex flex-col gap-4 [&>li>h2]:font-bold [&>li>h2]:text-lg">
                    <li>
                        <h2>Cumplimiento fiscal asegurado</h2>
                        <p>
                            Nuestro equipo de expertos realizará una revisión
                            exhaustiva de tus registros contables y
                            declaraciones fiscales para garantizar que cumplas
                            con todas las obligaciones tributarias aplicables.
                            Evita multas y sanciones innecesarias.
                        </p>
                    </li>
                    <li>
                        <h2>Identificación de áreas de mejora</h2>
                        <p>
                            Mediante nuestro análisis detallado, identificaremos
                            posibles áreas en las que puedas optimizar tu
                            estructura fiscal y aprovechar incentivos fiscales
                            disponibles. Obtén un enfoque estratégico para
                            maximizar tu rentabilidad.
                        </p>
                    </li>
                    <li>
                        <h2>Minimiza el riesgo de contingencias</h2>
                        <p>
                            Detectamos posibles riesgos y deficiencias en tu
                            cumplimiento tributario antes de que se conviertan
                            en problemas mayores. Evita enfrentamientos legales
                            y costosos litigios.
                        </p>
                    </li>
                    <li>
                        <h2>Asesoramiento especializado</h2>
                        <p>
                            Nuestro equipo de profesionales altamente
                            capacitados te brindará asesoramiento personalizado
                            en base a las regulaciones tributarias aplicables a
                            tu industria. Estamos aquí para responder a tus
                            preguntas y proporcionarte orientación experta en
                            todo momento.
                        </p>
                    </li>
                </ol>
                <p>
                    Reserva una Auditoría Tributaria Preventiva con AR
                    Consultoría hoy mismo y asegúrate de que tu empresa esté en
                    cumplimiento con las normativas fiscales y aproveche al
                    máximo sus oportunidades de ahorro. Mantén la tranquilidad y
                    el enfoque en el crecimiento de tu negocio mientras nosotros
                    nos ocupamos de los aspectos tributarios.
                </p>
            </div>
        ),

        path: "auditoria-tributaria-preventiva",
    },
    {
        title: "Asesoría Tributaria Mensual",
        description: (
            <div className="flex flex-col gap-6">
                <p>
                    En AR Consultoría, sabemos que la gestión tributaria puede
                    ser complicada y consumir mucho tiempo. Nuestro servicio de
                    Asesoría Tributaria Mensual está diseñado para brindarte el
                    apoyo y la orientación necesarios en materia tributaria,
                    asegurando que tu empresa cumpla con todas las obligaciones
                    fiscales y aproveche al máximo los beneficios fiscales
                    disponibles.
                </p>
                <h2 className="font-bold text-xl">Beneficios destacados</h2>
                <ol className="px-8 flex flex-col gap-4 [&>li>h2]:font-bold [&>li>h2]:text-lg">
                    <li>
                        <h2>Cumplimiento fiscal garantizado</h2>
                        <p>
                            Nuestro equipo de expertos en materia tributaria
                            realizará un seguimiento constante de tus
                            obligaciones fiscales mensuales, asegurándose de que
                            todas las declaraciones y pagos se realicen de
                            manera oportuna y precisa. Evita multas y sanciones
                            innecesarias por incumplimiento fiscal.
                        </p>
                    </li>
                    <li>
                        <h2>Optimización de beneficios fiscales</h2>
                        <p>
                            Analizaremos tu situación fiscal de manera continua,
                            identificando oportunidades para maximizar tus
                            beneficios fiscales y reducir tu carga tributaria.
                            Te brindaremos estrategias personalizadas para
                            aprovechar al máximo las deducciones, créditos y
                            exenciones fiscales disponibles.
                        </p>
                    </li>
                    <li>
                        <h2>Resolución de consultas tributarias</h2>
                        <p>
                            Como parte de nuestra asesoría mensual, estaremos
                            disponibles para responder a todas tus consultas y
                            dudas tributarias en tiempo real. Ya sea sobre
                            interpretación de normativas, deducciones
                            específicas o cualquier otro aspecto tributario,
                            contarás con nuestro soporte experto.
                        </p>
                    </li>
                    <li>
                        <h2>Actualización normativa</h2>
                        <p>
                            Te mantendremos al tanto de los cambios en las leyes
                            y regulaciones tributarias que puedan afectar a tu
                            empresa. Te informaremos sobre las novedades
                            relevantes y te asistiremos en la adaptación a los
                            nuevos requerimientos fiscales.
                        </p>
                    </li>
                    <li>
                        <h2>Monitoreo proactivo</h2>
                        <p>
                            Estaremos pendientes de los posibles cambios en tu
                            actividad empresarial que puedan tener implicaciones
                            fiscales. Te brindaremos recomendaciones anticipadas
                            y ajustes necesarios para asegurar que tu empresa
                            esté siempre en cumplimiento y aprovechando todas
                            las oportunidades fiscales.
                        </p>
                    </li>
                </ol>
                <p>
                    No dejes que los aspectos tributarios te abrumen. Confía en
                    el equipo de AR Consultoría para brindarte una Asesoría
                    Tributaria Mensual integral. Libera tiempo y recursos
                    mientras te beneficias de un enfoque estratégico para
                    optimizar tus impuestos y cumplir con confianza todas tus
                    obligaciones fiscales. Reserva nuestra Asesoría Tributaria
                    Mensual y experimenta la tranquilidad de tener a expertos en
                    tu equipo.
                </p>
            </div>
        ),

        path: "asesoria-tributaria-mensual",
        icon: BsCalendar3,
    },
    {
        title: "Recuperación de Drawback y Saldo a favor del Exportador",
        description: (
            <div className="flex flex-col gap-6">
                <p>
                    En AR Consultoría entendemos que como exportador, es vital
                    aprovechar los beneficios fiscales a los que tienes derecho.
                    Nuestro servicio de Recuperación de Drawback y Saldo a favor
                    del Exportador está diseñado para ayudarte a maximizar tus
                    beneficios y obtener el reembolso adecuado por tus
                    operaciones de exportación.
                </p>
                <h2 className="font-bold text-xl">Beneficios destacados</h2>
                <ol className="px-8 flex flex-col gap-4 [&>li>h2]:font-bold [&>li>h2]:text-lg">
                    <li>
                        <h2>Maximización de beneficios fiscales</h2>
                        <p>
                            Nuestro equipo de expertos se encargará de analizar
                            tus operaciones de exportación y determinar los
                            beneficios fiscales a los que eres elegible,
                            incluyendo el Drawback y el Saldo a favor.
                            Maximizaremos tus recuperaciones y te ayudaremos a
                            obtener el reembolso que te corresponde.
                        </p>
                    </li>
                    <li>
                        <h2>Asesoramiento especializado</h2>
                        <p>
                            Contarás con el respaldo de nuestro equipo de
                            profesionales altamente capacitados en materia de
                            comercio exterior y legislación fiscal. Te
                            brindaremos asesoramiento personalizado y te
                            guiaremos en cada paso del proceso de recuperación,
                            asegurando que cumpla con los requisitos legales y
                            normativos.
                        </p>
                    </li>
                    <li>
                        <h2>Simplificación del proceso</h2>
                        <p>
                            Sabemos que los trámites y procedimientos fiscales
                            pueden ser complejos. Nos encargaremos de todos los
                            aspectos relacionados con la recuperación de
                            beneficios fiscales, desde la recopilación y
                            preparación de la documentación requerida hasta la
                            presentación de las solicitudes ante las autoridades
                            correspondientes.
                        </p>
                    </li>
                    <li>
                        <h2>Maximización de eficiencia</h2>
                        <p>
                            Nuestro enfoque está en agilizar el proceso de
                            recuperación para que puedas obtener los reembolsos
                            de manera oportuna. Utilizamos nuestra experiencia y
                            conocimientos para acelerar los tiempos de respuesta
                            de las autoridades y minimizar cualquier demora en
                            la obtención de tus beneficios fiscales.
                        </p>
                    </li>
                </ol>
                <p>
                    Recupera los beneficios fiscales a los que tienes derecho
                    como exportador con la ayuda de AR Consultoría. Nuestro
                    servicio de Recuperación de Drawback y Saldo a favor del
                    Exportador te brindará el respaldo y la experiencia
                    necesarios para maximizar tus beneficios y simplificar el
                    proceso de recuperación. Reserva nuestra asesoría
                    especializada y obtén el reembolso adecuado por tus
                    operaciones de exportación.
                </p>
            </div>
        ),
        path: "recuperacion-drawback",
    },
    {
        title: "Asesoría en Importaciones",
        description: (
            <div className="flex flex-col gap-6">
                <p>
                    En AR Consultoría, entendemos los desafíos que implica el
                    proceso de importación de bienes y mercancías. Nuestro
                    servicio de Asesoría en Importaciones está diseñado para
                    brindarte el apoyo necesario y el conocimiento experto para
                    simplificar y optimizar tus operaciones de importación.
                </p>
                <h2 className="font-bold text-xl">Beneficios Destacados</h2>
                <ol className="px-8 flex flex-col gap-4 [&>li>h2]:font-bold [&>li>h2]:text-lg">
                    <li>
                        <h2>Cumplimiento normativo</h2>
                        <p>
                            Nuestro equipo de expertos se mantendrá actualizado
                            sobre las leyes y regulaciones de importación en
                            constante evolución. Te asesoraremos sobre los
                            requisitos legales y aduaneros aplicables,
                            asegurando que tus importaciones cumplan con todas
                            las normativas vigentes.
                        </p>
                    </li>
                    <li>
                        <h2>Optimización de costos</h2>
                        <p>
                            Analizaremos tus procesos de importación y te
                            proporcionaremos estrategias para optimizar tus
                            costos. Esto puede incluir la identificación de
                            aranceles y tasas más favorables, el uso de
                            regímenes aduaneros especiales y la minimización de
                            cargos y gastos innecesarios.
                        </p>
                    </li>
                    <li>
                        <h2>Agilización de trámites aduaneros</h2>
                        <p>
                            Te guiaremos a lo largo de todo el proceso de
                            trámites aduaneros, desde la clasificación
                            arancelaria hasta la gestión de documentación y la
                            preparación de despachos aduaneros. Nuestro objetivo
                            es agilizar los trámites y asegurar que tus
                            importaciones se realicen sin contratiempos ni
                            demoras innecesarias.
                        </p>
                    </li>
                    <li>
                        <h2>Gestión de riesgos</h2>
                        <p>
                            Evaluaremos los posibles riesgos asociados con tus
                            importaciones, como los relacionados con la
                            seguridad, la calidad y la procedencia de los
                            productos. Te brindaremos recomendaciones para
                            mitigar esos riesgos y asegurar que tus
                            importaciones sean seguras y confiables.
                        </p>
                    </li>
                </ol>
                <p>
                    Confía en AR Consultoría para obtener la asesoría
                    especializada que necesitas en tus operaciones de
                    importación. Nuestro servicio de Asesoría en Importaciones
                    te ayudará a simplificar los procesos, optimizar costos y
                    cumplir con todos los requisitos legales y aduaneros.
                    Reserva nuestra asesoría y experimenta una importación más
                    eficiente y exitosa.
                </p>
            </div>
        ),
        path: "asesoria-importaciones",
        icon: BsAirplane,
    },
];

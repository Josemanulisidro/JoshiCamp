import Card from "../../Components/Card"
import ConteinerCenter from "../../Components/ConteinerCenter"

import pantalla_1 from "../../../img/pantalla_1.WebP"
import instalacion_1 from "../../../img/instalacion_1.WebP"
import instalacion_3 from "../../../img/instalacion_3.WebP"
import instalacion_4 from "../../../img/instalacion_4.WebP"
import instalacion_5 from "../../../img/instalacion_5.WebP"
import instalacion_7 from "../../../img/instalacion_7.WebP"
import instalacion_9 from "../../../img/instalacion_9.WebP"

import mant_1 from "../../../img/mant_1.WebP"
import mant_2 from "../../../img/mant_2.WebP"
import mant_3 from "../../../img/mant_3.WebP"
import porton_1 from "../../../img/porton_1.mp4"
import porton_3 from "../../../img/porton_3.mp4"

import "./index.css";


const Solutions = () =>{

    return(
        <>
            <div className="container-solution">
                <div className="cont-inicio-solution conteiner-instalacion_7">
                    <img 
                        src={instalacion_7}
                        alt="instlacion_7"
                    />
                </div>
                <div className="cont-inicio-solution cont-solution-titulo"><h1>Instalación profesional y rápida </h1></div>
                <div className="cont-inicio-solution txt-solution"><p>Nuestro equipo se encarga de todo: intalación configuración y soporte para que no te preocupes por nada</p></div>
            </div>

            <Card titulo={"Instalaciones de camaras"}>
                <ConteinerCenter>
                    <article className="container-solutions-article">
                        <img
                            src={pantalla_1}
                            alt="pantalla_1"
                            className="img-soultion h-80 w-100 rounded-sm"
                        />
                        <img
                            src={instalacion_4}
                            alt="instalacion_4"
                            className="img-soultion-inst h-80 w-100 gap-3 rounded-sm"
                        />
                        <img
                            src={instalacion_3}
                            alt="instalacion_3"
                            className="img-soultion-inst h-80 w-100 gap-3 rounded-sm"
                        />
                        <img
                            src={instalacion_1}
                            alt="instalacion_1"
                            className="img-soultion-inst h-80 w-100 rounded-sm"
                        />
                        <img
                            src={instalacion_5}
                            alt="instalacion_5"
                            className="img-soultion-inst h-80 w-100 rounded-sm"
                        />
                    </article>
                </ConteinerCenter>
            </Card>

            <div className="container-solution2">
                <div className="cont-inicio-solution conteiner-instalacion_9">
                <img 
                    src={instalacion_9}
                    alt="instalacion_9"
                />
                </div>
                <div className="cont-inicio-solution cont-solution-titulo2"><h1>Confianza que se ve</h1></div>
                <div className="cont-inicio-solution txt-solution2"><p>Trabajamos con equipos de alta calidad y tecnología confiable para brindarte tranquilidad y respaldo en todo momento</p></div>

                <div className="cont-inicio-solution cont-solution-titulo3"><h1>Vigilancia desde tu celular</h1></div>
                <div className="cont-inicio-solution txt-solution3"><p>Accede a tus cámaradas en tiempo real desde cualquier lugar, recibe notificaciones y revisa grabaciones cuando lo necesites</p></div>

                <div className="cont-inicio-solution cont-solution-titulo4"><h1>Protección incluso en la oscuridad</h1></div>
                <div className="cont-inicio-solution txt-solution4"><p>Gracias a la visión nocturna infrarroja, tus espacios estarán vigilados las 24 horas, del día y de la noche</p></div>

                <div className="cont-inicio-solution cont-solution-titulo5"><h1>Tu seguridad empieza hoy</h1></div>
                <div className="cont-inicio-solution txt-solution5"><p>Contáctanos y recibe una asesoría personalizada sin costo</p></div>

            </div>

            <Card titulo={"Mantenimiento de camaras"}>
                <ConteinerCenter>
                    <article className="container-solutions-article">
                        <img
                            src={mant_1}
                            alt="mant_1"
                            className="h-80 w-100"
                        />
                        <img
                            src={mant_2}
                            alt="mant_2"
                            className="h-80 w-100"
                        />
                        <img
                            src={mant_3}
                            alt="mant_3"
                            className="h-80 w-100"
                        />
                    </article>
                </ConteinerCenter>
            </Card>

            <Card titulo={"Portones electricos"}>
                <ConteinerCenter>
                    <article className="container-solutions-article">
                        <video width="640" height="480" controls>
                            <source src={porton_3} type="video/mp4" />
                        </video>

                        <video width="640" height="480" controls>
                            <source src={porton_1} type="video/mp4" />
                        </video>
                    </article>
                </ConteinerCenter>
            </Card>
        </>
    );
}

export default Solutions 
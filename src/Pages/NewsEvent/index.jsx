
import Card from "../../Components/Card"
import ConteinerCenter from "../../Components/ConteinerCenter"
import "./index.css"

import pantalla_1 from "../../../img/pantalla_1.WebP"

const NewsEvent = () => {
    
    return(
        <>
        <Card titulo={"Instalaciones de camaras"}>
            <ConteinerCenter>
                <img
                    src={pantalla_1}
                    alt="pantalla_1"
                    className="h-80 w-100"
                />
            </ConteinerCenter>
            </Card>
            <Card titulo={"Ofrecemos tecnologia de punta"}>
                <ConteinerCenter>
                    <div className="card-newEvnet">
                        <div className="container-text-new">
                            <p>Cada vez mejoramos nuestra asistencias para ustedes nos pueden contactar desde 
                                watsaap, facebook siguenos y comparte tu experinecia con nosotros.
                            </p>
                        </div>
                        <div className="container-text-new">
                            <p>Y ahora cada vez más cerca de ti mandanos mensaje y nosotros te responderemos a la brevedad.
                                tu seguridad importa no lo dejes para despues.
                            </p>
                        </div>
                    </div>
                </ConteinerCenter>
            </Card>
        </>
    );
} 

export default NewsEvent
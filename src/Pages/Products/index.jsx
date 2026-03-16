
import Card from "../../Components/Card"
import ConteinerCenter from "../../Components/ConteinerCenter"

import "./index.css";

import product_1 from "../../../img/product_1.WebP"
import product_2 from "../../../img/product_2.WebP"
import product_3 from "../../../img/product_3.WebP"
import product_4 from "../../../img/product_4.WebP"
import product_5 from "../../../img/product_5.WebP"
import product_6 from "../../../img/product_6.WebP"
import product_7 from "../../../img/product_7.WebP"
import product_8 from "../../../img/product_8.WebP"
import product_9 from "../../../img/product_9.WebP"
import product_10 from "../../../img/product_10.WebP"
import product_11 from "../../../img/product_11.WebP"

const Products = () =>{
    return(
        <>
            <article className="products-posicion">
                <Card titulo={"Cámera Bullet 5MP Full-color HDCVI"}>
                    <ConteinerCenter>
                        <img
                            src={product_1}
                            alt="product_1"
                            className="h-80 w-100"
                        />
                        <div className="card-descripcion">
                            <p>
                                HAC-HFW2509T-A-LED, Max 25 fps@5MP (16:9 video output), 120 dB true WDR, 3D NR, Imagenes de color 24/7, 
                                Distancia de iluminación 20m, Super adaptado, Micrófono incorporado, Lente fija de 3,6 mm, CVI/CVBS/AHD/TVI switchable
                            </p>
                        </div>
                    </ConteinerCenter>
                </Card>
                <Card titulo={"Cámara Bullet 4K Smart Dual Light HDCVI Fixed-focal"}>
                    <ConteinerCenter>
                        <img
                            src={product_2}
                            alt="product_2"
                            className="h-80 w-100"
                        />
                        <div className="card-descripcion">
                            <p>
                                HAC-HFW1801CM-IL-A, Max. 15 fps@4K.Max. 15 fps@4K., 120 dB true WDR, 3D NR, Smart Dual Light. 
                                ,Distancia de iluminación 20m, Super adaptado,Micrófono incorporado, Lente fija de 3,6 mm, CVI/CVBS/AHD/TVI switchable
                            </p>
                        </div>
                    </ConteinerCenter>
                </Card>
            </article>
            <article className="products-posicion">
                <Card titulo={"Cámara Bullet 5MP HDCVI IR"}>
                    <ConteinerCenter>
                        <img
                            src={product_3}
                            alt="product_3"
                            className="h-80 w-100"
                        />
                        <div className="card-descripcion">
                            <p>
                                HAC-B3A51-Z, Max. 25 fps@5MP (16:9 video output), CVI/CVBS/AHD/TVI switchable, Lente motorizada de 2,7 mm a 12mm,
                                Max. IR length 40 m; Smart IR,  IP67; DC12V
                            </p>
                        </div>
                    </ConteinerCenter>
                </Card>
                <Card titulo={"Camára Bullet 5MP IR HDCVI Fixed-focal"}>
                    <ConteinerCenter>
                        <img
                            src={product_4}
                            alt="product_4"
                            className="h-80 w-100"
                        />
                        <div className="card-descripcion">
                            <p>
                                HAC-B2A51-U, Max 25 fps@5MP (16:9 video output)., Iluminación Smart IR , Distancia de iluminación 30m, Lente fija de 3,6 mm,
                                 CVI/CVBS/AHD/TVI switchable.
                            </p>
                        </div>
                    </ConteinerCenter>
                </Card>
            </article>
            <article className="products-posicion">
                <Card titulo={"Cámara Eyeball 5MP Starlight HDCVI POC IR"}>
                    <ConteinerCenter>
                        <img
                            src={product_5}
                            alt="product_5"
                            className="h-80 w-100"
                        />
                        <div className="card-descripcion">
                            <p>
                                HAC-HDW2501TLM-A-POC, Max 25 fps@5MP (16:9 video output),Starlight, 120 dB true WDR, 3D NR, CVI/CVBS/AHD/TVI switchable
                                    Lente fija de 3,6 mm, Micrófono incorporado, Max. IR length 30 m, Smart IR
                            </p>
                        </div>
                    </ConteinerCenter>
                </Card>
                <Card titulo={"Cámara domo 5MP Starlight HDCVI IR"}>
                    <ConteinerCenter>
                        <img
                            src={product_6}
                            alt="product_6"
                            className="h-80 w-100"
                        />
                        <div className="card-descripcion">
                            <p>
                                HAC-HDBW2501R-Z-POC, Max 25 fps@5MP (16:9 video output), Starlight, 120 dB true WDR, 3D NR, CVI/CVBS/AHD/TVI switchable
                                Lente monotorizada de 2,7 mm a 13,5 mm, Max. IR length 30 m, Smart IR
                            </p>
                        </div>
                    </ConteinerCenter>
                </Card>
            </article>
            <article className="products-posicion">
                <Card titulo={"Cámara PT 2MP Smart Dual Light Active Deterrence Network"}>
                    <ConteinerCenter>
                        <img
                            src={product_7}
                            alt="product_7"
                            className="h-80 w-100"
                        />
                        <div className="card-descripcion">
                            <p>
                                IPC-PT1239H-PV 1/2.8" 2Megapixel CMOS., Max. 25/30 fps@2MP., H.265 Encoding.,Detección de humanos y vehículos, protección perimetral, 
                                Disuación activa, Luz dual inteligente,Comunicacón bidireccional, Controles sensillos desde la app.
                            </p>
                        </div>
                    </ConteinerCenter>
                </Card>
                <Card titulo={"Cámara PTZ SDT4E425-8P-GB-APV1"}>
                    <ConteinerCenter>
                        <img
                            src={product_8}
                            alt="product_8"
                            className="h-80 w-100"
                        />
                        <div className="card-descripcion">
                            <p>
                                SDT4E425-8P-GB-APV1, Canal de descripción general: emite uan imagen de empalme de gran angular de 180°, Detail channel: 1/2.8"4Megapixel STARVIS™ CMOS,
                                Zoom óptico de 25x, Max. 25/30 fps@8M, distancia de IR de hasta 100 m, Seguimeinto automático 3.0, Seguimeinto intelegente, Protección perimetral, Disuación Inteligente, Luz dual inteligente
                            </p>
                        </div>
                    </ConteinerCenter>
                </Card>
            </article>
            <article className="products-posicion">
                <Card titulo={"Cámara mini bala fija 4K"}>
                    <ConteinerCenter>
                        <img
                            src={product_9}
                            alt="product_9"
                            className="h-80 w-100"
                        />
                        <div className="card-descripcion">
                            <p>
                                DS-2CE16U1T-ITF, Cámara bala de 8 MP,Tecnología infrarroja avanzada con una distancia IR de 30 m, Resistente al agua y al polvo (IP67)
                                4 en 1 (4 señales conmutables TVI/AHD/CVI/CVBS), Máxima resolución 3840 (alto) × 2160 (vertical), Lente fija de 2,8 mm, 3,6 mm y 6 mm
                            </p>
                        </div>
                    </ConteinerCenter>
                </Card>
                <Card titulo={"Cámara bala varifocal motorizada 4K"}>
                    <ConteinerCenter>
                        <img
                            src={product_10}
                            alt="product_10"
                            className="h-80 w-100"
                        />
                        <div className="card-descripcion">
                            <p>
                                DS-2CE19U1T-AIT3ZF Cámara bala de 8 MP, La lente enfoca automáticamente al acercar o alejar el zoom., EXIR 2.0: tecnología infrarroja avanzada con una distancia IR de 80 m
                                Resistente al agua y al polvo (IP67), 4 en 1 (4 señales conmutables TVI/AHD/CVI/CVBS), Lente varifocal motorizada de 2,7 mm a 13,5 mm
                            </p>
                        </div>
                    </ConteinerCenter>
                </Card>
            </article>
            <article className="products-posicion">
                <Card titulo={"Cámara de torreta fija 4K"}>
                    <ConteinerCenter>
                        <img
                            src={product_11}
                            alt="product_11"
                            className="h-80 w-100"
                        />
                        <div className="card-descripcion">
                            <p>
                                DS-2CE78U1T-IT3F, Cámara de torreta de 8 MP, EXIR 2.0: tecnología infrarroja avanzada con una distancia IR de 60 m,
                                 Resistente al agua y al polvo (IP67), 4 en 1 (4 señales conmutables TVI/AHD/CVI/CVBS), Lente fija de 2,8 mm, 3,6 mm, 6 mm, 8 mm y 12 mm
                            </p>
                        </div>
                    </ConteinerCenter>
                </Card>
            </article>

        </>
    );
}

export default Products

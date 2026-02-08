
import "./index.css"

const Card = ({titulo, children}) =>{
    return(
    <>
        <div className="flex-column w-full conteiner-card ">
            <div className="flex-column rounded-lg bg-radial from-cyan-100 from -40% to-cyan-200 conteiner-content">
                <div className="w-full titulos rounded-lg bg-radial from-cyan-100 from -40% to-cyan-200 titulo-card"><h1>{titulo}</h1></div>
                {children}
            </div>
        </div>
    </>
    );
}

export default Card;
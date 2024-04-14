import Cabecalho from "./cabecalho/cabecalho";
import Rodape from "./rodape/rodape";


export default function Pagina(props) {
    return (
        <div>
            <Cabecalho/>
            <div className="container">
                {props.children}
            </div>
            <Rodape/>
        </div>
    )
}
import React from "react"
import ReactDOM from "react-dom"
// import Componente1 from "./componentes/Componente1";
// import {CompA as A, CompB as B} from "./componentes/DoisComponentes"
// import MultiElementos from "./componentes/MultiElementos"
// import FamiliaGomes from "./componentes/FamiliaGomes"
import Familia from "./componentes/Familia"
import Nome from "./componentes/Nome"

const element = document.getElementById('root')

ReactDOM.render(
    <React.Fragment>
        {/* <Componente1 nome = 'Alexandre Gomes' endereco = 'Rua Tal' cidade = 'Franca'  soma = {3+4}/>
        <A valor = "Aqui é o Componente A"/>
        <B valor = "Aqui é o Componente B"/> */}
        {/* <MultiElementos/> */}
        <Familia familia= "Família Gomes">
            <Nome nome='Alexandre ' sobrenome='Gomes'/>
            <Nome nome='Joyce ' sobrenome='Gomes'/>
            <Nome nome='Josima ' sobrenome='Gomes'/>
            <Nome nome='Janaina ' sobrenome='Gomes'/>
        </Familia>
        
        <Familia familia="Família Lima">
            <Nome nome="José " sobrenome="Lima"/>
            <Nome nome="João " sobrenome="Lima"/>
            <Nome nome="Rafael " sobrenome="Lima"/>
        </Familia>


    </React.Fragment>
, element
)
import React from "react";
import ReactDOM from "react-dom";
// import Componente1 from "./componentes/Componente1";
// import {CompA as A, CompB as B} from "./componentes/DoisComponentes"
import MultiElementos from "./componentes/MultiElementos"

const element = document.getElementById('root')

ReactDOM.render(
    <React.Fragment>
        {/* <Componente1 nome = 'Alexandre Gomes' endereco = 'Rua Tal' cidade = 'Franca'  soma = {3+4}/>
        <A valor = "Aqui é o Componente A"/>
        <B valor = "Aqui é o Componente B"/> */}
        <MultiElementos/>
    </React.Fragment>
, element
)
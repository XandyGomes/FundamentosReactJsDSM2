import React from "react";

// function funct1() {
//     return <h1>Nosso primeiro Componente</h1>
// }

// export default funct1

    // export default () => 
    // <div>
    //     <h1>Nosso primeiro Componente</h1>
    //     <h1>{(5+6)}</h1>
    // </div>

var vf = true

export default (props) =>
    <div>
        <h1>{props.nome}</h1>
        <h2>{props.endereco}</h2>
        <h3>{props.cidade}</h3>
    
        <p>{Math.random()}</p>
        <p>{2*8}</p>
        <p>{Math.pow(2, 8)}</p>
        <p>Verdadeiro ou falso? {vf ? 'Verdadeiro' : 'Falso'}</p>

        <h1>{props.soma}</h1>
    </div>
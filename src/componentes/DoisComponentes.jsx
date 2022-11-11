import React from "react"

const CompA = (props) => 
    <h1>Sou o primeiro: {props.valor}</h1>

const CompB = (props) =>
    <h1>Sou o segundo: {props.valor}</h1>

export {CompA, CompB}
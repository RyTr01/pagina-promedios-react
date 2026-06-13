import { useState } from "react"

function CalcularPromedio(arrNotas, arrPorcentajes){
    let SumaPorcentajes = 0;
    let promedioponderado=0

    for (let i=0; i<arrPorcentajes.length; i++){
        SumaPorcentajes+= arrPorcentajes[i]
    }
    for (let i=0; i< arrNotas.length; i++){
        if (arrNotas[i] < 1 || arrNotas[i] > 7 || arrNotas[i] == null || isNaN(arrNotas[i])){
            alert('Error: Nota(s) inválida(s).\nNotas válidas: 1-7')
            return
        }
    }
    for (let i=0; i< arrPorcentajes.length; i++){
        if (arrPorcentajes[i] < 0 || arrPorcentajes[i] > 100 || arrPorcentajes[i] == null || isNaN(arrPorcentajes[i])){
            alert('Error: Promedios(s) inválido(s).\nPromedios válidos: 0-100')
            return
        }
    }
    if (SumaPorcentajes != 100){
        alert('La suma de porcentajes debe dar 100.\nSuma actual: ' + SumaPorcentajes)
        return
    }
    
    for (let i=0;i<arrNotas.length;i++){
        promedioponderado += arrNotas[i]*(arrPorcentajes[i]/100)
    }

    return promedioponderado
}
export default CalcularPromedio
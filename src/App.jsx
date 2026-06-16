import { useState } from 'react'
import './App.css'
import Notas from './notas'
import Bienvenida from './bienvenida'
import CalcularPromedio from './calcularpromedio'

function agregarnota(listaNotas, setListaNotas, setListaPorcentajes, listaPorcentajes){
  const copiaN = [...listaNotas];
  copiaN.push(1);
  setListaNotas(copiaN);

  const copiaP = [...listaPorcentajes];
  copiaP.push(0);
  setListaPorcentajes(copiaP);
}

function quitarnota(listaNotas, setListaNotas, setListaPorcentajes, listaPorcentajes){
  if (listaNotas.length <= 1){
    alert('Error: no se puede tener menos de 1 nota.')
  } else {
  const copiaN = [...listaNotas];
  copiaN.pop();
  setListaNotas(copiaN);

  const copiaP = [...listaPorcentajes];
  copiaP.pop();
  setListaPorcentajes(copiaP);
}}

function App() {
  const [listaNotas, setListaNotas] = useState([1,1,1,1])
  const [listaPorcentajes, setListaPorcentajes] = useState([25,25,25,25])
  const [promedio, setPromedio] = useState(null)

  return (
    <>
    <Bienvenida></Bienvenida>
    <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr'}}>
      <h2 style={{gridColumn:'1/2', color:'yellowgreen'}}>Notas (1-7)</h2>
      <h2 style={{gridColumn:'2/3', color: 'yellowgreen'}}>Porcentajes (0-100%)</h2>
    </div>
    <Notas notasArr = {listaNotas} setArr = {setListaNotas} porcentajesArr={listaPorcentajes} setPorArr={setListaPorcentajes}></Notas>
    
    <div style={{padding: '1rem', display: 'grid', gridTemplateColumns: '22.5% 30% 30%'}}>
      <button style={{margin:'1.5rem', gridColumn: '2/3', padding: '0.5rem', borderRadius: '5px'}} onClick={() => {agregarnota(listaNotas, setListaNotas, setListaPorcentajes,listaPorcentajes)}}> Agregar nota</button>
      <button style={{margin:'1.5rem', gridColumn: '3/4', padding: '0.5rem', borderRadius: '5px'}} onClick={() => {quitarnota(listaNotas, setListaNotas, setListaPorcentajes,listaPorcentajes)}}> Quitar nota</button>
    </div>
    <button style={{margin:'1.5rem', padding: '0.5rem', borderRadius: '5px'}} onClick={() => {setPromedio(CalcularPromedio(listaNotas,listaPorcentajes))}}>Calcular Promedio</button>
    
    {
      typeof promedio === "number" && (promedio >= 4
        ? <p style={{color: 'green'}}>Aprobaste: {promedio.toFixed(1)}</p>
        : <p style={{color: 'red'}}>Reprobaste: {promedio.toFixed(1)}</p>
      )
    }
    </>
  )
}

export default App

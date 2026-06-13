function Notas ({notasArr, setArr, porcentajesArr, setPorArr}){
    const CambiarNota = (index,evento) => {
        const valor = parseFloat(evento.target.value);
        const copiaN = [...notasArr];
        copiaN[index] = valor;
        setArr(copiaN);
        console.log(notasArr, porcentajesArr)
    }

    const CambiarPorcentaje = (index,evento) => {
        const valor = parseFloat(evento.target.value);
        const copiaP = [...porcentajesArr];
        copiaP[index] = valor;
        setPorArr(copiaP);
    }
    return(
        <>
    {
    <ul style = {{listStyleType: 'none', width: '100%', alignContent: 'center', alignItems: 'center', display: 'grid', gridTemplateColumns: '1fr 1fr'}}>
        {notasArr.map((nota, index, porcentaje) => (
        <li key={index} style={{gridColumn: '1/3'}}>
            <input style= {{width: '30%', fontSize: '1.5rem', margin: '.5rem', padding: '.5rem', borderRadius: '5px'}} type="number" step="0.1" min = "1" max = "7" value = {nota} onChange={(e) => CambiarNota(index,e)}/>
            <input style= {{width: '30%', fontSize: '1.5rem', margin: '.5rem', padding: '.5rem', borderRadius: '5px'}} type="number" step="0.1" min = "0" max = "100" value = {porcentajesArr[index]} onChange={(e) => CambiarPorcentaje(index,e)}/>%
        </li>
        ))}
    </ul>
    }
    </>
    )
}
export default Notas
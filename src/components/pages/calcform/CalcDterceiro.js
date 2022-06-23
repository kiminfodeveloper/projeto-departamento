// import hooks/styles

import React, { useState } from "react";
import styles from './CalcFolha.module.css'


// hook funcional calculadora 13º
export default function CalcDterceiro() {
    
    // setando hooks
    const [sb, setSb ] = useState()
    const [meses, setMeses ] = useState()
    const [vdec, setVdec ] = useState()
    const [pripar, setPripar ] = useState()
    const [segpar, setSegpar ] = useState()
    
    // atribuindo valores
    const calculardterceiro = () => {
      const vsb = parseFloat(sb)
      const vmeses = parseInt(meses)
      const vvdec = ((vsb / 12) * vmeses)
      const vpripar = ((vvdec / 2))
      const vsegpar = ( vpripar - ((vpripar * 8) / 100))
      
      // declarando casas decimais
      setVdec(vvdec.toFixed(2))
      setPripar(vpripar.toFixed(2))
      setSegpar(vsegpar.toFixed(2))

    }
    // limpando cache de calculos
    const limparcalcdterceiro = () => {
        setVdec("")
        setPripar("")
        setSegpar("")
        
    }
  // display
  return(
    <div>
      <div>
          <h1>13º Salário</h1>
      </div>
        <div className={styles.form_control}>
          <label>Nome completo:</label>
            <input type="text" />
          <label>Informe o SB:</label>
            <input type="text" required value={sb} onChange={e => setSb(e.target.value)}/>
          <label>Informe os meses trabalhados:</label>
            <input type="text" required value={meses} onChange={e => setMeses(e.target.value)}/><br/>
          <button onClick={calculardterceiro}>Calcular</button>
          <button onClick={limparcalcdterceiro}>Reiniciar</button>
        </div>
        <div className={styles.form_control}>
          <label>Valor do 13º:</label>
          <input type="text" value={vdec} />
          <label>1ª Parcela:</label>
          <input type="text" value={pripar} />  
          <label>2ª Parcela:</label>
          <input type="text" value={segpar} />
        </div>
    </div>
  )

}
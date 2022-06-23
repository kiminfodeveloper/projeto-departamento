// import hooks/styles
import React, { useState } from "react";
import styles from './CalcFolha.module.css'

// setando hooks de calculos p/ férias
export default function CalcFerias() {
    
    const [sb, setSb ] = useState()
    const [dias, setDias ] = useState()
    const [adc, setAdc ] = useState()
    const [vp, setVp ] = useState()
    const [terco, setTerco ] = useState()
    const [total, setTotal ] = useState()

    // atribundo valores
    const calcularferias = () => {
      const vsb = parseFloat(sb)
      const vdias = parseInt(dias)
      const vadc = parseFloat(adc)
      const vvp = parseInt(( vsb + vadc) /30 * vdias )
      const vterco = parseInt(vvp / 3)
      const vtotal = ( vvp + vterco )

        // declarando casas decimais
        setVp( vvp.toFixed(2) )
        setTerco( vterco.toFixed(2) )
        setTotal( vtotal.toFixed(2) ) 

    }
    // limpando cache de calculos
    const limparcalcfe = () => {
     
      setSb("")
      setDias("")
      setAdc("")
      setVp("")
      setTerco("")
      setTotal("")
  }
  // display
  return(
    <div>
      <div>
          <h1>Calculo de ferias</h1>
      </div>
        <div className={styles.form_control}>
          <label>Nome completo:</label>
            <input type="text" />
          <label>Informe o SB:</label>
            <input type="text" required value={sb} onChange={e => setSb(e.target.value)}/>
          <label>Qtd de dias a tirar de ferias:</label>
            <input type="text" required value={dias} onChange={e => setDias(e.target.value)}/>
          <label>Informe a média de horas</label>
            <input type="text" required value={adc} onChange={e => setAdc(e.target.value)}/><br/>
          <button onClick={calcularferias}>Calcular</button>
          <button onClick={limparcalcfe}>Reiniciar</button>
        </div>
        <div className={styles.form_control}>
          <label>Valor proporcional de ferias:</label>
          <input type="text" value={vp} />
          <label>Valor do terço de ferias:</label>
          <input type="text" value={terco} />
          <label>Valor total das ferias:</label>
          <input type="text" value={total} />
        </div>
    </div>
  )

}
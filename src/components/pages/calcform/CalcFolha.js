// import hooks/styles
import React, { useState } from "react";
import styles from './CalcFolha.module.css'

// setando hooks de calculos p/ folha de pagamento
export default function CalcFolha() {
    
    const [sb, setSb ] = useState()
    const [vt, setVt ] = useState()
    const [inss, setInss ] = useState()
    const [as, setAs ] = useState()
    const [total, setTotal ] = useState()
    const [liquido, setLiquido] = useState()

    // atribuindo valores
    const calcularfolha = () => {
      const vsb = parseFloat(sb)
      const vvt = parseFloat((vsb * 6) /100)
      const vinss = parseFloat((vsb * 8) /100)
      const vas = parseFloat((vsb *30) /100)
      const vtotaldesc = parseFloat(vinss + vvt + vas)
      const vliquido = parseFloat(vsb - vtotaldesc) 
      
      // declarando casas decimais
      setInss(vinss.toFixed(2))
      setVt(vvt.toFixed(2))
      setAs(vas.toFixed(2))
      setTotal(vtotaldesc.toFixed(2))
      setLiquido(vliquido.toFixed(2))

    }
    // limpando cache de calculos
    const limparcalcfolha = () => {
        setInss("")
        setVt("")
        setAs("")
        setTotal("")
        setLiquido("")
  }
  // display
  return(
    <div>
      <div>
          <h1>Folha de pagamento!</h1>
      </div>
        <div className={styles.form_control}>
          <label>Nome completo:</label>
            <input type="text" />
          <label>Informe o SB:</label>
            <input type="text" required value={sb} onChange={e => setSb(e.target.value)}/><br/>
          <button onClick={calcularfolha}>Calcular</button>
          <button onClick={limparcalcfolha}>Reiniciar</button>
        </div>
        <div className={styles.form_control}>
          <label>Desconto do A.S:</label>
          <input type="text" value={as} />
          <label>Desconto do vale:</label>
          <input type="text" value={vt} />  
          <label>Desconto do INSS:</label>
          <input type="text" value={inss} />  
          <label>Total Desconto:</label>
          <input type="text" value={total} />
          <label>Valor a receber:</label>
          <input type="text" value={liquido}/>
        </div>
    </div>
  )

}
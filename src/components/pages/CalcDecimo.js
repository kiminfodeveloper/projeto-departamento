// import styles/components
import CalcDterceiro from './calcform/CalcDterceiro'
import styles from './Register.module.css'
import LinkButton from '../layouts/LinkButton'

// display
const CalcDecimo = () => {
    return (
      <div className={styles.register_container} >
      <CalcDterceiro />
      <p>Experimente outros!</p>
      <LinkButton to="/calcdec" text="13º" />
      <LinkButton to="/calcfolha" text="Folha de pgto" />
      <LinkButton to="/calc" text="Férias" />
      </div>
    )
  }
  
  export default CalcDecimo
// import style/components
import CalcFerias from './calcform/CalcFerias'
import styles from './Register.module.css'
import LinkButton from '../layouts/LinkButton'

// display
const Calc = () => {
    return (
      <div className={styles.register_container} >
      <CalcFerias />
      <p>Experimente outros!</p>
      <LinkButton to="/calcdec" text="13º" />
      <LinkButton to="/calcfolha" text="Folha de pgto" />
      <LinkButton to="/calc" text="Férias" />
      </div>
    )
  }
  
  export default Calc

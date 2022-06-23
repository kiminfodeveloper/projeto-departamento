// import styles/components
import CalcFolha from './calcform/CalcFolha'
import styles from './Register.module.css'
import LinkButton from '../layouts/LinkButton'

// display
const CalcPgto = () => {
    return (
      <div className={styles.register_container} >
      <CalcFolha />
      <p>Experimente outros!</p>
      <LinkButton to="/calcdec" text="13º" />
      <LinkButton to="/calcfolha" text="Folha de pgto" />
      <LinkButton to="/calc" text="Férias" />
      </div>
    )
  }
  
  export default CalcPgto
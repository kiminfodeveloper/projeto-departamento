// import styles from modules css
import styles from './Inputs.module.css'

// display inputs
const Inputs = ([type, text, name, placeholder, handleOnChange, value]) => {
  return (
    <div className={styles.form_control}>
        <label htmlFor={name}>{text}</label>
        <input 
        type={type} 
        name={name} 
        id={name} 
        placeholder={placeholder} 
        onChange={handleOnChange} 
        value={value} />
    </div>
  )
}

export default Inputs
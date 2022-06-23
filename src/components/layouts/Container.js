// import styles/components
import styles from './Container.module.css'

// display
function Container(props) {
    return (
        
        <div className={`${styles.container} ${styles[props.customClass]}`}>
            {props.children}
        </div>
    )
}

export default Container
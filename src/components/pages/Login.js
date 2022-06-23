// import style/components
import LinkButton from '../layouts/LinkButton'
import LoginForm from '../RegisterForm/LoginForm'
import styles from './Register.module.css'

// display
function Login() {
    return(
        <div className={styles.register_container}>
            <h1>Acesse sua conta!</h1>
            <p>Digite e-mail e senha corretamente</p>
            <LoginForm />

            <p>Conheça a o nosso bônus de Calculos de DP</p>
            <LinkButton to="/" text="Home" />
            <LinkButton to="/calc" text="Bônus" />
        </div>
    ) 
}

export default Login
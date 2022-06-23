// import styles
import styles from './RegisterForm.module.css'

// display
const LoginForm = () => {
  return (
    <div>
      <form className={styles.form_control}>
          <div>
            <label>E-mail:</label><br />
            <input type="e-mail" placeholder="Digite seu email"/>
            </div>
            <div>
            <label>Senha:</label><br />
            <input type="password" placeholder="Digite sua senha"/>
            </div>
            <div>
            <input type="submit" value="Entrar" />
          </div>
      </form>
    </div>
  )
}

export default LoginForm
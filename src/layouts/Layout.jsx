
import styles from './Layout.module.css'

function Layout({children}) {
  return (
    <div>
        <header className={styles.header}>
            <h1>Crypto App</h1>
        </header>
        {children}
        <footer className={styles.footer}>
            <p>Developed by Parinaz </p>
        </footer>
    </div>
  )
}

export default Layout
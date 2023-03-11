import { ReactComponent as Logo } from '../../assets/img/logo-bookmark.svg';
import Botao from './Botao';
import styles from './Navbar.module.scss'


export default function Navbar() {
    return(
        <header className={styles.header}>
            <div className={styles.logo}>
                <Logo />
            </div>

            <div>
                <a  href={'#/'} key={"Features"}>Features</a>
                <a  href={'#/'} key={"Pricing"}>Pricing</a>
                <a  href={'#/'} key={"Contact"}>Contact</a>
                <Botao />
            </div>
        </header>
    );
};
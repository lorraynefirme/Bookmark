import { ReactComponent as Logo } from '../../assets/img/logo-bookmark.svg';
import { ReactComponent as Facebook } from '../../assets/img/icon-facebook.svg';
import { ReactComponent as Twitter } from '../../assets/img/icon-twitter.svg';
import style from './Footer.module.scss'

export default function Footer() {
    return (
        <footer className={style.footer}>
           
                <div className={style.infos}>
                    <ul className={style.flex}>
                        <Logo className={style.logo} />

                        <div className={style.flex}>
                            <li>Características</li>
                            <li>Preços</li>
                            <li>Contato</li>
                        </div>                                           
                    </ul>
                </div>

                <div className={style.social}>
                    <ul className={style.socialItens}>
                        <li><Facebook /></li>
                        <li><Twitter /></li>
                    </ul>
                </div>
                 
        </footer>
    );
}
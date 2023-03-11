import Botao from "../Botao";
import styles from './Header.module.scss'

export default function Header({title, subTitle, src}) {

    return(
        <nav className={styles.inicio}>
            <div className={styles.texto}>
                <h1>{title}</h1>
                <p>{subTitle}</p>
                <div>
                    <Botao colorBtn="hsl(231, 69%, 60%)">Baixe no Chrome</Botao>
                    <Botao colorBtn="hsl(231, 69%, 60%)">Baixe no Firefox</Botao>
                </div>
            </div>
            <div className={styles.imagem} >    
                <img src={src} className={styles.img} alt="IlustrationHero"/>               
                <div className={styles.bgBlue}></div>           
            </div>
        </nav>
    );
};
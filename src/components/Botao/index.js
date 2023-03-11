import styles from './Botao.module.scss'

export default function Botao(props) {

    return(
        <button style={{ backgroundColor: props.colorBtn}} className={styles.botao}>{props.children}</button>
    );

};
import Input from "./Input";
import style from './Contato.module.scss'


export default function Contato() {
    return (
        <section className={style.contato}>
            <p>35,000+ JÁ SE INSCREVEU</p>
            <h2>Fique por dentro do que estamos fazendo</h2>
            <Input />
        </section>
    )
}
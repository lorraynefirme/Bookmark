import style from './Card.module.scss'
import Botao from '../../Botao'

export default function Card({src, title, subTitle, marginTopCard}) {
    let marginNumber = Number(marginTopCard);
 
    return(
        <div className={style.card} style={{ marginTop: marginNumber+"rem"}}>
            <img src={src} alt="Baixar"/>
            <h3>{title}</h3>
            <p className={style.borderDotted}>{subTitle}</p>
            <Botao colorBtn="hsl(231, 69%, 60%)">Adicionar e Instalar Extensão</Botao>
        </div>
    );
}
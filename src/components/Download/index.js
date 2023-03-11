import style from './Download.module.scss'
import chrome from '../../assets/img/logo-chrome.svg'
import firefox from '../../assets/img/logo-firefox.svg'
import opera from '../../assets/img/logo-opera.svg'
import Card from './Card';


export default function Download() {
    return(
        <section className={style.download}>
            <div className={style.desc}>
                <h2>Baixe a extensão</h2>
                <p>Temos mais navegadores em desenvolvimento. Por favor, deixe-nos saber se você tem um favorito que gostaria que priorizássemos.</p>
            </div>

            <div className={style.displayCards}>
                <Card src={chrome} title={"Adicionar ao Chrome"} subTitle={"Versão mínima 62"}/>
                <Card marginTopCard="3" src={firefox} title={"Adicionar ao Firefox"} subTitle={"Versão mínima 55"}/>
                <Card marginTopCard="5" src={opera} title={"Adicionar ao Opera"} subTitle={"Versão mínima 46"}/>
            </div>
        </section>


    );

}
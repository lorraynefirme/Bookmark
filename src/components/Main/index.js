import style from './Main.module.scss'
import Slide from './Slide';
import img1 from '../../assets/img/illustration-features-tab-1.svg'
import img2 from '../../assets/img/illustration-features-tab-2.svg'
import img3 from '../../assets/img/illustration-features-tab-3.svg'

export default function Main() {
    const products = [
        {
            titleSlide: 'Marcação Simples',
            title: 'Marcador em um clique',
            desc: 'Organize seus favoritos como quiser. Nossa interface simples de arrastar e soltar oferece controle total sobre como você gerencia seus sites favoritos.',
            src: img1,
        },
        {
            titleSlide: 'Pesquisa rápida',
            title: 'Pesquisa inteligente',
            desc: 'Nosso poderoso recurso de pesquisa ajudará você a encontrar sites salvos rapidamente. Não há necessidade de vasculhar todos os seus favoritos.',
            src: img2,
        },
        {
            titleSlide: 'Compartilhamento Fácil',
            title: 'Compartilhe seus favoritos',
            desc: 'Compartilhe facilmente seus favoritos e coleções com outras pessoas. Crie um link compartilhável que você pode enviar com o clique de um botão.',
            src: img3,
        }
    ]


    return (
        <section className={style.main}>
            <div className={style.info}>
            <div className={style.text}>          
                <h2>Características</h2>
                <p>Nosso objetivo é tornar mais rápido e fácil para você acessar seus sites favoritos. Seus favoritos são sincronizados entre seus dispositivos para que você possa acessá-los em qualquer lugar.</p>             
            </div>
       
            <Slide products={products}/> 
            
            </div>
        </section>   
    );
}
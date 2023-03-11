import Accordion from './Accordion';
import style from './Faq.module.scss'
import Botao from '../Botao'

export default function Faq() {
    const list = [
        {
            title: 'O que é Marcador?',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. A finibus purus convallis. Ut lectus ipsum, feugiat sed leo eget, tempus semper risus. Donec lacinia nisl dictum, porta ante vitae.',
        },
        {
            title: 'Como posso solicitar um novo navegador?',
            text: 'In iaculis hendrerit nisi nec mattis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse vitae lectus tortor. Suspendisse at ipsum dolor. Nunc eu tortor est. Nullam vel consequat risus. Duis ac mi ut justo congue imperdiet in at dui.',
        },
        {
            title: 'Existe um aplicativo móvel?',
            text: 'Etiam sagittis, nisi ac faucibus consectetur, justo felis scelerisque ante, id lacinia enim odio nec orci. Donec nunc urna, cursus a finibus eget, elementum sed velit. Nunc posuere sit amet augue a efficitur.',
        },
        {
            title: 'E quanto a outros navegadores Chromium?',
            text: 'Nunc eu facilisis urna. Donec eu justo non dolor scelerisque congue. Nulla sit amet ornare dolor. Integer faucibus, turpis at lacinia tincidunt, elit nunc porttitor eros, vel porttitor ligula quam in elit.',
        }, 
    ]

    return (
        <section className={style.faq}>
            <div className={style.desc}>
                <h2>Perguntas Frequentes</h2>
                <p>Aqui estão algumas das nossas perguntas frequentes. Se você tiver outras perguntas que gostaria de ver respondidas, sinta-se à vontade para nos enviar um e-mail.</p>
            </div>
            <Accordion list={list}/>
            <Botao colorBtn="hsl(231, 69%, 60%)">Saiba Mais</Botao>
            
        </section>

    );
}
import style from './Slide.module.scss'
import Botao from '../../Botao'
import React, { useState } from 'react';

export default function Slide(props) {
    const products = props.products;
    const [toggled, setToggled] = useState(products[0].titleSlide);

    return(
        <section className={style.slide}>
            <ul className={style.titlesSlide}>
                {products.map(({titleSlide}) => <li key={titleSlide} onClick={() => setToggled(titleSlide)} className={`${(toggled === titleSlide) && style.activateClassLi}`}>{titleSlide}</li>)}
            </ul>
       
            {products.map(({titleSlide, title, desc, src}) => { return (
                <>
             {toggled === titleSlide ? (   
                <div key={title} className={style.displaySlide}>
                    <div className={style.imagem} >
                        <img src={src} alt="img1" className={style.img}></img>    
                        <div className={style.bgBlue}></div>  
                    </div>

                    <div className={style.descricao}>   
                        <h2>{title}</h2>
                        <p>{desc}</p>
                        <Botao colorBtn="hsl(231, 69%, 60%)">Saiba Mais</Botao>
                    </div>
                </div> ) : null}
                </>
                )}
            )
            }        
        </section>     
    );
};
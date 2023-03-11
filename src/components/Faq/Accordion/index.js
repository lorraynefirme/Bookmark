import style from './Accordion.module.scss';
import React, { useState } from 'react';
import { 
    MdOutlineKeyboardArrowDown,
    MdOutlineKeyboardArrowUp
 } from "react-icons/md";

export default function Accordion({list}) {
    const [toggled, setToggled] = useState();
    const [ativo, setAtivo] = useState(false);

    function click(title){
        setToggled(title);
        setAtivo(!ativo);
    }

    return (
        <ul className={style.accordion}>
            
            {list.map(item =>
                <li key={item.title} className={style.lista} onClick={() => click(item.title)}>        
            {(ativo && (toggled === item.title)) ? (<span className={style.ativoSpan}><h4>{item.title} </h4><MdOutlineKeyboardArrowUp className={style.iconArrow} /></span>) : (<span>{item.title} < MdOutlineKeyboardArrowDown className={style.iconArrow}/></span>) }
            { ativo &&  ( toggled === item.title ? (<p className={style.ativo}>{item.text}</p>) : null )}
            
            </li>
            )}

        </ul>

    );

}
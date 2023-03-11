import { useForm } from "react-hook-form";
import Botao from "../../Botao";
import style from './Input.module.scss'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object({
    email: yup.string().email("Digite um e-mail válido").required("O e-mail é obrigatório"),
    //age: yup.number().positive().integer().required(),
  }).required();


export default function Input() {
    const { register, reset, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
      });

    function onSubmit(userData) {
      reset();
    }

    return (
        <form className={style.form} onSubmit={handleSubmit(onSubmit)}>    
                <div className={style.email}>
                    <input placeholder="Digite seu e-mail" type="text" {...register("email", { required: true })}/>
                    { errors.email &&
                    <span>{errors.email?.message}</span> }
                </div>
                
                <Botao className={style.btn} colorBtn="hsl(0, 94%, 66%)" type='sumbit'>Cadastrar</Botao>
        </form>
      

    );
};
import Botao from '../botao/index';
import Relogio from './Relogio';
import style from '../Cronometro/Relogio/cronometro.module.scss';


export default function Cronometro() {
    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
            <div className={style.relogioWrapper}>
                <Relogio />
            <Botao>
                Começar!
            </Botao>
            </div>
        </div>
    )
}
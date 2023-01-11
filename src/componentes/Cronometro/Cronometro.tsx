import React, {useEffect, useState} from 'react';
import { tempoParaSegundos } from '../../common/utils/conversor';
import { ITarefa } from '../../interface/Tarefa'
import Botao from '../Botao/Botao'
import CronometroStyle from './CronometroStyle.module.scss'
import Relogio from './Relogio/Relogio'

interface CronometroProps{
    selecionado: ITarefa | undefined
    finalizarRatefa: () => void
}

export default function Cronometro({selecionado, finalizarRatefa}: CronometroProps){
    const [tempo, setTempo] = useState<number>()
    useEffect(()=>{
        if(selecionado?.tempo){
            setTempo(tempoParaSegundos(selecionado.tempo))
        }
    }, [selecionado])

    const regressiva = (contador : number = 0) =>{
        setTimeout(()=>{
            if(contador > 0){
                setTempo(contador - 1)
                return regressiva(contador - 1)
            }
            finalizarRatefa()
        }, 1000)
    }

    return(
        <div className={CronometroStyle.cronometro}>
            <p className={CronometroStyle.titulo}>Escolha um card para começar</p>
            <div className={CronometroStyle.relogioWrapper}>
                <Relogio tempo={tempo}/>
            </div>
            <Botao onClick={()=> regressiva(tempo)}>Iniciar</Botao>
        </div>
    )
}
import './formulario.css'
import logo from './assets/logo.png'
import { useState } from 'react'

export function Formulario(){

    interface InforProps{
        title:string;
        gasolina: string | number
        alcool: string | number
    }

    const [gasolina, setGasolina] = useState(0)
    const [alcool, setAlcool] = useState(0)
    const [info, setInfo] = useState<InforProps>()

function calcularPreco(){
    const calculo = (alcool / gasolina)
    console.log(calculo)
    if(calculo <= 0.7){
    setInfo({
        title: 'Compensa usar Alcool',
        gasolina: formatarValor(gasolina),
        alcool: formatarValor(alcool)
    })
    }else{
        setInfo({
            title: 'Compensa usar Gasolina',
            gasolina: formatarValor(gasolina),
            alcool: formatarValor(alcool)
        })
    }
}

function formatarValor(valor: number){
    const valorFormatado = valor.toLocaleString('pt-br', {
        style: 'currency',
        currency: 'BRL'

    })
    return valorFormatado
}

    return(
        <div className="container">
            <img src={logo} alt='Imagem bomba de gasolina'/>
            <h2>Qual a melhor opção?</h2>
        <div className='inputs'>
            <label>Álcool (preço por litro)</label>
            <input value={alcool} placeholder='Digite o preço' required onChange={(element) => setAlcool(Number(element.target.value))}/>
            <label>Gasolina (preço por litro)</label>
            <input value={gasolina} placeholder='Digite o preço' required onChange={(element) => setGasolina(Number(element.target.value))}/>
            <button onClick={calcularPreco}>Calcular</button>
        </div>
        { info && Object.keys(info).length > 0 && (
            <section className='resultado'>
                <h2>{info.title}</h2>

                <span>Alcool {info.alcool}</span>
                <span>Gasolina {info.gasolina}</span>
            </section>
        )}
        </div>
    )
}
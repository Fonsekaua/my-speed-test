'use client'
import { useState } from "react"

const ContadorHistorico = () => {
    const [contador,setContador] = useState(0);
    const [historico,setHistorico] = useState([])
    const incrementar = () => {
        setContador(contador + 1)
        setHistorico(prev => [...prev,{status:"incrementado",valor:contador + 1}])
    }
    const decrementar = () => {
        if(contador>0){
            setContador(contador - 1)
             setHistorico(prev => [...prev,{status:"decrementado",valor:contador - 1}])
        }
    }

    const zerar = () => {
        setContador(0)
         setHistorico(prev => [...prev,{status:"zerado",valor:0}])
    }
    return (
        <div className={`w-screen h-screen bg-zinc-900 text-white flex items-center justify-center flex-col relative`}>
            <div className="absolute top-10 right-10 p-2">
                <p>Historico</p>
                {
                    historico.length>0?(
                        <ul className="overflow-y-scroll h-96 scrollbar-none flex flex-col-reverse items-start justify-start">
                            {
                                historico.map((li,index) => (
                                    <li key={index}>
                                        {li.status} - {li.valor}
                                    </li>
                                ))
                            }
                        </ul>
                    ): (
                        <p>Nada feito ainda</p>
                    )
                }
            </div>
            <span>
                {contador}
            </span>
            <div className="flex gap-1 *:bg-sky-500 *:p-2">
                <button onClick={incrementar}>
                    incrementar
                </button>
                <button onClick={decrementar}>
                    decrementar
                </button>
            </div>
            <button className="p-2 bg-emerald-500" onClick={zerar}>
                zerar
            </button>
        </div>
    )
}

export default ContadorHistorico
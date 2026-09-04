'use client'
import { useState } from "react"

const ContadorHistorico = () => {
    const [contador,setContador] = useState(0);
    const incrementar = () => {
        setContador(contador + 1)
    }
    const decrementar = () => {
        if(contador>=0){
            setContador(contador - 1)
        }
    }

    const zerar = () => {
        setContador(0)
    }
    return (
        <div className={`w-screen h-screen bg-zinc-900 text-white flex items-center justify-center flex-col`}>
            <span>
                {contador}
            </span>
            <div className="flex gap-1 *:bg-sky-500 *:p-2">
                <button>
                    incrementar
                </button>
                <button>
                    decrementar
                </button>
            </div>
            <button className="p-2 bg-emerald-500">
                zerar
            </button>
        </div>
    )
}

export default ContadorHistorico
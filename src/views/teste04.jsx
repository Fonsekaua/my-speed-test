'use client'
import { useState } from "react"

const BuscarCEP = () => {
    const [input,setInput] = useState("")
    return (
        <div className="w-screen h-screen bg-zinc-900 text-white">
           <div>
             <input type="text" placeholder="Digite seu cep" />
            <button>
                Buscar
            </button>
           </div>
        </div>
    )
}

export default BuscarCEP
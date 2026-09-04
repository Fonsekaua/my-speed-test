'use client'

import { useEffect, useState } from "react"

const Adivinhe = () => {
    const [random, setRandom] = useState(null);
    const [renderizar, setRenderizar] = useState(false)
    const [input, setInput] = useState('')
    const [resposta, setResposta] = useState('')
    useEffect(() => {
        const effect = () => {
            const num = Math.floor(Math.random() * 100);
            setRandom(num)

            setInput('')
            setResposta("")
        }
        effect()

    }, [renderizar])
    const verificar = () => {
       if(Number(input) == random) {
        setResposta("acertou")
       }else if(Number(input) > random ){
        setResposta(`${input} é MAIOR que numero aleatorio`)
       }
       else if(Number(input) < random ){
        setResposta(`${input} é MENOR que numero aleatorio`)
       }
       
    }
    return (
        <div className="w-screen h-screen bg-zinc-800 text-white ">
        
            <input type="text" placeholder="Digite numero 1 a 100" value={input} onChange={(e) => setInput(e.target.value)} />
            <button onClick={verificar}>
                Buscar
            </button>
            <p>{resposta}</p>
            <button onClick={() => setRenderizar(!renderizar)}>
                resetar
            </button>
        </div>
    )
}

export default Adivinhe
'use client'
import { useState } from "react"

const TrocarTema = () => {
    const [tema,definirTema] = useState(false)

    return (
        <div className={`w-screen h-screen ${tema?"claro":"escuro"}`} >
            <button className="bg-mist-500 p-1" onClick={() => definirTema(prev => !prev)}>
                Tema atual - {tema?"claro":'escuro'}
            </button>

        </div>
    )
}

export default TrocarTema;
'use client'
import { useEffect, useState } from "react";

const GaleriaImagens = () => {
    const [imagens,setImagens] = useState([])
    useEffect(() => {
        const inserirImagens = () => {
            let list = []
            for(let i = 1; i <= 6;i++) {
                list.push(`img0${i}.jpg`)
            }

            setImagens(list)
        }
        inserirImagens()
    },[])
    return (
        <div className="bg-zinc-800 w-screen h-screen flex items-center justify-center p-10 flex-wrap">
            {
                imagens.map((img,index) => (
                    <div key={index}>
                        <img  className="w-56 h-56" src={`/${img}`} alt="" />
                    </div>
                ))
            }
        </div>
    )
}

export default GaleriaImagens;
'use client'
import { useEffect, useState } from "react";

const GaleriaImagens = () => {
    const [imagens,setImagens] = useState([])
    const [modalImg,setModalImg] = useState('')
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
    
    const handleClick = (img) => {
        setModalImg(img)
    }
    return (
        <div className="bg-zinc-800 w-screen h-screen flex items-center justify-center p-10 flex-wrap">
            {
                modalImg.length > 0 && (
                    <div className="fixed z-10 w-screen h-screen bg-zinc-900/60 flex items-center justify-center" onClick={() => setModalImg("")}>
                        <div className={`bg-zinc-600 w-[500px] h-[500px] flex flex-col justify-between aparecer`}>
                            <button className="bg-sky-500 p-2" onClick={() => setModalImg('')}>
                                fechar
                            </button>
                            <img className="w-full h-[450px]" src={modalImg} alt="" />
                        </div>
                    </div>
                )
            }
            {
                imagens.map((img,index) => (
                    <div key={index} onClick={() => handleClick(img)}>
                        <img  className="w-56 h-56" src={`/${img}`} alt="" />
                    </div>
                ))
            }
        </div>
    )
}

export default GaleriaImagens;
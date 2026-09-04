'use client'
import { useState } from "react"

const BuscarCEP = () => {
    const [input, setInput] = useState("")
    const [dados, setDados] = useState({})
    const [erro, setErro] = useState("")
    const [consulta,setConsulta] = useState('')
    const MeuCep = async () => {
       
        if (input.length != 8) {
            setErro("Cep deve ter 8 caracteres")
        }
        else if (isNaN(Number(input))) {
            setErro("CEP so pode possuir numeros")
        }
        else {
            try {
                setErro("")
                setDados({})
                const resposta = await fetch(`https://viacep.com.br/ws/${input}/json/`)
                const data = await resposta.json()
                setConsulta(true)
                setConsulta("Consultando...")
                setTimeout(() => {
                    if(data.cep) {
                    setConsulta("Encontrado!!")
                    setDados(data)
                    }else {
                    setConsulta("Não Encontrado!!")

                    }
                }, 1000);

                setInput("")
            } catch (err) {
                 
                setErro("Não foi possivel encontrar seu cep")
            }
        }

    }
    return (
        <div className="w-screen h-screen bg-zinc-900 text-white">
            <div>
                
                <input type="text" placeholder="Digite seu cep" value={input} onChange={(e) => setInput(e.target.value)} />
                <button onClick={MeuCep}>
                    Buscar
                </button>
            </div>
            {
                consulta && <p>{consulta}</p>
            }
            {
                erro ? (
                    <p>Erro: {erro}</p>
                ) : (
                    <ul>
                        <li>{dados.cep}</li>
                        <li>{dados.complemento}</li>
                        <li>{dados.bairro}</li>
                        <li>{dados.estado}</li>
                        <li>{dados.uf}</li>
                        <li>{dados.ddd}</li>

                    </ul>
                    )
                
            }
        </div>
    )
}

export default BuscarCEP
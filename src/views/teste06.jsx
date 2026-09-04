'use client'
import { useEffect, useState } from "react";

const Gastos = () => {
    const [descricao,setDescricao] = useState("")
    const [valor,setValor] = useState(0)
    const [categoria,setCategoria] = useState("")
    const [gastosTotal,setGastosTotal] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault()
        const lista = gastosTotal
        lista.push({id:gastosTotal.length,descricao: descricao,valor: valor,categoria: categoria})
        localStorage.setItem("gastos",JSON.stringify(lista))
        setGastosTotal(lista)

        setCategoria('')
        setDescricao("")
        setValor("")
    }
    const deletar = (id) => {
        const lista = gastosTotal.filter(gasto => gasto.id != id)
        setGastosTotal(lista)
         localStorage.setItem("gastos",JSON.stringify(lista))
    }
    useEffect(() => {
        const pegar = () => {
            const lista = JSON.parse(localStorage.getItem("gastos"));
            if(!lista) return;
            
            setGastosTotal(lista)
        }
        pegar()
    },[])
    return ( 
        <div>
            <form onSubmit={handleSubmit}>
                 <input type="text" placeholder="Descricao do gasto" required  onChange={(e) => setDescricao(e.target.value)} value={descricao}/>
            <input type="number" placeholder="valor do gasto em R$" min={1} onChange={(e) => setValor(e.target.value)} value={valor}/>
            {categoria}
            <select name="" id="" onChange={(e) => setCategoria(e.target.value)} value={categoria} required>
                <option value="">escolha categoria de gasto</option>
                <option value="alimentacao">alimentação</option>
                <option value="Transporte">Transporte</option>
                <option value="lazes">lazes</option>
                <option value="contas">contas</option>
                <option value="Outros">Outros</option>
            </select>
            <button>
                salvar
            </button>
            </form>
            {
                gastosTotal.length > 0 ? (
                    gastosTotal.map((item,i) => (
                        <ul key={i}>
                            <li>{item.id}</li>
                            <li>{item.descricao}</li>
                            <li>{item.valor}R$</li>
                            <li>{item.categoria}</li>
                            <button className="bg-red-500 p-2" onClick={() => deletar(item.id)}>
                                deletar
                            </button>
                        </ul>
                    ))
                ) : (
                    <p>nenhum gasto no sistema</p>
                )
            }
        </div>
    )
}

export default Gastos;
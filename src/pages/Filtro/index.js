import React, { useState, useEffect } from 'react'
import trilhas from '../../services/dados'
import Menu from '../../components/Menu'
import Footer from '../../components/Footer'

import './styles.css'

const Filtro = () => {
    const [busca, setBusca] = useState('')
    const [filtroTrilhas, setFiltroTrilhas] = useState([])

    useEffect(() => {
        setFiltroTrilhas(
            trilhas.filter(trilha => {
                return trilha.nome.toLowerCase().includes(busca.toLowerCase())
            })
        )
    }, [busca])

    return (
        <>
            <Menu />
            <input placeholder="Digite uma trilha" onChange={e => { setBusca(e.target.value) }} />
            <ul className="roteiros">
                {filtroTrilhas.map(trilha => {
                    return<li key={trilha.id}>
                        <h3>{trilha.nome}</h3>
                        <p>Onde: {trilha.local}</p>
                        <p>Anda quanto:   {trilha.km}</p>
                        <img className="foto"src={trilha.foto} alt="Foto da trilha" />
                        </li>
                    
                })}
            </ul>
            <Footer />
        </>
    )
}

export default Filtro

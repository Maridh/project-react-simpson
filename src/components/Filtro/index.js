import React, {useState, useEffect} from 'react'
import Menu from '../Menu'
import dados from '../../services/dados'

export default function Filtro (){
    const [personagem, setPersonagem] = useState(dados)
    const [clique, setClique] = useState(()=>{})
    
    useEffect(()=>{
        // const pegaDados = async ()=> {
        //     const resposta = await Axios.get('https://simpsons-quotes-api.herokuapp.com/quotes')
        //     const dados = await resposta.data
        //     setPersonagem(dados)
        // }
        // pegaDados()
    console.log(personagem)
    },[clique])

    function ligaClique(){
        // setClique(personagem)
    }

    return (
        <>
            <Menu />
            <div className="main-simpson">
                {personagem.map(perso => {
                    return(
                        <div className="card">
                            <p>{perso.character}</p>
                            <img src={perso.image} alt="personagem simpson"/>
                        </div>
                        
                    )
                })}
                <button onClick={ligaClique}>Clique para trocar o personagem</button>
            </div>
        </>
    )
}



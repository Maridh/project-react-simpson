import React from 'react'
import Img from "../../assets/imagem.svg"
import "./styles.css"

const Banner = () => {
    return (
        <div className="main">
            <div>
                <h1>Meu super site</h1>
                <p>Site feito em React e Axios para treinar.</p>
            </div>
            <img src={Img} alt="Ilustração com logo do React" />

        </div>
    )

}

export default Banner

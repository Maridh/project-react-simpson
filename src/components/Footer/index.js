import React from 'react'
import Insta from '../../assets/instagram.png'
import Linkedin from '../../assets/linkedin.png'
import Github from '../../assets/github.png'

import './styles.css'


const Footer = () => {
    return (
        <div>
            <ul className="footer">
                <li>
                    <a target="_blank"
                        rel="noreferrer" className="midias" href="https://www.instagram.com/marianasherreros/" >
                        <img src={Insta} alt="Logo Instagram" />
                    </a>
                </li>

                <li>
                    <a a target="_blank"
                        rel="noreferrer" className="midias" href="https://www.linkedin.com/in/mariana-herreros/">
                        <img src={Linkedin} alt="Logo Linkedin" />
                    </a>
                </li>
                <li>
                    <a a target="_blank"
                        rel="noreferrer" className="midias" href="https://github.com/Maridh">
                        <img src={Github} alt="Logo Github" />
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Footer
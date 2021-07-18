//css
import './style.css'

//icons
import github from '../../assets/icons/github.svg'
import linkedin from '../../assets/icons/linkedin.svg'
import instagram from '../../assets/icons/instagram.svg'


//banners

import { FormEvent } from 'react'
import { useState } from 'react'


export function Footer () {
    
    const [email, setEmail]=useState ("")
    function saveLocalstorage (e:FormEvent) {
        e.preventDefault()
        localStorage.setItem("email", email) 
    }

    
    
    return (

        <footer>
            
          
            <div className="global-container">
                <section className="newsletter">

                    <div className="label">
                        <p className="primeiracompra">Ganhe R$50 na primeira compra</p>
                        <p className="acimade400">Válido apenas para compras acima de R$400</p>
                    </div>

                    <form onSubmit={saveLocalstorage}>
                        
                        <input onChange={e => {setEmail(e.target.value)}} type="email" id="email" placeholder="Digite seu e-mail"/>
                        <button type="submit" className="input-button">cadastrar</button>

                    </form>
                </section>
            </div>


            <section className="author">
                <div className="global-container">

                    <main>

                        <p>Desenvolvido por <strong> Rita Brilhante</strong></p>
                
                
                        <div className="social">
                            <a href="https://www.instagram.com/rtcstr/"><img src={instagram} alt="instagram"/></a>
                            <a href="https://github.com/rtcstr"><img src={github} alt="GitHub"/></a>
                            <a href="https://www.linkedin.com/in/rtcstr/"><img src={linkedin} alt="Linkedin"/></a>
                        </div>

                    </main>
                </div>

            </section>
        </footer>

        
    );


}
//css
import './style.css'

//icons
import github from '../../assets/icons/github.svg'
import linkedin from '../../assets/icons/linkedin.svg'
import facebook from '../../assets/icons/facebook.svg'
import search from '../../assets/icons/search.svg'
import cart from '../../assets/icons/cart.svg'
import instagram from '../../assets/icons/instagram.svg'
import menu from '../../assets/icons/menu.svg'

//products
import blusaazul from '../../assets/products/blusaazul.png'
import blusacinza from '../../assets/products/blusacinza.png'
import blusapreta from '../../assets/products/blusapreta.png'
import calcabasica from '../../assets/products/calcabasica.png'
import calcapolar from '../../assets/products/calcapolar.png'
import calcasdmn from '../../assets/products/calcasdmn.png'

//banners
import colecaofem from '../../assets/banners/colecaofem.png'
import colecaomasc from '../../assets/banners/colecaomasc.png'
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

            <section className="author">
                <p>Desenvolvido por Rita Brilhante</p>
                
                <div className="social">
                    <a href="https://www.instagram.com/rtcstr/"><img src={instagram}/></a>
                    <a href="https://github.com/rtcstr"><img src={github}/></a>
                    <a href="https://www.linkedin.com/in/rtcstr/"><img src={linkedin}/></a>
                </div>

            </section>
        </footer>

        
    );


}
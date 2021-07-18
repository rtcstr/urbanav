//css
import './style.css'

//logo
import logo from '../../assets/logo.svg'

//banners
import homebanner from '../../assets/banners/homebanner.png'
import banneradidas from '../../assets/banners/banneradidas.png'
import bannervans from '../../assets/banners/bannervans.png'
import bannerskate from '../../assets/banners/bannerskate.png'
import bannerconverse from '../../assets/banners/bannerconverse.png'
import bannerpuma from '../../assets/banners/bannerpuma.png'
import colecaofem from '../../assets/banners/colecaofem.png'
import colecaomasc from '../../assets/banners/colecaomas.png'

//icons
import github from '../../assets/icons/github.svg'
import linkedin from '../../assets/icons/linkedin.svg'
import facebook from '../../assets/icons/facebook.svg'
import search from '../../assets/icons/search.svg'
import cart from '../../assets/icons/cart.svg'
import instagram from '../../assets/icons/instagram.svg'
import menu from '../../assets/icons/menu.svg'
import seta from '../../assets/icons/seta.svg'


export function Gridbanners () {
    return (

       <section className="grid">
           <a className="skate">
               <img src={bannerskate} alt="Seleção Skate"/>
               <p>Toda a linha Skate com até 40% OFF</p>
               
               Comprar 
               
            </a>


           <a className="vans">
               <img src={bannervans} alt=""/>
               <p>Toda a linha Vans com até 70% OFF</p>
               
               Comprar
               
                
            </a>


           <a className="adidas">
               <img src={banneradidas} alt=""/>
               <p>Toda a linha Adidas com até 40% OFF</p>
               
               
               Comprar
            </a>

           <a className="converse">
               <img src={bannerconverse} alt=""/>
               <p>Linha Converse com até 90% OFF</p>
               
               
               Comprar
            </a>

           <a className="puma">
               <img src={bannerpuma} alt=""/>
               <p>Toda linha Puma com até 60% OFF</p>
               
               Comprar 
               
            </a> 

       </section>

    );


}
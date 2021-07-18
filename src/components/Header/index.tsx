//css
import './style.css'

//logo
import logo from '../../assets/logo.svg'

//banners
import homebanner from '../../assets/banners/homebanner.png'
import banneradidas from '../../assets/banners/banneradidas.png'
import bannervans from '../../assets/banners/bannervans.png'
import bannerskate from '../../assets/banners/bannerskate.png'
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


export function Header () {
    return (

       <header>
           <div>
                <p> promoção válida até 01/08/2021</p>
                <p>capitais e regiões metropolitanas frete grátis acima de R$400</p>
                
           </div>

           <nav>
               
               <img height="38px" width="154px" src={logo}/>
               
               <div>
                   <ul>
                       <li className="home">home</li>
                       <li>catálogo</li>
                       <li>ofertas</li>
                       <li>suporte</li>
                   </ul>
               </div> 

               <div className="actions">
                   <img src={search}/>
                   <img src= {cart}/>
               </div>               
           </nav>
            
        </header>


    );


}
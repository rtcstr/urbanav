//css
import './style.css'

//logo
import logo from '../../assets/logo.svg'

//icons

import search from '../../assets/icons/search.svg'
import cart from '../../assets/icons/cart.svg'


export function Header () {
    return (

       <>
       <header>
           <div>
                <p> promoção válida até 01/08/2021</p>
                <p>capitais e regiões metropolitanas frete grátis acima de R$400</p>
                
           </div>

           <nav>
               
               <img height="38px" width="154px" src={logo} alt="Logo UrbaNav"/>
               
               <div>
                   <ul>
                       <li className="home">home</li>
                       <li>catálogo</li>
                       <li>ofertas</li>
                       <li>suporte</li>
                   </ul>
               </div> 

               <div className="actions">
                    
                
                <form className="search">
                    <input type="search" id="search" placeholder="O que você procura?"/>
                    <button className="searchbutton"><img src={search} alt="pesquisar"/></button>
                    </form>

                    <img src= {cart} alt="carrinho"/>
               </div>               
           </nav>
            
        </header>

        <div className="space"></div>

        </>

    );


}
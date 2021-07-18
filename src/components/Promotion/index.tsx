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

export function Promotion () {
    return (

       <section>
       <a href='https://br.freepik.com/psd/bandeira'><img  height="456px" width="100%" src={homebanner} alt="Big Sale até 90% OFF nos produtos selecionados"/></a>
    
        
        
       
        <div className="descontos">
            <div>ATÉ 40%OFF</div>
            <div>ATÉ 60%OFF</div>
            <div>ATÉ 80%OFF</div>
            <div>ATÉ 90%OFF</div>
        </div>


         
       </section>

    );


}
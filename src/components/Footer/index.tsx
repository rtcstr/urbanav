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





export function Footer () {
    return (

        <section className="newsletter">
            <div className="label">
            <p className="primeiracompra">Ganhe R$50 na primeira compra</p>
            <p className="acimade400">Válido apenas para compras acima de R$400</p>
            </div>

            <form>
                <input type="email"/>
            </form>





        </section>
    );


}
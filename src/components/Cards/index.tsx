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





export function Cards () {
    return (

      <section className="productcard">
          <article>
          <h3>seleção inverno</h3>

            <div className="container">
                    <div className="card">
                        
                        <img height="336px" width="292px" src={blusacinza}/>

                        <p className="nomeproduto">Moletom Básico Cinza</p>
                        <p className="price">R$ 159,90</p>

                        <button>comprar</button>

                    </div>

                    <div className="card">
                        
                        <img height="336px" width="292px" src={blusapreta}/>

                        <p className="nomeproduto">Moletom Básico Preto</p>
                        <p className="price">R$ 159,90</p>

                        <button>comprar</button>

                    </div>

                    <div className="card">
                        
                        <img height="336px" width="292px" src={blusaazul}/>

                        <p className="nomeproduto">Moletom Básico Azul</p>
                        <p className="price">R$ 159,90</p>

                        <button>comprar</button>

                    </div>        
          </div>

          <section className="midbanners">
             <div className="fem">
                 
                 <p>coleção feminina</p>
             
             <button className="ghosthbutton">ver mais</button>
             </div>

             <div className="mas">
                 
                 <p>coleção masculina</p>
             
             <button className="ghosthbutton">ver mais</button>
             </div>    
        </section>

        <div className="container">
                    <div className="card">
                        
                        <img height="336px" width="292px" src={calcabasica}/>

                        <p className="nomeproduto">Calça Moletom Básica</p>
                        <p className="price">R$89,90</p>

                        <button>comprar</button>

                    </div>

                    <div className="card">
                        
                        <img height="336px" width="292px" src={calcapolar}/>

                        <p className="nomeproduto">Calça Polar Nike</p>
                        <p className="price">R$ 259,90</p>

                        <button>comprar</button>

                    </div>

                    <div className="card">
                        
                        <img height="336px" width="292px" src={calcasdmn}/>

                        <p className="nomeproduto">Calça Moletom SDMN</p>
                        <p className="price">R$ 129,90</p>

                        <button>comprar</button>

                    </div>        
          </div>

        </article>
      </section>
    );


}
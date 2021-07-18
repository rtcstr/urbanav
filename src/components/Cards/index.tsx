//css
import './style.css'

//products
import blusaazul from '../../assets/products/blusaazul.png'
import blusacinza from '../../assets/products/blusacinza.png'
import blusapreta from '../../assets/products/blusapreta.png'
import calcabasica from '../../assets/products/calcabasica.png'
import calcapolar from '../../assets/products/calcapolar.png'
import calcasdmn from '../../assets/products/calcasdmn.png'


export function Cards () {
    return (

      <section className="productcard">
          
          <article>
            <h3>seleção <span>inverno</span></h3>

                <div className="container">
                        <div className="card">
                            
                            <img height="336px" width="292px" src={blusacinza} alt="moletom cinza"/>

                            <p className="nomeproduto">Moletom Básico Cinza</p>
                            <p className="price">R$ 159,90</p>

                            <button>comprar</button>

                        </div>

                        <div className="card">
                            
                            <img height="336px" width="292px" src={blusapreta} alt="moletom preto"/>

                            <p className="nomeproduto">Moletom Básico Preto</p>
                            <p className="price">R$ 159,90</p>

                            <button>comprar</button>

                        </div>

                        <div className="card">
                            
                            <img height="336px" width="292px" src={blusaazul} alt="moletom azul"/>

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

            
            <h3>calças <span>masculinas</span></h3>
            <div className="container">
                <div className="card">
                    
                    <img height="336px" width="292px" src={calcabasica} alt="calça básica"/>

                    <p className="nomeproduto">Calça Moletom Básica</p>
                    <p className="price">R$89,90</p>

                    <button>comprar</button>

                </div>

                <div className="card">
                    
                    <img height="336px" width="292px" src={calcapolar} alt="calça polar Nike"/>

                    <p className="nomeproduto">Calça Polar Nike</p>
                    <p className="price">R$ 259,90</p>

                    <button>comprar</button>

                </div>

                <div className="card">
                    
                    <img height="336px" width="292px" src={calcasdmn} alt="calça SDMN"/>

                    <p className="nomeproduto">Calça Moletom SDMN</p>
                    <p className="price">R$ 129,90</p>

                    <button>comprar</button>

                </div>        
          </div>

        </article>
      </section>
    );


}
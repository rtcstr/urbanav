//css
import './style.css'

//banners
import banneradidas from '../../assets/banners/banneradidas.png'
import bannervans from '../../assets/banners/bannervans.png'
import bannerskate from '../../assets/banners/bannerskate.png'
import bannerconverse from '../../assets/banners/bannerconverse.png'
import bannerpuma from '../../assets/banners/bannerpuma.png'

export function Gridbanners () {
    return (

       <section className="grid global-container">
           
           <a href="/" className="skate">
               <img src={bannerskate} alt="Seleção Skate"/>
               <p>Toda a linha Skate com até 40% OFF</p>
               
               Comprar 
               
            </a>

            <div className="banner-promocao">

                <div className="top-banners">
                    <a href="/" className="vans">
                        <img src={bannervans} alt="Vans"/>
                        <p>Toda a linha Vans com até 70% OFF</p>
                        
                        Comprar         
                    </a>


                    <a href="/" className="adidas">
                        <img src={banneradidas} alt="Adidas"/>
                        <p>Toda a linha Adidas com até 40% OFF</p>
                        
                        Comprar
                    </a>

                </div>


                <div className="bottom-banners">
                    <a href="/" className="converse">
                        <img src={bannerconverse} alt="Converse"/>
                        <p>Linha Converse com até 90% OFF</p>
                        
                        Comprar
                    </a>

                    <a href="/" className="puma">
                        <img src={bannerpuma} alt="Puma"/>
                        <p>Toda linha Puma com até 60% OFF</p>
                        
                        Comprar  
                    </a> 
                </div>

            </div>

       </section>

    );


}
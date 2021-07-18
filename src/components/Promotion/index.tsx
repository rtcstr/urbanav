//css
import './style.css'

//banners
import homebanner from '../../assets/banners/homebanner.png'

export function Promotion () {
    return (

       <section>
       <a href='https://br.freepik.com/psd/bandeira'><img  height="456px" width="100%" src={homebanner} alt="Big Sale até 90% OFF nos produtos selecionados"/></a>
    
        
        <h1 className="h1">BIG SALE URBANAV</h1>
       
        <div className="descontos">
            <div>ATÉ 40%OFF</div>
            <div>ATÉ 60%OFF</div>
            <div>ATÉ 80%OFF</div>
            <div>ATÉ 90%OFF</div>
        </div>


         
       </section>

    );


}
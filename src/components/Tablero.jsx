import { useState } from "react"
import './Tablero.css'
const Tablero = ({ carta, position, contador })=>{
   
    const [cara, setCara]= useState(carta.x)

   
    const cambiaCara = (aleatorio,)=>{
        
        if (position === aleatorio){
            setCara(carta.chest)
            setTimeout(() => {
            alert('Lo conseguiste en '+(contador+1)+' intentos, Enhorabuena!!!!!')
            window.location.reload()   
            }, 300);
            
        }else{
            setCara(carta.skull)}
       
    }
    return <div>     
       <img  className="carta" onClick={()=> cambiaCara(carta.aleatorio)} src = {cara} alt={carta.aleatorio}></img>
   
    
   
    </div>
}


export default Tablero

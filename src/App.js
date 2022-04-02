import logo from './logo.svg';
import './App.css';
import skull from './img/skull.png'
import x from './img/x.png'
import chest from './img/chest.png'
import Tablero from './components/Tablero';
import { useState } from 'react';



const aleatorio = (min,max)=>{
  return Math.floor(Math.random()*(max-min))+min; 
}

const images ={
  x: x,
  chest: chest,
  skull: skull,
  aleatorio: aleatorio(1,21),
 }

function App() {
  const position = 1;
  const [contador, setContador]= useState(0)
 
  function clicked(){
    setContador(contador+1)
  }
 
  return (
    
      <div className="App template">
      <div>
      <div>
        <h1>BUSQUEDA DEL TESORO</h1>
      </div>
        <h2>WITH REACT</h2>
        <h3>By jaelEspinosa ©</h3>
        <img src={logo} className="App-logo" alt="logo" />
        <h2>ENCUETRA EL TESORO</h2>
        <div>
          <img src={chest} alt="x"></img>
        </div>
        <h2>ENTRE TODAS LAS</h2>
        <div>
          <img src={skull} alt="x"></img>
        </div>
      </div>

      <div  onClick={clicked}  className="tablero">
        
        <Tablero className="carta" contador={contador} carta={images} position={position} />
        <Tablero className="carta" contador={contador} carta={images} position={position + 1} />
        <Tablero className="carta" contador={contador} carta={images} position={position + 2} />
        <Tablero className="carta" contador={contador} carta={images} position={position + 3} />
        <Tablero className="carta" contador={contador} carta={images} position={position + 4} />
        <Tablero className="carta" contador={contador} carta={images} position={position + 5} />
        <Tablero className="carta" contador={contador} carta={images} position={position + 6} />
        <Tablero className="carta" contador={contador} carta={images} position={position + 7} />
        <Tablero className="carta" contador={contador} carta={images} position={position + 8} />
        <Tablero className="carta" contador={contador} carta={images} position={position + 9} />
        <Tablero className="carta" contador={contador} carta={images} position={position + 10} />
        <Tablero className="carta" contador={contador} carta={images} position={position + 11} />
        <Tablero className="carta" contador={contador} carta={images} position={position + 12} />
        <Tablero className="carta" contador={contador} carta={images} position={position + 13} />
        <Tablero className="carta" contador={contador} carta={images} position={position + 14} />
        <Tablero className="carta" contador={contador} carta={images} position={position + 15} />
        <Tablero className="carta" contador={contador} carta={images} position={position + 16} />
        <Tablero className="carta" contador={contador} carta={images} position={position + 17} />
        <Tablero className="carta" contador={contador} carta={images} position={position + 18} />
        <Tablero className="carta" contador={contador} carta={images} position={position + 19} />
      </div>
       
       <div>
       <div className="marcador">
          <h2>INTENTOS</h2>
          <h4>{contador}</h4>
       </div>

       </div>
      
     
    </div>
  );
}

export default App;

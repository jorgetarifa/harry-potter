//DOM & API

const myFormulario = document.getElementById('myFormulario') 
const myBtn = document.getElementById('myBtn')
let myName = document.getElementById('myName')
let myHouse = document.getElementById('myHouse')
let myImage = document.getElementById('myImage')
const url = ('https://fedeperin-harry-potter-api.herokuapp.com/personajes')

//Prevent default 
myFormulario.addEventListener( 'submit', (e) => e.preventDefault() )

//Onclick btn
myBtn.addEventListener( 'click', async () => {
  
try{
   
   let res = await fetch(url)
   let data = await res.json()
   console.log(data);
   
   let i = Math.floor( Math.random() * data.length )    
 
   data.forEach( () => {  
  
    myHouse.innerHTML = (data[i].casaDeHogwarts === 'ninguna' ) ? ' Gryffindor' : data[i].casaDeHogwarts
    myName.innerHTML = (data[i].personaje === 'Albus Percival Wulfric Brian Dumbledore') ? 'Albus Dumbledore' : data[i].personaje
    myImage.setAttribute( 'src', `${ data[i].imagen }` )     
            
   })
   }
   catch{ ( error ) => console.log( error ) }
   finally{
     console.log('Lol');
   }
}
)




 

  



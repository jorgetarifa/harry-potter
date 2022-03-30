//DOM & API
const containerAll = document.querySelector('.container')
const url = ('http://hp-api.herokuapp.com/api/characters')
const prevenir = (e) => e.preventDefault();


const pintar = async () => {

try{
   let res = await fetch(url),
   data = await res.json();
 

   data.forEach((el) => {
      const { image, name, house } = el;
      console.log(el);
      let house1 = house ? house : 'Gryffindor'
      let name1 = name ? name : 'Name Character'

     if(image) {

       containerAll.innerHTML = `
       <form class="characters">
          <img src=${image} alt=${name1} class="image">
          <h3 class="name">  ${name1} </h3> 
          <h4 class="house"> ${house1} </h4> 
          <button class="btn"> Nuevo personaje </button>
                    
       </form>  
     
          `
   
        console.log(`${name} ${house} ${image}` );
     } 
     })
   }
catch{ (error)
 } finally  {
 }
}
pintar()
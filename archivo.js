

const contenido = document.getElementById("contenidoPok")
const fetchData = async() =>{
    try{
        const res = await fetch("https://rickandmortyapi.com/api/character");
        const  data = await res.json()
        const pregunta = data.results
        
    pregunta.forEach(pregunt => {
            const item = document.createElement("div")
            item.className ="cartita" 
            item.innerHTML += `
            
            <img src="${pregunt.image}" alt="">
            <h3>${pregunt.name} </h3>
            <p> ${pregunt.status} </p>
            <p> ${pregunt.species} </p>
            
            `
            contenido.appendChild(item)


        });
    }catch(error){
        console.log("Se produjo un error: ",)
    }
}
fetchData()
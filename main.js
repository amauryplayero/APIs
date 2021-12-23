// const { default: axios } = require("axios")

let residentsBtn = document.querySelector('#get_resident')

let baseURL = "https://swapi.dev/api/planets/?search=Alderaan"

// https://swapi.dev/api/people/?search=

let swapiCallBack = (response) =>{
    let results = response.data.results
    console.log(results[0].residents)
    // for(let i=0; )

//   for(let i in response.data){
//       console.log(i)
//   }
    
    // residents = response.data.results.residents
    // for(let i=0; i<)
    
}


let buttonClicked = () => {
    // console.log('kljdf')
    axios.get(baseURL).then(swapiCallBack)
    // console.log(axios.get(baseURL))
}

residentsBtn.addEventListener('click', buttonClicked)
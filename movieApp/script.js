// const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1'
// const IMG_PATH = "https://image.tmdb.org/t/p/w1280/"

// const main = document.getElementById('main')

// // Get inital movies

// getMovies()

// async function getMovies() {
//     const result = await fetch("index.json")
//     const data = await result.json()
//     console.log(data.results[0].overview)
//     showMovies(data.results)
//   }

//   function showMovies(movies) { 

//     movies.forEach((movie) =>{
//         const {title, poster_path,vote_average,overview} = movie

//         const movieEl = document.createElement('div')
//         movieEl.classList.add('movie')

//         movieEl.innerHTML = `
//            <img src="${IMG_PATH + poster_path}" />
//            <div class="movie_info">
//             <h3>${title}</h3>
//             <span> ${vote_average} </span>
//             <p>
//                 ${overview}
//             </p>
//            </div>
//         `
//         main.appendChild(movieEl)
//     });
//    }


// const country = {
//     name : "გერმანია",
//     language : "გერმანული",
//         capital :{
//             name : "ბერლინი",
//             population :3123123,
//             year : 1945
//         }
// }

// console.log(country.capital.name)

const country = {
    name: "შვეიცარია",
    languages: ["გერმანული", "ფრანგული", "იტალიური"],
    capital: {
        name: "ბერნ",
        population: 3123123,
    },
    cities: [
        { name: "ციურიხი", population: 123, },
        { name: "ჟენევა", population: 321, },
        { name: "ბაზელი", population: 345, }
    ]
}

for (let i = 0; i < country.cities.length; i++) {
    // console.log(country.cities[i].population)
    let citiesByName = country.cities[i].name
    let citiesByPopulation = country.cities[i].population
    if (citiesByPopulation == 321) {
        console.log(citiesByName)
    }
}
let citiesByName = "name";
// console.log(citiesByName)

console.log(3 + "3") //33
console.log(typeof 0 - "3" * (-1)) //

console.log(5 == "5")
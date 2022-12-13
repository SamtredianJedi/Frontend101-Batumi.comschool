const API_URL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1"
const IMG_PATH = "https://image.tmdb.org/t/p/w1280/"


const main = document.getElementById("main")


// Get initial movies

getMovies(API_URL)

async function getMovies() {
    const result = await fetch("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1")
    const data = await result.json()

    console.log(data.results)
}

function showMovies(movies) {

    movies.forEach((movie) => {
        const { title, poster_path, vote_average, overview } = movie

        const movieEl = document.createElement("div")
        movieEl.classList.add("movie")

        movieEl.innerHTML = `
           <img src="${IMG_PATH + poster_path}" />
            <div class="movie_info">
                <h3>$(title)</h3>
                <span>${vote_average}</span>
                <p>
                    ${overview}
                </p>
            </div>
        `

        main.appendChild(movieEl)

    });
}
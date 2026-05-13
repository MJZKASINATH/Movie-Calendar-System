function filterMovies() {
    let input = document.getElementById('movieSearch').value.toLowerCase();
    let movies = document.querySelectorAll('.movie-container');

    movies.forEach(movie => {
        let titleElement = movie.querySelector('.title');
        if (titleElement) {
            let titleText = titleElement.textContent.toLowerCase();
            if (titleText.includes(input)) {
                movie.style.display = "";
            } else {
                movie.style.display = "none"; 
            }
        }
    });
}
const movieCards=document.querySelectorAll(".movie-card");
const detailsSection=document.getElementById("detailsSection");
const moviePoster=document.getElementById("moviePoster");
const movieTitle=document.getElementById("movieTitle");
const movieBoxOffice=document.getElementById("movieBoxOffice");
const movieDate=document.getElementById("movieDate");
const movieRating=document.getElementById("movieRating");
const movieGenre=document.getElementById("movieGenre");
const movieDuration=document.getElementById("movieDuration");
const movieLanguage=document.getElementById("movieLanguage");
const movieDescription=document.getElementById("movieDescription");
movieCards.forEach(card=>{
    card.addEventListener("click",()=>{
        detailsSection.style.display="block";
        moviePoster.src=card.dataset.poster;
        movieTitle.innerText=card.dataset.title;
        movieBoxOffice.innerText=card.dataset.boxoffice;
        movieDate.innerText=card.dataset.date;
        movieRating.innerText=card.dataset.rating;
        movieGenre.innerText=card.dataset.genre;
        movieDuration.innerText=card.dataset.duration;
        movieLanguage.innerText=card.dataset.language;
        movieDescription.innerText=card.dataset.description;
        detailsSection.scrollIntoView({
            behavior:"smooth"
        });
    });
});
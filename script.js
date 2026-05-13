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

const searchInput=document.querySelector(".search-box input");
searchInput.addEventListener("keyup",()=>{
    const searchValue=searchInput.value.toLowerCase();
    movieCards.forEach(card=>{
        const movieName=card.dataset.title.toLowerCase();
        if(movieName.includes(searchValue)){
            card.style.display="block";
        }
        else{
            card.style.display="none";
        }
    });
});
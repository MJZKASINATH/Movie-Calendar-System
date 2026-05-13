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

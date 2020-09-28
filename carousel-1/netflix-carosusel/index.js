const sliders = document.querySelector(".carouselbox");

// For showing dynamic contents only
async function showMoviesData() {
  const api_key = '47071116ad3913e09389a88eb1f895b6'
    var result = await axios.get('https://api.themoviedb.org/3/discover/movie?api_key=' +  api_key + '&primary_release_year=2017&sort_by=revenue.desc')
    
    result = result.data.results
    result.map(function(cur, index) {
        sliders.insertAdjacentHTML("afterbegin",`<img class="img-1 slider-img" src="http://image.tmdb.org/t/p/w185/${cur.poster_path}" /> `)
    })
}

showMoviesData()


// Scroll Functionality

var scrollAmount = 0;

const sampleImage = document.querySelector(".img-1");

function sliderScrollLeft() {
    sliders.scrollTo({
      top: 0,
      left: scrollAmount -= 400,
      behavior: 'smooth'
    });

    if(scrollAmount < 0) {
      scrollAmount = 0
    }
  
  }


function sliderScrollRight() {
  if(scrollAmount < sliders.clientWidth) {
    sliders.scrollTo({
      top: 0,
      left: scrollAmount += 400,
      behavior: 'smooth'
    });
  
  }

}

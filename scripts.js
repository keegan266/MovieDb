//global variables
var shows = [];

//constructor to store tv shows
function TvShows(name, img, overview, score) {
    this.tvName = name;
    this.tvImg = img;
    this.tvOverview = overview;
    this.tvScore = score;    
}

//setting up jQuery for ajax
$(document).ready(() => {    
    //setting up ajax
    $.ajax({
        //url to connect to movie database and get the popular list of movies
        url: "https://api.themoviedb.org/3/tv/popular?api_key=342ca3c54a266dbfc90258ddb27a03bf&language=en-US&page=1", success: function(result) {
            var i = 0;
            //for loop to store tvshows in an object and then pushing to an array
            for (i = 0; i < result.results.length; i++) {
                //stores incoming tv show objects from the movie database into a new object
                var tvShow = new TvShows(result.results[i].name, result.results[i].poster_path, 
                    result.results[i].overview, result.results[i].vote_average);
                
                //pushes the object into an array everytime the for loop is ran
                shows.push(tvShow);
                //console log for testing
                console.log(shows[i]);                             
            }
        }        
    }) 
})

//Setting up vue object
var app = new Vue({
    el: ('#app'),
    data: {
        //creates tvShows array of objects
        tvShows: [{
            //setting title property equal to the name that is saved in the shows array
            showTitle: shows.TvShows.tvName
        }]
    },
    methods: {
        
    }
});